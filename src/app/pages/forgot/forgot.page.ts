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

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  email: any;

  user = {} as User;

  data: string[];
  userDis: string;
  userPass: string;

  type: boolean = true;

  constructor(
    private route: Router,
    public fireService: FireserviceService,
    private toast: ToastController,
    private load: LoadingController,
    private fireAuth: AngularFireAuth,
    public auth: AngularFireAuth,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  recovery() {
    this.email = (document.getElementById('email') as HTMLInputElement).value;
    this.fireService
      .signup({ email: this.user.email, password: this.user.password })
      .then(
        (res) => {
          if (res.user.uid) {
            this.auth.sendPasswordResetEmail(this.email);
            this.showToaster('Please check your email to reset your password!');
            this.route.navigate(['/login']);
          }
        },
        (err) => {
          this.warningToaster(err.message);

          console.log(err);
        }
      );
  }

  register() {
    this.route.navigate(['login']);
  }

  /* async resetPassword(){
  this.email = ((document.getElementById("email") as HTMLInputElement).value);
if(this.email){
  const loading = await this.load.create({
    message: 'Sending reset password link',
    spinner : 'crescent',
    showBackdrop: true,
  });
  loading.present();


  this.auth.sendPasswordResetEmail(this.email).then(() => {
    loading.dismiss();
    this.showToaster("Please check your email for reset password link");
    this.route.navigate(['/login']);
  }).catch(async (error) => {
    loading.dismiss();
    this.warningToaster(error.message);
  });
}else{
  this.warningToaster("Please enter email");
}
}





 reset(){
    this.email = ((document.getElementById("email") as HTMLInputElement).value);
    console.log(this.email);
    this.auth.sendPasswordResetEmail(this.email).then(userCredentials => {
      console.log(userCredentials);
        this.showToaster("Password reset email sent to your email: " + this.email);
        this.route.navigate(['/login']);
    }).catch(err => {
      const errorCode = err.code;
      const errorMessage = err.message;
      this.warningToaster(errorMessage);
      console.log(err);

    })
  }*/

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
}
