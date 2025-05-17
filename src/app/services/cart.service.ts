import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];
  private cartObservable = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
      this.cartObservable.next(this.cart);
    }
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  getCartObservable() {
    return this.cartObservable.asObservable();
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getTotalItems(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  addProduct(product: CartItem) {
    const existing = this.cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
    this.saveCart();
    this.cartObservable.next(this.cart);
  }

  decreaseProduct(product: CartItem) {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index > -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
      this.saveCart();
      this.cartObservable.next(this.cart);
    }
  }

  removeProduct(product: CartItem) {
    const index = this.cart.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.saveCart();
      this.cartObservable.next(this.cart);
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.cartObservable.next(this.cart);
  }
}
