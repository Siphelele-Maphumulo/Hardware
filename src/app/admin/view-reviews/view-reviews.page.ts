import { Component, OnInit } from '@angular/core';
import { FireserviceService } from '../../fireservice.service';
import {
  AlertController,
  ToastController,
  ModalController,
  ActionSheetController,
  LoadingController,
} from '@ionic/angular';
import { ReplyModalComponent } from '../../components/reply-modal/reply-modal.component';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.page.html',
  styleUrls: ['./view-reviews.page.scss'],
})
export class ViewReviewsPage implements OnInit {
  reviews: any[] = [];
  filteredReviews: any[] = [];
  loading = true;
  showFilters = false;
  searchTerm = '';
  activeFilter = 'all';
  selectedRating: number | null = null;
  selectedStatus: string | null = null;
  isFiltered = false;

  // Enhanced user tracking
  currentUser: any = null;
  userEmail: string = '';
  userId: string = '';
  userName: string = '';
  isAdmin: boolean = false;
  loginTime: Date | null = null;

  constructor(
    private fireService: FireserviceService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.initializeUserAndLoadReviews();
  }

  async initializeUserAndLoadReviews() {
    this.loading = true;
    try {
      const user = await this.fireService.getCurrentUser();
      if (user) {
        this.currentUser = user; // Store the full user object
        this.userEmail = user.email;
        this.userId = user.uid;
        this.loginTime = new Date(); // Record login time

        // You might want to get the user's name from your user collection
        const userData = await this.fireService.getUserData(user.uid);
        this.userName = userData?.name || 'Unknown User';

        this.isAdmin = this.checkIfAdmin(user.email);

        console.log('✅ User Login Details:', {
          name: this.userName,
          email: this.userEmail,
          uid: this.userId,
          isAdmin: this.isAdmin,
          loginTime: this.loginTime.toISOString(),
        });

        this.showToast(`Welcome ${this.userName} (${this.userEmail})`);
      } else {
        console.warn('⚠️ No user is currently logged in.');
        this.showToast('Please log in to view reviews', 'warning');
        // You might want to redirect to login page here
      }

      this.loadReviews();
    } catch (error) {
      console.error('❌ Error fetching current user:', error);
      this.showToast('Failed to load user data', 'danger');
      this.loading = false;
    }
  }

  private checkIfAdmin(email: string): boolean {
    const adminEmails = [
      'admin@gmail.com',
      'siphelelemaphumulo@gmail.com',
      // Add other admin emails here
    ];
    return adminEmails.includes(email.toLowerCase());
  }

  loadReviews() {
    this.loading = true;
    this.fireService.getAllReviewsWithMessages().subscribe({
      next: (reviewsWithMessages) => {
        if (this.isAdmin) {
          // Admin sees all reviews
          this.reviews = reviewsWithMessages;
          console.log(`Admin ${this.userEmail} viewing ALL reviews`);
        } else {
          // Regular users only see their own reviews
          this.reviews = reviewsWithMessages.filter(
            (review) => review.userId === this.userId
          );
          console.log(`User ${this.userEmail} viewing their own reviews`);
        }

        this.filteredReviews = [...this.reviews];
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading reviews:', err);
        this.loading = false;
        this.showToast('Error loading reviews', 'danger');
      },
    });
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
    if (!this.showFilters) this.resetFilters();
  }

