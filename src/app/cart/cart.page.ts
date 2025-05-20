import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService, CartItem } from '../fireservice.service';
import { Location } from '@angular/common';
import { LoadingController, ModalController } from '@ionic/angular';
import { ImagePreviewModalComponent } from '../components/image-preview-modal/image-preview-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: CartItem[] = [];
  totalItems = 0;
  totalAmount = 0;

  constructor(
    private fireService: FireserviceService,
    private location: Location,
    private router: Router,
    private loadingController: LoadingController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.fireService.getCartObservable().subscribe((items) => {
      this.cartItems = items;
      this.recalculateTotals();
    });
  }

  increaseQuantity(i: number) {
    this.fireService.incCartItem(this.cartItems[i]);
    this.recalculateTotals();
  }

  decreaseQuantity(i: number) {
    this.fireService.decCartItem(this.cartItems[i]);
    this.recalculateTotals();
  }

  removeItem(i: number) {
    this.fireService.removeCartItem(this.cartItems[i]);
    this.recalculateTotals();
  }

  private recalculateTotals() {
    this.totalItems = this.cartItems.reduce((sum, it) => sum + it.quantity, 0);
    this.totalAmount = this.cartItems.reduce(
      (sum, it) => sum + it.quantity * it.price,
      0
    );
  }

  checkout() {
    this.router.navigate(['/checkout'], {
      state: {
        totalAmount: this.totalAmount,
        cartItems: this.cartItems,
      },
    });
  }

  goBack() {
    this.location.back(); // or: this.router.navigate(['/order']);
  }

  writeReview(item: any) {
    console.log('Navigating to reviews page with product:', item);
    this.router.navigate(['/reviews'], {
      state: {
        product: {
          prodID: item.id,
          title: item.name,
          price: item.price,
          image: item.image || 'assets/default-product.png',
        },
      },
    });
  }

  async openImage(imageUrl: string) {
    const modal = await this.modalCtrl.create({
      component: ImagePreviewModalComponent,
      componentProps: {
        imageSrc: imageUrl,
      },
      cssClass: 'image-preview-modal',
    });
    await modal.present();
  }

  // ✅ NEW: Handles 'Browse Products' button
  browseProducts() {
    this.router.navigate(['/order']); // or any route you use for product browsing
  }

  // ✅ NEW: Handles 'View Past Purchases' button
  viewPastPurchases() {
    this.router.navigate(['/orders']); // or the route you've defined
  }
}
