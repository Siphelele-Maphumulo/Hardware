import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { Product } from './products/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: AngularFirestore) {}

  // Fetch products from Firebase
  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>('products').valueChanges();
  }

  // Add a new product to Firebase
  addProduct(product: Product): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('products').doc(id).set({
      ...product,
      prodID: id,
    });
  }

  // Update an existing product in Firebase
  updateProduct(product: Product): Promise<void> {
    return this.firestore.collection('products').doc(product.prodID).update({
      ...product,
    });
  }

  // Delete a product from Firebase
  deleteProduct(prodID: string): Promise<void> {
    return this.firestore.collection('products').doc(prodID).delete();
  }
}
