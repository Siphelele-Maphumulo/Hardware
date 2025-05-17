import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {
  LoadingController,
  ModalController,
  AlertController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { FireserviceService } from 'src/app/fireservice.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit, OnDestroy {
  amount = 0;
  orders: any[] = [];
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
    private cartService: CartService
  ) {}

  ngOnInit() {
    // 1) empty out any persisted cart
    this.cartService.clearCart();
    this.total_amt = 0;
    this.totalItems = 0;
    this.orderSummary = [];

    // 2) now load your products
    this.presentLoading().then(() => {
      this.fireService.getProducts().subscribe((data) => {
        this.orders = data.map((item) => ({
          ...item,
          qty: 0,
          qtyLeft: item.qtyLeft ?? item.stock ?? item.qty,
        }));
        this.loadingController.dismiss();
        // no more immediate updateCartDetails() here
        this.cdr.detectChanges();
      });
    });

    // 3) still listen for real cart changes later
    this.cartSub = this.cartService.getCartObservable().subscribe(() => {
      this.totalItems = this.cartService.getTotalItems();
      this.total_amt = this.cartService.getTotal();
      this.updateOrderSummary();
      this.cdr.detectChanges();
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
    this.router.navigate(['/cart']);
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

  goBack() {
    this.router.navigate(['/home']);
  }
}
