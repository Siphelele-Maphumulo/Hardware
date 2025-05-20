import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';
import { User } from 'src/app/model/user.model';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ApiService } from 'src/app/api.service';
import { AuthenticationServiceService } from 'src/app/authentication-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  @ViewChild('loginForm') loginForm: any;
  user: User = {
    name: '',
    surname: '',
    username: '',
    email: '',
    contact: '',
    password: '',
    cPass: '',
    uid: '',
    displayName: '',
    photoURL: '',
    emailVerified: false,
  };

  type: boolean = true;

  constructor(
    private route: Router,
    private activated: ActivatedRoute,
    private toast: ToastController,
    public afAuth: AngularFireAuth,
    public authService: AuthenticationServiceService,
    private firestore: AngularFirestore,
    public _apiservice: ApiService,
    private load: LoadingController,
    public fireService: FireserviceService
  ) {}

  ngOnInit() {}

  async navigateDetails() {
    if (await this.CheckFields()) {
      await this.signup();
    }
  }

  async CheckFields() {
    if (
      !this.user.name ||
      !this.user.surname ||
      !this.user.username ||
      !this.user.contact ||
      !this.user.email ||
      !this.user.password ||
      !this.user.cPass
    ) {
      this.warningToaster('Please fill in all fields');
      return false;
    } else if (this.user.password !== this.user.cPass) {
      this.warningToaster('Passwords do not match');
      return false;
    }
    return true;
  }

  changeType() {
    this.type = !this.type;
  }

  goToLogin() {
    this.route.navigate(['login']);
  }

  async addCustomer(uid: string) {
    const data = {
      name: this.user.name,
      surname: this.user.surname,
      username: this.user.username,
      email: this.user.email,
      contact: this.user.contact,
      uid: uid,
    };

    // try {
    //   await this._apiservice.addCustomer(data).toPromise();
    //   this.showToaster('Customer added successfully!');
    //   return true;
    // } catch (error) {
    //   console.error('Error adding customer:', error);
    //   this.warningToaster('Error saving customer details');
    //   return false;
    // }
  }

  async signup() {
    const loading = await this.load.create({
      message: 'Creating account...',
    });
    await loading.present();

    try {
      // Create Firebase auth user
      const res = await this.fireService.signup({
        email: this.user.email,
        password: this.user.password,
      });

      if (res.user?.uid) {
        // Send verification email
        await this.authService.SendVerificationMail();

        // Save user details to Firestore
        const userData = {
          email: this.user.email,
          name: this.user.name,
          surname: this.user.surname,
          username: this.user.username,
          contact: this.user.contact,
          uid: res.user.uid,
        };

        // Save to both services
        await Promise.all([
          this.fireService.saveDetails(userData),
          this.addCustomer(res.user.uid),
        ]);

        this.showToaster('Account created successfully!');
        this.complete();
      }
    } catch (err) {
      console.error('Signup error:', err);
      this.warningToaster(err.message || 'Signup failed');
    } finally {
      await loading.dismiss();
    }
  }

  complete() {
    const params: NavigationExtras = {
      queryParams: { userVal: this.user.username },
    };
    this.route.navigate(['login'], params);
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
}

/* reg(){
      this.email = ((document.getElementById("email") as HTMLInputElement).value);
      this.password = ((document.getElementById("password") as HTMLInputElement).value);

      const auth = getAuth();

      createUserWithEmailAndPassword(auth, this.email, this.password).then(userCredentials => {
        if (userCredentials.user){
          window.alert("User created successfully");
          this.route.navigate(['/login']);
        }
      }).catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        window.alert(errorMessage);
        console.log(err);

      })
    }*/

/*
async setValue(user: User){
  if(this.CheckFields()){
  let load = this.load.create({
    message: 'Creating Account...'
  });
  (await load).present();
      try{
  this.fireAuth.createUserWithEmailAndPassword(user.email, user.password).
  then(data => console.log(data));

  await (await (await this.fireAuth.currentUser).sendEmailVerification());

  this.showToaster('Account Created!');
      }catch(e){

        console.log(e);
      }
      (await load).dismiss();
  }
}*/
