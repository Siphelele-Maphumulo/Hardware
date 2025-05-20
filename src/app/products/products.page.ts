import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from './product.model';
import { FireserviceService } from '../fireservice.service';
import { IonContent } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
})
export class ProductsComponent implements OnInit {
  @ViewChild(IonContent, { static: false }) content!: IonContent;
  products: any[] = [];
  filteredProducts: any[] = [];
  newProduct: Product = {
    prodID: '',
    image: '',
    title: '',
    amount: 0,
    catID: '',
    qty: 0,
    item_total_amt: 0,
  };

  selectedProductId: string | null = null;

  // Filter properties
  searchTerm: string = '';
  filterType: string = 'all';
  amountRange: any = { lower: 0, upper: 1000 };
  minAmount: number = 0;
  maxAmount: number = 1000;

  constructor(
    private fireService: FireserviceService,
    private firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.fireService.firestore
      .collection<Product>('products')
      .valueChanges({ idField: 'id' })
      .subscribe((data) => {
        this.products = data;
        this.filteredProducts = [...this.products]; // Initialize filteredProducts
        this.calculateAmountRange();
      });
  }

  calculateAmountRange() {
    if (this.products.length > 0) {
      this.minAmount = Math.floor(
        Math.min(...this.products.map((p) => p.amount))
      );
      this.maxAmount = Math.ceil(
        Math.max(...this.products.map((p) => p.amount))
      );
      this.amountRange = { lower: this.minAmount, upper: this.maxAmount };
    }
  }

  filterProducts() {
    this.filteredProducts = this.products.filter((product) => {
      const searchTermLower = this.searchTerm.toLowerCase();

      const matchesSearch =
        product.prodID?.toLowerCase().includes(searchTermLower) ||
        product.title?.toLowerCase().includes(searchTermLower) ||
        product.catID?.toLowerCase().includes(searchTermLower);

      const matchesAmount =
        product.amount >= this.amountRange.lower &&
        product.amount <= this.amountRange.upper;

      return matchesSearch && matchesAmount;
    });
  }

  // Function to generate a 10-digit product ID
  generateProductId(): string {
    return Math.floor(Math.random() * 9000000000 + 1000000000).toString();
  }

  addOrUpdateProduct() {
    // Calculate total amount
    this.newProduct.item_total_amt =
      this.newProduct.amount * this.newProduct.qty;

    if (this.selectedProductId) {
      // Update existing product
      this.fireService.firestore
        .collection('products')
        .doc(this.selectedProductId) // Access the document by ID
        .update(this.newProduct)
        .then(() => {
          alert('Product updated successfully!');
          this.resetForm();
          this.loadProducts();
        })
        .catch((err) => {
          console.error('Error updating product:', err);
        });
    } else {
      // Add new product with generated product ID
      this.newProduct.prodID = this.generateProductId(); // Generate a 10-digit product ID

      // Set the new product in Firestore
      this.fireService.firestore
        .collection('products')
        .add(this.newProduct)
        .then(() => {
          alert('Product added successfully!');
          this.resetForm();
          this.loadProducts();
        })
        .catch((err) => {
          console.error('Error adding product:', err);
        });
    }
  }

  deleteProduct(docId: string) {
    this.fireService.firestore
      .collection('products')
      .doc(docId)
      .delete()
      .then(() => {
        alert('Product deleted');
        this.loadProducts();
      })
      .catch((err) => {
        console.error('Error deleting product:', err);
      });
  }
  updateProduct(product: Product) {
    // 1) Load the product into the form
    this.selectedProductId = product.id;
    this.newProduct = { ...product };

    // 2) Scroll up to the top of the ion-content
    this.content.scrollToTop(300); // 300ms animation
  }

  resetForm() {
    this.selectedProductId = null;
    this.newProduct = {
      prodID: '',
      image: '',
      title: '',
      amount: 0,
      catID: '',
      qty: 0,
      item_total_amt: 0,
    };
  }
}
