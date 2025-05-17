import { Component, OnInit } from '@angular/core';
import { CartItem, FireserviceService } from 'src/app/fireservice.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // Don't forget to import Router
import { map } from 'rxjs/internal/operators/map';
import { Location } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItems: CartItem[] = []; // For non-observable approach
  totalAmount: number = 0; // For non-observable approach

  // OR if you want to use observables:
  cartItems$: Observable<CartItem[]>;
  totalAmount$: Observable<number>;

  constructor(
    private fireService: FireserviceService,
    private router: Router, // Inject Router
    private location: Location
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as {
      totalAmount: number;
      cartItems: CartItem[];
    };

    if (state) {
      // Using passed state data
      this.totalAmount = state.totalAmount;
      this.cartItems = state.cartItems;
    } else {
      // Fallback to service if page is refreshed
      this.fireService.getCart().subscribe((cartItems) => {
        this.cartItems = cartItems;
        this.totalAmount = cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      });
    }

    // If you prefer the observable approach, use this instead:

    this.cartItems$ = this.fireService.getCartObservable();
    this.totalAmount$ = this.fireService
      .getCartObservable()
      .pipe(
        map((items) =>
          items.reduce((sum, item) => sum + item.price * item.quantity, 0)
        )
      );
  }

  payNow() {
    // Implement payment logic here
    // After successful payment, you might want to clear the cart:
    // this.fireService.clearCart();
  }

  goBack() {
    this.location.back();
  }
}
