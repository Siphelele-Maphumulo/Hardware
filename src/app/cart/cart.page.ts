import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireserviceService, CartItem } from '../fireservice.service';
import { Location } from '@angular/common';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.fireService.getCartObservable().subscribe((items) => {
      this.cartItems = items;
      this.recalculateTotals();
    });
  }

  // ← New unique names
  increaseQuantity(i: number) {
    this.fireService.incCartItem(this.cartItems[i]);
  }

  decreaseQuantity(i: number) {
    this.fireService.decCartItem(this.cartItems[i]);
  }

  removeItem(i: number) {
    this.fireService.removeCartItem(this.cartItems[i]);
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
    this.router.navigate(['/order']);
  }
}
