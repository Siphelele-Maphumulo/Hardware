import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {
  ToastController,
  LoadingController,
  NavController,
} from '@ionic/angular';
import { profile } from 'console';
import { User } from 'firebase/auth';
import { ApiService } from '../api.service';
import { AuthenticationServiceService } from '../authentication-service.service';
import { FireserviceService } from '../fireservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  value: string;
  data: any;
  name: any;
  surname: any;
  username: any;
  email: any;
  contact: any;
  password: any;
  customers: any = {}; // This should be an object, not an array

  count;

  user = {} as User;

  data1: string[];
  userDis: string;
  userPass: string;

  type: boolean = true;
  me: string;

  customer: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activate: ActivatedRoute,
    public _apiservice: ApiService,
    private toast: ToastController,
    public authService: AuthenticationServiceService,
    private load: LoadingController,
    public ngFireAuth: AngularFireAuth,
    private navCtrl: NavController,
    public fireService: FireserviceService,
    private afAuth: AngularFireAuth
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    });
    this.getProfile();
  }

  ngOnInit() {
    this.count = 1;
  }
  navigateWelcome() {
    this.router.navigate(['order']);
  }

  navigateQoute() {
    this.router.navigate(['cart']);
  }

  navigateOut() {
    this.Logout();
  }

  openDetailsWithState() {
    const name = (document.getElementById('username') as HTMLInputElement)
      .value;
    const password = (document.getElementById('password') as HTMLInputElement)
      .value;
    this.data = [this.me];

    const navigationExtras: NavigationExtras = {
      state: {
        user: this.data,
      },
    };
    this.router.navigate(['home'], navigationExtras);
  }

  showToaster(message: string) {
    this.toast
      .create({
        message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }

  getProfile() {
    this.afAuth.authState.subscribe((user) => {
      if (user && user.uid) {
        this.fireService.getDetails({ uid: user.uid }).subscribe(
          (res: any) => {
            this.customers = res;
            console.log('from Firestore ===', res);
          },
          (error: any) => {
            alert('ERROR');
            console.log('ERROR ===', error);
          }
        );
      } else {
        console.log('User not logged in');
      }
    });
  }

  warningToaster(message: string) {
    this.toast
      .create({
        message,
        color: 'danger',
        duration: 4000,
      })
      .then((toastData) => toastData.present());
  }

  Logout() {
    this.authService.Logout();
  }
}
