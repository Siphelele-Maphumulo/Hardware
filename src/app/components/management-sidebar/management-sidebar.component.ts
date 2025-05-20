import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  LoadingController,
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ApiService } from 'src/app/api.service';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';
import { FireserviceService } from 'src/app/fireservice.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-management-sidebar',
  templateUrl: './management-sidebar.component.html',
  styleUrls: ['./management-sidebar.component.scss'],
})
export class ManagementSidebarComponent implements OnInit {
  currentDate: Date = new Date();
  isManagementOpen: boolean;
  countSubscriptions: Subscription[] = [];
  // Badge counts
  userCount: number = 0;
  lowStockCount: number = 0;
  orderCount: number = 0;
  newReviewsCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    public _apiservice: ApiService,
    private toast: ToastController,
    public authService: AuthenticationServiceService,
    private load: LoadingController,
    private navCtrl: NavController,
    public fireService: FireserviceService,
    private afAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private router: Router,
    private firestore: AngularFirestore
  ) {
    // Update date every minute to keep it current
    setInterval(() => {
      this.currentDate = new Date();
    }, 60000);
  }

  ngOnInit() {
    this.loadCounts();
  }

  ngOnDestroy() {
    this.countSubscriptions.forEach((sub) => sub.unsubscribe());
  }

  async loadCounts() {
    await this.getUserCount();

    // Set up real-time listeners
    this.countSubscriptions.push(
      this.fireService.getLowStockCount(5).subscribe((count) => {
        this.lowStockCount = count;
      }),

      this.fireService.getOrderCount().subscribe((count) => {
        this.orderCount = count;
      }),

      this.fireService.getNewReviewsCount().subscribe((count) => {
        this.newReviewsCount = count;
      })
    );
  }

  async getUserCount() {
    try {
      const users = await this.firestore.collection('users').get().toPromise();
      this.userCount = users?.size || 0;
    } catch (error) {
      console.error('Error getting user count:', error);
      this.userCount = 0;
    }
  }

  async getLowStockCount() {
    try {
      const products = await this.firestore
        .collection('products')
        .get()
        .toPromise();
      if (!products) {
        this.lowStockCount = 0;
        return;
      }

      // Calculate average stock
      let totalStock = 0;
      products.forEach((p) => {
        const data = p.data() as any;
        totalStock += data.qty || 0;
      });
      const averageStock = totalStock / products.size;

      // Count low stock items (below 30% of average)
      let lowStockItems = 0;
      products.forEach((p) => {
        const data = p.data() as any;
        if (data.qty < averageStock * 0.3) {
          lowStockItems++;
        }
      });

      this.lowStockCount = lowStockItems;
    } catch (error) {
      console.error('Error getting low stock count:', error);
      this.lowStockCount = 0;
    }
  }

  async getOrderCount() {
    try {
      // Get orders from last 7 days
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      const orders = await this.firestore
        .collection('receipts', (ref) =>
          ref.where('timestamp', '>=', sevenDaysAgo)
        )
        .get()
        .toPromise();

      this.orderCount = orders?.size || 0;
    } catch (error) {
      console.error('Error getting order count:', error);
      this.orderCount = 0;
    }
  }

  async getNewReviewsCount() {
    try {
      // Get reviews from last 3 days marked as new
      const threeDaysAgo = new Date();
      threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

      const reviews = await this.firestore
        .collection('reviews', (ref) =>
          ref.where('date', '>=', threeDaysAgo).where('status', '==', 'new')
        )
        .get()
        .toPromise();

      this.newReviewsCount = reviews?.size || 0;
    } catch (error) {
      console.error('Error getting new reviews count:', error);
      this.newReviewsCount = 0;
    }
  }

  navigateTo(path: string): void {
    this.modalCtrl.dismiss().then(() => {
      if (path && typeof path === 'string') {
        const formattedPath = path.startsWith('/') ? path : `/${path}`;
        this.router.navigate([formattedPath]).catch((err) => {
          console.error('Navigation error:', err);
        });
      }
    });
  }

  close(): void {
    this.modalCtrl.dismiss();
  }

  async toggleManagement() {
    const modal = await this.modalCtrl.create({
      component: ManagementSidebarComponent,
      breakpoints: [0, 0.5, 0.9],
      initialBreakpoint: 0.5,
      showBackdrop: true,
    });
    await modal.present();
  }

  closeSidebar() {
    this.isManagementOpen = false;
  }

  navigateToAdminSection(section: string) {
    this.router.navigate([`/management/${section}`]);
    this.closeSidebar();
  }

  async Logout() {
    try {
      await this.authService.Logout();
      this.navCtrl.navigateRoot('/login');
    } catch (error) {
      console.error('Logout error:', error);
      this.showErrorToast('Logout failed');
    }
  }

  private async showToast(
    message: string,
    color?: string,
    duration: number = 3000
  ) {
    const toast = await this.toast.create({
      message,
      duration,
      color: color || 'primary',
      position: 'bottom',
    });
    await toast.present();
  }

  private showErrorToast(message: string) {
    this.showToast(message, 'danger', 4000);
  }

  private showWarningToast(message: string) {
    this.showToast(message, 'warning', 4000);
  }

  navigateAndClose(path: string) {
    this.modalCtrl.dismiss().then(() => {
      this.router.navigate([path]);
    });
  }

  navigateToProducts() {
    this.closeSidebar();
    this.router.navigate(['/products']);
  }
}
