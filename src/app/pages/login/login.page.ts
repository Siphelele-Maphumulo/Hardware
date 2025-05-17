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

  warningToaster(message: string) {
    this.toast
      .create({
        message,
        color: 'danger',
        duration: 4000,
      })
      .then((toastData) => toastData.present());
  }

  showToaster(message: string) {
    this.toast
      .create({
        message,
        color: 'success',
        duration: 4000,
      })
      .then((toastData) => toastData.present());
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
            // Check if the user is email verified after the login attempt
            res.user.reload().then(() => {
              if (res.user.emailVerified) {
                console.log(res);
                // Proceed only if the user has a valid UID and email is verified
                if (res.user?.uid) {
                  // Fetch user details from Firestore
                  this.fireService.getDetails({ uid: res.user.uid }).subscribe(
                    (userDetails) => {
                      console.log(userDetails);

                      // Proceed with the user details, and open the appropriate page
                      this.openDetailsWithState();

                      // Clear sensitive data for security purposes
                      this.userPass = '';
                      this.userDis = '';

                      // Show a welcome message once the details are successfully retrieved
                      this.showToaster('Welcome ' + userDetails['name']);
                    },
                    (error) => {
                      // Handle Firestore errors
                      this.warningToaster('Error fetching user details');
                      console.error(error);
                    }
                  );
                }
              } else {
                // If the email is not verified, show an alert
                window.alert('Email is not verified');
              }
            });
          }
        },
        (err) => {
          // Handle authentication errors
          this.warningToaster(err.message);
          console.log(err);
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
