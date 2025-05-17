import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Define the structure for a cart item
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
  private cart: CartItem[] = []; // Local cart array to store cart items
  private cart$ = new BehaviorSubject<CartItem[]>([]); // Observable to notify any subscribers of cart changes

  constructor() {}

  // Get the current cart items
  getCart(): CartItem[] {
    console.log('Getting cart:', this.cart); // Debugging log
    return this.cart;
  }

  // Observable for the cart items, used in components to get updates
  getCartObservable() {
    return this.cart$.asObservable();
  }

  // Add product to the cart
  addProduct(product: CartItem) {
    console.log('Adding product:', product); // Debugging log
    const existing = this.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += product.quantity; // If product exists, increase the quantity
      console.log('Updated product in cart:', existing); // Debugging log
    } else {
      this.cart.push({ ...product, quantity: product.quantity }); // Add new product to the cart
      console.log('New product added to cart:', product); // Debugging log
    }
    this.cart$.next(this.cart); // Notify subscribers of the cart update
    console.log('Cart after addition:', this.cart); // Debugging log
  }

  // Decrease product quantity in the cart
  decreaseProduct(product: CartItem) {
    console.log('Decreasing product:', product); // Debugging log
    const item = this.cart.find((p) => p.id === product.id);
    if (item && item.quantity > 1) {
      item.quantity--; // Decrease the quantity if greater than 1
      console.log('Product quantity decreased:', item); // Debugging log
    } else {
      this.removeProduct(product); // Remove product if quantity is 1
      console.log('Product removed from cart:', product); // Debugging log
    }
    this.cart$.next(this.cart); // Notify subscribers
    console.log('Cart after decreasing product:', this.cart); // Debugging log
  }

  // cart.service.ts

  increaseProduct(item: any) {
    // Find the product in the cart
    const product = this.cart.find((p) => p.id === item.id);

    if (product) {
      // Increase the quantity of the product by 1
      product.quantity += 1;
    }

    // Update the cart (you might want to save it to local storage or server)
    this.saveCart();
  }

  // Method to save the updated cart to local storage or elsewhere
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Remove product from the cart
  removeProduct(product: CartItem) {
    console.log('Removing product:', product); // Debugging log
    this.cart = this.cart.filter((p) => p.id !== product.id); // Filter out the product
    this.cart$.next(this.cart); // Notify subscribers
    console.log('Cart after product removal:', this.cart); // Debugging log
  }

  // Clear all products from the cart
  clearCart() {
    console.log('Clearing cart'); // Debugging log
    this.cart = []; // Clear the cart array
    this.cart$.next([]); // Notify subscribers of the empty cart
    console.log('Cart after clearing:', this.cart); // Debugging log
  }

  // Get the total price of all items in the cart
  getTotal(): number {
    const total = this.cart.reduce((sum, p) => sum + p.price * p.quantity, 0);
    console.log('Total cart value:', total); // Debugging log
    return total;
  }

  // Get the total quantity of all items in the cart
  getTotalItems(): number {
    const totalItems = this.cart.reduce((acc, item) => acc + item.quantity, 0);
    console.log('Total items in cart:', totalItems); // Debugging log
    return totalItems;
  }
}
