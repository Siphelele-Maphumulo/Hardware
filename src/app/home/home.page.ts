import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {
  ToastController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { User } from 'firebase/auth';
import { ApiService } from '../api.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { FireserviceService } from '../fireservice.service';
import { ModalController } from '@ionic/angular';
import { ManagementSidebarComponent } from 'src/app/components/management-sidebar/management-sidebar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // User data properties
  user = {} as User;
  customers: any = {};
  email: string | null = null;
  me: string = '';

  // UI state properties
  isManagementOpen = false; // Controls sidebar visibility
  type: boolean = true;
  count: number = 1;

  // Form fields
  value: string = '';
  name: string = '';
  surname: string = '';
  username: string = '';
  contact: string = '';
  password: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiservice: ApiService,
    private toast: ToastController,
    public authService: AuthenticationServiceService,
    private load: LoadingController,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    public fireService: FireserviceService,
    private afAuth: AngularFireAuth
  ) {
    this.initializeUserData();
  }

  ngOnInit() {
    this.getProfile();
  }

  private initializeUserData() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.customers = navigation.extras.state['user'];
      console.log('User details received:', this.customers);
    }
  }

  // Navigation methods
  navigateWelcome() {
    this.router.navigate(['order']);
  }

  navigateQuote() {
    this.router.navigate(['cart']);
  }

  navigateOut() {
    this.Logout();
  }

  // Sidebar control methods
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

  // User profile methods
  getProfile() {
    this.afAuth.authState.subscribe((user) => {
      if (user?.uid) {
        this.email = user.email;
        this.fireService.getDetails({ uid: user.uid }).subscribe(
          (res: any) => {
            this.customers = res;
            console.log('User details from Firestore:', res);
          },
          (error: any) => {
            console.error('Error fetching user details:', error);
            this.showErrorToast('Failed to load profile');
          }
        );
      } else {
        console.log('User not logged in');
      }
    });
  }

  // Admin check
  isAdmin(): boolean {
    const adminEmails = ['Admin@gmail.com', 'siphelelemaphumulo@gmail.com'];
    return this.email ? adminEmails.includes(this.email.toLowerCase()) : false;
  }

  // Navigation to admin sections
  navigateToAdminSection(section: string) {
    this.router.navigate([`/management/${section}`]);
    this.closeSidebar();
  }

  // Authentication methods
  async Logout() {
    try {
      await this.authService.Logout();
      this.navCtrl.navigateRoot('/login');
    } catch (error) {
      console.error('Logout error:', error);
      this.showErrorToast('Logout failed');
    }
  }

  // Toast helpers
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

  // Legacy methods (consider removing if unused)
  openDetailsWithState() {
    const navigationExtras: NavigationExtras = {
      state: {
        user: [this.me],
      },
    };
    this.router.navigate(['home'], navigationExtras);
  }

  navigateToProducts() {
    this.closeSidebar();
    this.router.navigate(['/products']); // Correct route
  }
}
