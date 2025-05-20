import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {
  AlertController,
  LoadingController,
  ToastController,
} from '@ionic/angular';
import { User } from 'src/app/model/user.model';
import { FireserviceService } from 'src/app/fireservice.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = {
    email: '',
    password: '',
  };

  public email: any;
  public password: any;
  user = {} as User;

  data: string[];
  userDis: string;
  userPass: string;

  type: boolean = true;
  me: string;

  constructor(
    private route: Router,
    public fireService: FireserviceService,
    private toast: ToastController,
    private load: LoadingController,
    public afAuth: AngularFireAuth,
    public ngFireAuth: AngularFireAuth,
    public alertController: AlertController,
    public authService: AuthenticationServiceService
  ) {}

  ngOnInit() {}

  recover() {
    this.route.navigate(['/forgot']);
  }

  navigateWelcome() {
    this.validate();
  }

  changeType() {
    this.type = !this.type;
  }

  gotoHome() {}
  gmailLogin() {}

  twitterLogin() {}

  faceBookLogin() {}

  register() {
    this.route.navigate(['signup']);
  }

  validate() {
    if (this.user.username == null) {
      this.warningToaster('Please insert Email');
      this.userDis = 'Please insert Username!';
      return false;
    } else if (this.user.password == null) {
      this.warningToaster('Please insert Password');
      this.userDis = '';
      this.userPass = 'Please insert Password!';
      return false;
    } else {
      let loader = this.load.create({
        message: 'Almost',
      });
      this.logging();
    }
  }

  async showToaster(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 3000,
      cssClass: 'custom-toast',
      position: 'middle', // 'middle' centers the toast vertically
      color: 'success',
    });
    await toast.present();
  }

  async warningToaster(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 3000,
      cssClass: 'custom-toast warning',
      position: 'middle',
      color: 'danger',
    });
    await toast.present();
  }

  logging() {
    this.fireService
      .loginWithEmail({
        email: this.user.username,
        password: this.user.password,
      })
      .then(
        (res) => {
          if (res.user) {
            // Reload to get the latest emailVerified status
            res.user.reload().then(() => {
              if (res.user.emailVerified) {
                if (res.user?.uid) {
                  this.fireService.getDetails({ uid: res.user.uid }).subscribe(
                    (userDetails) => {
                      this.openDetailsWithState();
                      this.userPass = '';
                      this.userDis = '';
                      this.showToaster('Welcome ' + userDetails['name']);
                    },
                    (error) => {
                      this.warningToaster(
                        'Failed to fetch user details. Please try again.'
                      );
                      console.error(error);
                    }
                  );
                }
              } else {
                this.warningToaster(
                  'Please verify your email before logging in.'
                );
              }
            });
          }
        },
        (err) => {
          // Map Firebase auth errors to friendly messages
          let friendlyMsg = 'Login failed. Please try again.';

          if (err.code === 'auth/user-not-found') {
            friendlyMsg = 'No account found with this email.';
          } else if (err.code === 'auth/wrong-password') {
            friendlyMsg = 'Incorrect password. Please try again.';
          } else if (err.code === 'auth/invalid-email') {
            friendlyMsg = 'Invalid email format.';
          } else if (err.code === 'auth/user-disabled') {
            friendlyMsg = 'This user account has been disabled.';
          }

          this.warningToaster(friendlyMsg);
          console.error(err);
        }
      );
  }

  btnClicked() {
    this.data = [];
    this.data[0] = (
      document.getElementById('username') as HTMLInputElement
    ).value;
    this.data[1] = (
      document.getElementById('password') as HTMLInputElement
    ).value;
    this.route.navigate(['home/' + this.data]);
    this.showToaster(this.data[0] + ' logged in successfully!');
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
    this.route.navigate(['home'], navigationExtras);
  }

  async openLoader() {
    const loading = await this.load.create({
      message: 'Please Wait ...',
      duration: 2000,
    });
    await loading.present();
  }
  async closeLoading() {
    return await this.load.dismiss();
  }

  async presentToast(message, position, duration) {
    const toast = await this.toast.create({
      message,
      duration,
      position,
    });
    toast.present();
  }
}
