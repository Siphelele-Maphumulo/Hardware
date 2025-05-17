import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class FireserviceService {
  private cart: CartItem[] = [];
  private cart$ = new BehaviorSubject<CartItem[]>([]);

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    private fns: AngularFireFunctions,
    private afs: AngularFirestore
  ) {}

  // Login with email and password
  loginWithEmail(data: { email: string; password: string }) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password);
  }

  // Signup with email and password
  signup(data: { email: string; password: string }) {
    return this.auth.createUserWithEmailAndPassword(data.email, data.password);
  }

  // Save user details in Firestore
  saveDetails(data: any) {
    return this.firestore.collection('users').doc(data.uid).set(data);
  }

  /**
   * Get user details from Firestore.
   * Accepts either a uid string or an object with a uid property.
   */
  getDetails(uidOrObj: string | { uid: string }): Observable<any> {
    const uid = typeof uidOrObj === 'string' ? uidOrObj : uidOrObj.uid;
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  // Update Cart in Firestore (new method)
  updateCart(cartItems: CartItem[]) {
    const user = JSON.parse(localStorage.getItem('user')!);
    if (user && user.uid) {
      return this.firestore
        .collection('users')
        .doc(user.uid)
        .update({ cart: cartItems });
    }
    return Promise.reject('User not logged in');
  }

  // Returns true if the user is logged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false;
  }

  // Returns true if the user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user?.emailVerified !== false;
  }

  // Authenticate user from local storage
  authUser(user: any) {
    const users = JSON.parse(localStorage.getItem('Users') || '[]');
    return users.find(
      (p: any) =>
        p.user.userName === user.userName && p.password === user.password
    );
  }

  // Add product to Firestore with an ID
  addProductWithId(id: string, product: any) {
    return this.firestore.collection('products').doc(id).set(product);
  }

  // Fetch all products from the 'products' collection
  getProducts(): Observable<any[]> {
    return this.firestore
      .collection('products')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            if (data && typeof data === 'object') {
              return { id, ...data };
            } else {
              console.warn('Received non-object data:', data);
              return { id };
            }
          })
        )
      );
  }

  // — Begin cart methods —

  /** Observable stream of cart changes */
  getCartObservable(): Observable<CartItem[]> {
    return this.cart$.asObservable();
  }

  // Add an item to the cart
  addToCart(item: CartItem) {
    const existingItem = this.cart.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
    this.cart$.next(this.cart);
  }

  // Increase item quantity by 1
  increaseCartItemQuantity(item: CartItem) {
    const index = this.cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.cart[index].quantity++;
    }
    this.cart$.next(this.cart);
  }

  // Decrease item quantity by 1 or remove if quantity is 1 or less
  decreaseCartItemQuantity(item: CartItem) {
    const index = this.cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
      } else {
        this.cart.splice(index, 1);
      }
    }
    this.cart$.next(this.cart);
  }

  // Remove item from cart
  removeCartItem(item: CartItem) {
    this.cart = this.cart.filter((i) => i.id !== item.id);
    this.cart$.next(this.cart);
  }

  // Get cart items as observable
  getCart(): Observable<CartItem[]> {
    return this.cart$.asObservable();
  }

  // Get raw cart (not observable)
  getRawCart(): CartItem[] {
    return [...this.cart];
  }

  // Get total items
  getTotalItems(): number {
    return this.cart.reduce((total, item) => total + item.quantity, 0);
  }

  // Get total price
  getTotalPrice(): number {
    return this.cart.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  }

  // Clear cart
  clearCart() {
    this.cart = [];
    this.cart$.next([]);
  }

  // … existing addToCart, increaseCartItemQuantity, decreaseCartItemQuantity, etc. …

  /**
   * New: increase quantity by 1 for direct button binding
   * Internally calls your existing method
   */
  incCartItem(item: CartItem) {
    // simply delegate
    this.increaseCartItemQuantity(item);
  }

  /**
   * New: decrease quantity by 1 (or remove) for direct button binding
   * Internally calls your existing method
   */
  decCartItem(item: CartItem) {
    this.decreaseCartItemQuantity(item);
  }

  /** Get Total amount gor checkout **/
  getTotalAmount(): Observable<number> {
    return this.cart$.pipe(
      map((items) =>
        items.reduce((sum, item) => sum + item.price * item.quantity, 0)
      )
    );
  }

  // Trigger cloud function to send email
  sendReceiptEmail(email: string, receipt: any) {
    return fetch(
      'https://us-central1-harware-8f5e9.cloudfunctions.net/sendReceiptEmail',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, ...receipt }),
      }
    );
  }

  saveReceipt(receipt: any) {
    return this.afs.collection('receipts').doc(receipt.id).set(receipt);
  }
}
