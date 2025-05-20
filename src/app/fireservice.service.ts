import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// Add these imports at the top
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { User } from 'src/app/model/user.model';
import { DocumentReference } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { increment } from 'firebase/firestore';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface Message {
  id?: string;
  userId: string;
  reviewId: string;
  text: string;
  fromAdmin: boolean;
  date: string;
  read: boolean;
}

interface Review {
  reviewId: string;
  userId: string;
  userEmail: string;
  userName: string;
  productId: string;
  productName: string;
  title: string;
  content: string;
  rating: number;
  status: 'pending' | 'approved' | 'rejected';
  date: string;
  lastUpdated: string;
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

  // Update product quantities after purchase
  async updateProductQuantities(receipt: any): Promise<boolean> {
    try {
      const batch = this.firestore.firestore.batch();

      for (const item of receipt.items) {
        // Ensure productId is a string and exists
        if (!item.productId || typeof item.productId !== 'string') {
          console.error('Invalid product ID:', item.productId);
          continue;
        }

        const productRef = this.firestore
          .collection('products')
          .doc(item.productId).ref;

        // Fetch the product to check if it exists
        const docSnapshot = await productRef.get();
        if (!docSnapshot.exists) {
          console.warn(`Product does not exist: ${item.productId}`);
          continue; // Skip this product instead of failing
        }

        batch.update(productRef, {
          qty: increment(-item.quantity),
          lastUpdated: new Date(),
        });
      }

      await batch.commit();
      return true;
    } catch (error) {
      console.error('Error updating product quantities:', error);
      return false;
    }
  }

  // Get low stock count (products with qty < threshold)
  getLowStockCount(threshold: number = 10): Observable<number> {
    return this.firestore
      .collection('products', (ref) => ref.where('qty', '<=', threshold))
      .valueChanges()
      .pipe(
        map((products) => products.length),
        catchError(() => of(0))
      );
  }

  // Get order count (all receipts)
  getOrderCount(): Observable<number> {
    return this.firestore
      .collection('receipts')
      .valueChanges()
      .pipe(
        map((receipts) => receipts.length),
        catchError(() => of(0))
      );
  }

