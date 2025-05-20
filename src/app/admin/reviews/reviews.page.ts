import { Component, OnInit } from '@angular/core';
import {
  NavController,
  LoadingController,
  ToastController,
  AlertController,
} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FireserviceService } from '../../fireservice.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.page.html',
  styleUrls: ['./reviews.page.scss'],
})
export class ReviewsPage implements OnInit {
  selectedProduct: any = null;
  searchTerm = '';
  searchResults: any[] = [];
  purchasedItems: any[] = [];
  rating = 0;
  searchMode: 'search' | 'purchased' = 'purchased';

  review = {
    title: '', // Will be auto-populated with product title
    content: '',
    date: new Date().toISOString(),
    userId: '',
    userEmail: '',
    userName: '',
    productId: '',
    productName: '',
    rating: 0,
    status: 'pending', // Added status field
  };

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private firestore: AngularFirestore,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private fireService: FireserviceService
  ) {}

  async ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state;

    if (state && state['product']) {
      this.selectedProduct = this.sanitizeProductData(state['product']);
      console.log('Received product from state:', this.selectedProduct);
    }

    await this.initializeReview();
    await this.loadPurchasedItems();
  }

  private sanitizeProductData(product: any): any {
    return {
      prodID: product.prodID?.toString() || 'unknown',
      title: product.title || 'Unknown Product',
      price: product.price || 0,
      image: product.image || 'assets/default-product.png',
    };
  }

  async initializeReview() {
    if (this.selectedProduct) {
      // Set product-related fields
      this.review.productId = this.selectedProduct.prodID;
      this.review.productName = this.selectedProduct.title;
      this.review.title = this.selectedProduct.title; // Auto-populate review title

      // Get and set user details
      const user = await this.fireService.getCurrentUser();
      if (user) {
        this.review.userId = user.uid;
        this.review.userEmail = user.email || '';

        try {
          // Fetch complete user profile from Firestore
          const userDoc = await this.firestore
            .collection('users')
            .doc(user.uid)
            .get()
            .toPromise();
          const userData = userDoc?.data() as any;

          // Set username from profile if available, otherwise use displayName or email
          this.review.userName =
            userData?.name ||
            user.displayName ||
            (user.email ? user.email.split('@')[0] : 'User');
        } catch (error) {
          console.error('Error fetching user data:', error);
          this.review.userName =
            user.displayName ||
            (user.email ? user.email.split('@')[0] : 'User');
        }
      }
    }
  }

  async loadPurchasedItems() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading your purchases...',
    });
    await loading.present();

    try {
      const user = await this.fireService.getCurrentUser();
      if (!user?.email) return;

      const receiptsSnapshot = await this.firestore
        .collection('receipts', (ref) => ref.where('email', '==', user.email))
        .get()
        .toPromise();

      this.purchasedItems = [];
      receiptsSnapshot?.forEach((doc) => {
        const receipt: any = doc.data();
        if (receipt?.items) {
          receipt.items.forEach((item: any) => {
            this.purchasedItems.push({
              product: {
                prodID: item.id.toString(),
                title: item.name,
                price: item.price,
                image: item.image || 'assets/default-product.png',
              },
              date: receipt.timestamp,
              quantity: item.quantity,
            });
          });
        }
      });
    } catch (error) {
      console.error('Error loading purchases:', error);
      this.showToast('Error loading your purchases', 'danger');
    } finally {
      loading.dismiss();
    }
  }

  getProductImage(productId: string): string {
    return 'assets/default-product.png'; // Replace with real logic if needed
  }

  onSearchModeChange() {
    this.searchTerm = '';
    this.searchResults = [];
  }

  async changeProduct() {
    const cartItems = await this.fireService.getCartOnce();
    if (cartItems.length > 1) {
      this.router.navigate(['/cart']);
    } else {
      this.selectedProduct = null;
    }
  }

  async searchProducts() {
    if (this.searchTerm.length < 2) {
      this.searchResults = [];
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Searching products...',
    });
    await loading.present();

    try {
      const term = this.searchTerm.toLowerCase();
      const snapshot = await this.firestore
        .collection('products')
        .get()
        .toPromise();

      this.searchResults = snapshot.docs
        .map((doc) => ({ id: doc.id, ...(doc.data() as any) }))
        .filter(
          (product: any) =>
            product.title?.toLowerCase().includes(term) ||
            product.prodID?.toLowerCase().includes(term)
        );
    } catch (error) {
      console.error('Search error:', error);
      this.showToast('Error searching products', 'danger');
    } finally {
      loading.dismiss();
    }
  }

  selectProduct(product: any) {
    this.selectedProduct = product;
    this.initializeReview();
  }

  setRating(rating: number) {
    this.rating = rating;
    this.review.rating = rating;
  }

  async submitReview() {
    if (!this.rating || !this.review.content) {
      this.showToast(
        'Please complete all required fields and rating',
        'warning'
      );
      return;
    }

    if (!this.selectedProduct) {
      this.showToast('Please select a product to review', 'warning');
      return;
    }

    const loading = await this.loadingCtrl.create({
      message: 'Submitting your review...',
    });
    await loading.present();

    try {
      const user = await this.fireService.getCurrentUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      // Final review data with all fields
      const reviewData = {
        ...this.review,
        rating: this.rating,
        date: new Date().toISOString(),
        status: 'pending',
      };

      await this.fireService.submitReview(reviewData);

      this.showToast('Thank you for your review!', 'success');
      this.resetForm();
    } catch (error) {
      console.error('Review submission error:', error);
      let errorMessage = 'Error submitting review';
      if (error.code === 'permission-denied') {
        errorMessage = 'Permission denied. Please sign in.';
      }
      this.showToast(errorMessage, 'danger');
    } finally {
      loading.dismiss();
    }
  }

  resetForm() {
    this.selectedProduct = null;
    this.rating = 0;
    this.review = {
      title: '',
      content: '',
      date: new Date().toISOString(),
      userId: '',
      userEmail: '',
      userName: '',
      productId: '',
      productName: '',
      rating: 0,
      status: 'pending',
    };
  }

  goBack() {
    this.navCtrl.back();
  }

  async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
      position: 'bottom',
    });
    await toast.present();
  }
}
