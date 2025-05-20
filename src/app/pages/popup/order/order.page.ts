import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {
  LoadingController,
  ModalController,
  AlertController,
  ToastController,
  PopoverController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { FireserviceService } from 'src/app/fireservice.service';
import { CartService } from 'src/app/services/cart.service';
import { ImagePreviewModalComponent } from 'src/app/components/image-preview-modal/image-preview-modal.component';
import { MenuPopoverComponent } from 'src/app/components/menu-popover/menu-popover.component'; // Adjust path

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit, OnDestroy {
  searchTerm: string = '';
  allOrders: any[] = []; // Backup copy of all orders
  orders: any[] = []; // Displayed (filtered) list

  amount = 0;
  total_amt = 0;
  totalItems = 0;
  notifications = 0;
  orderSummary: Array<{ name: string; quantity: number; price: number }> = [];

  private cartSub!: Subscription;

  constructor(
    private loadingController: LoadingController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private fireService: FireserviceService,
    private cartService: CartService,
    private toastCtrl: ToastController,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.cartService.clearCart();
    this.total_amt = 0;
    this.totalItems = 0;
    this.orderSummary = [];

    this.presentLoading().then(() => {
      this.fireService.getProducts().subscribe((data) => {
        this.orders = data.map((item) => ({
          ...item,
          qty: 0,
          qtyLeft: item.qtyLeft ?? item.stock ?? item.qty,
        }));
        this.allOrders = [...this.orders]; // Store original list for filtering

        this.loadingController.dismiss();
        this.cdr.detectChanges();
      });
    });

    this.cartSub = this.cartService.getCartObservable().subscribe(() => {
      this.totalItems = this.cartService.getTotalItems();
      this.total_amt = this.cartService.getTotal();
      this.updateOrderSummary();
      this.cdr.detectChanges();
    });
  }

  // In your component
  debounceTimer: any;

  filterOrdersDebounced() {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(() => this.filterOrders(), 200);
  }

  filterOrders() {
    const term = this.searchTerm.trim().toLowerCase();

    if (!term) {
      this.orders = [...this.allOrders]; // Show all when input is cleared
      return;
    }

    this.orders = this.allOrders.filter((order) => {
      const title = order.title?.toLowerCase() || '';
      const prodID = order.prodID?.toString() || '';
      return title.includes(term) || prodID.includes(term);
    });
  }

  ngOnDestroy() {
    this.cartSub?.unsubscribe();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
    });
    await loading.present();
  }

  goToCart() {
    this.router.navigate(['/cart'], { queryParams: { from: 'orders' } });
  }

  updateCartDetails() {
    const cart = this.cartService.getCart();

    if (cart.length === 0) {
      // stay at zero until someone adds
      this.total_amt = 0;
      this.totalItems = 0;
      this.orderSummary = [];
      return;
    }

    // otherwise, do the normal thing
    this.total_amt = this.cartService.getTotal();
    this.totalItems = this.cartService.getTotalItems();
    this.updateOrderSummary();
  }

  add(index: number) {
    const order = this.orders[index];
    if (order && order.qtyLeft > 0) {
      order.qty++;
      order.qtyLeft--;

      this.fireService.addToCart({
        id: Number(order.prodID),
        name: order.title,
        price: order.amount,
        quantity: 1,
        image: order.image, // ✅ Include image
      });

      this.updateOrderSummary();
    }
  }

  remove(index: number) {
    const order = this.orders[index];
    if (order && order.qty > 0) {
      order.qty--;
      order.qtyLeft++;

      this.fireService.decreaseCartItemQuantity({
        id: Number(order.prodID),
        name: order.title,
        price: order.amount,
        quantity: 1,
        image: order.image,
      });

      this.updateOrderSummary();
    }
  }

  updateOrderSummary() {
    const rawCart = this.fireService.getRawCart();
    this.orderSummary = rawCart.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }));
    this.total_amt = this.fireService.getTotalPrice();
    this.totalItems = this.fireService.getTotalItems();
  }

  deleteItem(prodID: number) {
    this.orders = this.orders.filter((item) => Number(item.prodID) !== prodID);
    this.updateCartDetails();
  }

  async checkout() {
    const alert = await this.alertCtrl.create({
      header: 'Thanks for your Order!',
      message: 'Siyeshe Holdings will deliver your Orders as soon as possible',
      buttons: ['OK'],
    });

    await alert.present();
    this.modalCtrl.dismiss().catch(() => console.warn('No modal to dismiss'));
    this.cartService.clearCart();
  }

  clearCart() {
    this.cartService.clearCart(); // Clear cart from service/storage
    this.total_amt = 0;
    this.totalItems = 0;
    this.orderSummary = [];

    // Reset quantities in the orders array (if any were added)
    this.orders = this.orders.map((order) => ({
      ...order,
      qty: 0,
      qtyLeft: order.qtyLeft ?? order.stock ?? order.qty,
    }));

    this.cdr.detectChanges(); // Ensure UI updates
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Clear Cart',
      // subHeader: 'Whoa there!',
      message: 'Are you sure you want to clear your cart?',
      animated: true,
      cssClass: 'alert-custom-style',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alert-button-cancel',
          handler: () => {
            console.log('Cart remains safe!');
          },
        },
        {
          text: 'Clear',
          cssClass: 'alert-button-delete',
          handler: () => {
            this.clearCart();
            this.showToast('Cart cleared successfully 🛒');
          },
        },
      ],
    });

    await alert.present();
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'danger',
      icon: 'trash-outline',
    });
    await toast.present();
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  async openImage(imageUrl: string) {
    const modal = await this.modalCtrl.create({
      component: ImagePreviewModalComponent,
      componentProps: {
        imageSrc: imageUrl,
      },
      cssClass: 'image-preview-modal',
    });

    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: MenuPopoverComponent,
      event: ev,
      translucent: true,
      showBackdrop: false,
    });
    await popover.present();
  }

  writeReview(item: any) {
    console.log('Item being reviewed:', item);

    const productData = {
      prodID: item.prodID.toString(),
      title: item.title,
      price: item.amount,
      image: item.image || 'assets/default-product.png',
    };

    console.log('Passing product data to review:', productData);

    this.router.navigate(['/reviews'], {
      state: {
        product: productData,
      },
    });
  }
}