  async selectRating() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Rating',
      buttons: [
        ...[1, 2, 3, 4, 5].map((star) => ({
          text: `${star} Star${star > 1 ? 's' : ''}`,
          handler: () => {
            this.selectedRating = star;
            this.applyFilters();
          },
        })),
        {
          text: 'Clear',
          handler: () => {
            this.selectedRating = null;
            this.applyFilters();
          },
        },
        { text: 'Cancel', role: 'cancel' },
      ],
    });
    await actionSheet.present();
  }

  async selectStatus() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Status',
      buttons: [
        ...['approved', 'pending', 'rejected'].map((status) => ({
          text: status.charAt(0).toUpperCase() + status.slice(1),
          handler: () => {
            this.selectedStatus = status;
            this.applyFilters();
          },
        })),
        {
          text: 'Clear',
          handler: () => {
            this.selectedStatus = null;
            this.applyFilters();
          },
        },
        { text: 'Cancel', role: 'cancel' },
      ],
    });
    await actionSheet.present();
  }

  applyFilters() {
    const term = this.searchTerm.toLowerCase();

    this.filteredReviews = this.reviews.filter((review) => {
      if (
        this.searchTerm &&
        !(
          review.userName?.toLowerCase().includes(term) ||
          review.userEmail?.toLowerCase().includes(term) ||
          review.productName?.toLowerCase().includes(term) ||
          review.productId?.toLowerCase().includes(term) ||
          review.content?.toLowerCase().includes(term)
        )
      )
        return false;

      if (
        this.activeFilter === 'username' &&
        !review.userName.toLowerCase().includes(term)
      )
        return false;
      if (
        this.activeFilter === 'email' &&
        !review.userEmail.toLowerCase().includes(term)
      )
        return false;
      if (
        this.activeFilter === 'product' &&
        !(
          review.productName.toLowerCase().includes(term) ||
          review.productId.toLowerCase().includes(term)
        )
      )
        return false;
      if (
        this.activeFilter === 'rating' &&
        this.selectedRating !== null &&
        review.rating !== this.selectedRating
      )
        return false;
      if (
        this.activeFilter === 'status' &&
        this.selectedStatus &&
        review.status !== this.selectedStatus
      )
        return false;

      return true;
    });

    this.isFiltered = !!(
      this.searchTerm ||
      this.selectedRating !== null ||
      this.selectedStatus ||
      this.activeFilter !== 'all'
    );
  }

  resetFilters() {
    this.searchTerm = '';
    this.activeFilter = 'all';
    this.selectedRating = null;
    this.selectedStatus = null;
    this.filteredReviews = [...this.reviews];
    this.isFiltered = false;
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'approved':
        return 'success';
      case 'pending':
        return 'warning';
      case 'rejected':
        return 'danger';
      default:
        return 'medium';
    }
  }

  async openReplyModal(review: any) {
    const modal = await this.modalCtrl.create({
      component: ReplyModalComponent,
      componentProps: { review },
    });

    modal.onDidDismiss().then(async (result) => {
      if (result.data?.message) {
        const success = await this.fireService.sendMessageToUser(
          review.userId,
          result.data.message,
          review.id
        );
        if (success) {
          this.showToast('Message sent to user', 'success');
          this.loadReviews();
        } else {
          this.showToast('Error sending message', 'danger');
        }
      }
    });

    await modal.present();
  }

  loadMessagesFromReplyies(reviewId: string) {
    const reviewIndex = this.reviews.findIndex((r) => r.id === reviewId);
    if (reviewIndex > -1) this.reviews[reviewIndex].loadingMessages = true;

    this.fireService.getMessagesFromReplyies(reviewId).subscribe({
      next: (messages) => {
        const sorted = (messages || []).sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );

        if (reviewIndex > -1) {
          this.reviews[reviewIndex].messages = sorted;
          this.reviews[reviewIndex].loadingMessages = false;
        }

        const filteredIndex = this.filteredReviews.findIndex(
          (r) => r.id === reviewId
        );
        if (filteredIndex > -1) {
          this.filteredReviews[filteredIndex].messages = sorted;
          this.filteredReviews[filteredIndex].loadingMessages = false;
        }
      },
      error: (error) => {
        console.error('❌ Error loading messages:', error);
        if (reviewIndex > -1) this.reviews[reviewIndex].loadingMessages = false;
      },
    });
  }

  async deleteReview(reviewId: string) {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this review?',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        {
          text: 'Delete',
          handler: async () => {
            const loader = await this.loadingCtrl.create({
              message: 'Deleting review...',
            });
            await loader.present();

            try {
              await this.fireService.deleteReview(reviewId);
              this.showToast('Review deleted successfully', 'success');
              this.loadReviews();
            } catch (error) {
              console.error('Error deleting review:', error);
              this.showToast('Error deleting review', 'danger');
            } finally {
              loader.dismiss();
            }
          },
        },
      ],
    });
    await alert.present();
  }

  async approveReview(reviewId: string) {
    const loader = await this.loadingCtrl.create({
      message: 'Approving review...',
    });
    await loader.present();

    try {
      await this.fireService.updateReviewStatus(reviewId, 'approved');
      this.showToast('Review approved', 'success');
      this.loadReviews();
    } catch (error) {
      console.error('Error approving review:', error);
      this.showToast('Error approving review', 'danger');
    } finally {
      loader.dismiss();
    }
  }

  async rejectReview(reviewId: string) {
    const loader = await this.loadingCtrl.create({
      message: 'Rejecting review...',
    });
    await loader.present();

    try {
      await this.fireService.updateReviewStatus(reviewId, 'rejected');
      this.showToast('Review rejected', 'success');
      this.loadReviews();
    } catch (error) {
      console.error('Error rejecting review:', error);
      this.showToast('Error rejecting review', 'danger');
    } finally {
      loader.dismiss();
    }
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

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }
}