  // Get pending reviews count
  getNewReviewsCount(): Observable<number> {
    return this.firestore
      .collection('reviews', (ref) => ref.where('status', '==', 'pending'))
      .valueChanges()
      .pipe(
        map((reviews) => reviews.length),
        catchError(() => of(0))
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

  getAllUsers() {
    return this.firestore
      .collection<User>('users')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((a) => {
            const data = a.payload.doc.data() as User;
            const id = a.payload.doc.id;
            return { ...data };
          });
        })
      );
  }

  /**
   * Alternative method using valueChanges()
   * (if you don't need the document metadata)
   */
  getAllUsersSimple() {
    return this.firestore
      .collection<User>('users')
      .valueChanges({ idField: 'uid' });
  }

  /**
   * Update user data in Firestore
   * @param uid User ID
   * @param data Partial user data to update
   */
  async updateUserData(uid: string, data: Partial<User>) {
    try {
      await this.firestore.collection('users').doc(uid).update(data);
      return true;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }

  /**
   * Delete user completely (both auth and firestore data)
   * @param uid User ID to delete
   */
  async deleteUser(uid: string) {
    try {
      // Delete from Firestore first
      await this.firestore.collection('users').doc(uid).delete();

      // Then delete auth record
      const currentUser = await this.auth.currentUser;
      if (currentUser && currentUser.uid === uid) {
        await currentUser.delete();
      } else {
        // For admin deleting other users, we need to reauthenticate first
        // This requires the admin's credentials
        throw new Error('Admin must reauthenticate to delete other users');
      }

      return true;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  /**
   * Update user's email in both auth and firestore
   * @param uid User ID
   * @param newEmail New email address
   */
  async updateUserEmail(uid: string, newEmail: string) {
    try {
      // Update in Authentication
      const user = await this.auth.currentUser;
      if (user) {
        await user.updateEmail(newEmail);
      }

      // Update in Firestore
      await this.firestore.collection('users').doc(uid).update({
        email: newEmail,
        emailVerified: false,
      });

      return true;
    } catch (error) {
      console.error('Error updating email:', error);
      throw error;
    }
  }

  /**
   * Update user's password
   * @param newPassword New password
   */
  async updateUserPassword(newPassword: string) {
    try {
      const user = await this.auth.currentUser;
      if (user) {
        await user.updatePassword(newPassword);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  }

  /**
   * Get single user by UID
   * @param uid User ID
   */
  async getUser(uid: string): Promise<User | null> {
    try {
      const doc = await this.firestore
        .collection('users')
        .doc(uid)
        .get()
        .toPromise();
      return doc.exists ? (doc.data() as User) : null;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  }

  // In your submitReview method (fireservice.service.ts)
  async submitReview(reviewData: any): Promise<string> {
    try {
      const user = await this.getCurrentUser();
      if (!user) throw new Error('User not authenticated');

      // Create document reference with AngularFire typing
      const reviewRef: DocumentReference = this.firestore
        .collection('reviews')
        .doc().ref;
      const reviewId = reviewRef.id;

      const reviewWithMetadata = {
        ...reviewData,
        reviewId,
        userId: user.uid,
        userEmail: user.email || '',
        userName:
          reviewData.userName ||
          user.displayName ||
          (user.email ? user.email.split('@')[0] : 'User'),
        date: new Date().toISOString(),
        status: 'pending',
        lastUpdated: new Date().toISOString(),
      };

      await reviewRef.set(reviewWithMetadata);
      return reviewId;
    } catch (error) {
      console.error('Error submitting review:', error);
      throw error;
    }
  }

  getCurrentUserEmail(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        console.log('Auth state changed. User:', user);
        resolve(user); // user is an object, not just an email string
      }, reject);
    });
  }

  // Add this method to get user data
  async getUserData(uid: string): Promise<any> {
    try {
      const userDoc = await this.firestore
        .collection('users')
        .doc(uid)
        .get()
        .toPromise();
      return userDoc.exists ? userDoc.data() : null;
    } catch (error) {
      console.error('Error getting user data:', error);
      return null;
    }
  }

  // User methods
  getCurrentUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged(
        (user) => {
          console.log('🔥 Firebase Auth State Changed. User:', user); // 👈🏽 This will always show you the raw user
          resolve(user);
        },
        (error) => {
          console.error('Error in onAuthStateChanged:', error);
          reject(error);
        }
      );
    });
  }

  //get whats on cart
  getCartOnce(): Promise<CartItem[]> {
    return new Promise((resolve) => {
      this.getCartObservable()
        .subscribe((items) => {
          resolve(items);
        })
        .unsubscribe(); // important: unsubscribe after one emit
    });
  }

  // Get all reviews messages
  getAllReviewsMessages(): Observable<any[]> {
    return this.firestore
      .collection('reviews')
      .valueChanges({ idField: 'id' })
      .pipe(
        switchMap((reviews) => {
          if (!reviews || reviews.length === 0) return of([]);

          // For each review, get its messages
          return combineLatest(
            reviews.map((review) =>
              this.firestore
                .collection('messages', (ref) =>
                  ref.where('reviewId', '==', review.id).orderBy('date', 'asc')
                )
                .valueChanges()
                .pipe(
                  map((messages) => ({
                    ...review,
                    messages: messages || [],
                    loadingMessages: false,
                  })),
                  catchError((error) => {
                    console.error(
                      `Error loading messages for review ${review.id}:`,
                      error
                    );
                    return of({
                      ...review,
                      messages: [],
                      loadingMessages: false,
                    });
                  })
                )
            )
          );
        }),
        catchError((error) => {
          console.error('Error loading reviews:', error);
          return of([]);
        })
      );
  }

  // Send message to user from admin
  async sendMessageToUser(
    userId: string,
    message: string,
    reviewId: string
  ): Promise<boolean> {
    try {
      await this.firestore.collection('messages').add({
        reviewId: reviewId, // This is the crucial connection
        userId: userId,
        text: message,
        fromAdmin: true,
        date: new Date().toISOString(),
        read: false,
      });
      return true;
    } catch (error) {
      console.error('Error sending message:', error);
      return false;
    }
  }

  // Get all reviews with their messages
  getAllReviewsWithMessages(): Observable<any[]> {
    return combineLatest([
      this.firestore
        .collection<Review>('reviews')
        .valueChanges({ idField: 'reviewId' }),
      this.firestore
        .collection<Message>('messages')
        .valueChanges({ idField: 'id' }),
    ]).pipe(
      map(([reviews, messages]) => {
        return reviews.map((review) => ({
          ...review,
          messages: messages
            .filter((msg) => msg.reviewId === review.reviewId)
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            ),
          loadingMessages: false,
        }));
      }),
      catchError((error) => {
        console.error('Error loading reviews with messages:', error);
        return of([]);
      })
    );
  }

  // Get all messages from the messages collection
  getMessagesFromReplyies(reviewId: string): Observable<any[]> {
    return this.firestore
      .collection('messages', (ref) =>
        ref.where('reviewId', '==', reviewId).orderBy('date', 'asc')
      )
      .valueChanges({ idField: 'id' });
  }

  // Delete a review
  deleteReview(reviewId: string) {
    return this.firestore.collection('reviews').doc(reviewId).delete();
  }

  // Update review status (approve/reject)
  updateReviewStatus(reviewId: string, status: 'approved' | 'rejected') {
    return this.firestore.collection('reviews').doc(reviewId).update({
      status,
      lastUpdated: new Date().toISOString(),
    });
  }

  // Get unread message count for a user
  getUnreadMessageCount(userId: string) {
    return this.firestore
      .collection('messages', (ref) =>
        ref.where('userId', '==', userId).where('read', '==', false)
      )
      .valueChanges()
      .pipe(map((messages) => messages.length));
  }
}
