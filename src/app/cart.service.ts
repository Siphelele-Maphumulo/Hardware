import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Added image property for consistency with your usage
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'shopping_cart';
  private cart: CartItem[] = [];
  private cart$ = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    this.loadCart(); // Load cart from storage on initialization
  }

  // Load cart from localStorage
  private loadCart(): void {
    const savedCart = localStorage.getItem(this.cartKey);
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.cart$.next(this.cart);
    }
  }

  // Save cart to localStorage
  private saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    this.cart$.next(this.cart);
  }

  getCart(): CartItem[] {
    return [...this.cart]; // Return a copy to prevent direct manipulation
  }

  getCartObservable() {
    return this.cart$.asObservable();
  }

  addProduct(product: CartItem): void {
    const existing = this.cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += product.quantity;
    } else {
      this.cart.push({ ...product });
    }

    this.saveCart();
  }

  increaseProduct(id: number): void {
    const product = this.cart.find((item) => item.id === id);
    if (product) {
      product.quantity++;
      this.saveCart();
    }
  }

  decreaseProduct(id: number): void {
    const product = this.cart.find((item) => item.id === id);

    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        this.removeProduct(id);
        return;
      }
      this.saveCart();
    }
  }

  removeProduct(id: number): void {
    this.cart = this.cart.filter((item) => item.id !== id);
    this.saveCart();
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  getTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  getTotalItems(): number {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  // Additional helper methods
  getItemQuantity(id: number): number {
    const item = this.cart.find((i) => i.id === id);
    return item ? item.quantity : 0;
  }

  // For notifications
  hasItems(): boolean {
    return this.cart.length > 0;
  }
}
