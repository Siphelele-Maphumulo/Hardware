import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FireserviceService } from 'src/app/fireservice.service';
import { User } from 'src/app/model/user.model';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
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



  @ViewChild('inputUser', {static: false}) User: { setFocus: () => void };
  @ViewChild('inputId', {static: false}) Surname: { setFocus: () => void };
  user={}as User;
  name: any;
  surname: any;
  username: any;
  email: any;
  contact: any;
  password: any;

  customers: any[];
  customer: any;



    type: boolean = true;


    constructor(private route: Router, private activated: ActivatedRoute,
      private toast: ToastController, public afAuth: AngularFireAuth,public authService: AuthenticationServiceService,
      private firestore: AngularFirestore, public _apiservice: ApiService,
      private load: LoadingController, public fireService: FireserviceService) {
    }

    addCustomer(){
      let data = {
        name: this.user.name,
        username: this.user.username,
        surname: this.user.surname,
        email: this.user.email,
        contact: this.user.contact,
      }

      this._apiservice.addCustomer(data).subscribe((res:any) => {
        console.log("Customer Added ===",res);
        this.showToaster('Customer added to Created!');
      },(error: any) => {
        alert('ERROR');
        console.log("ERROR ===",error);
      })
    }

    ngOnInit() {
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


     navigateDetails() {
     this.CheckFields();

    }

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


   CheckFields() {
      if(this.user.username == null || this.user.surname == null || this.user.contact==null || this.user.email == null || this.user.password == null|| this.user.cPass == null){
      this.warningToaster('Please fill in missing field');
      return false;
    }
    else if(this.user.password !== this.user.cPass) {
      this.warningToaster('Passwords do not match');
      return false;
    }else{
      this.signup();
      this.addCustomer();
      return true;
    }

  }

    changeType(){
      this.type = !this.type;
    }

    gotoHome(){

    }
    gmailLogin(){

    }

    twitterLogin(){

    }

    faceBookLogin(){

    }

    goToLogin(){
      this.route.navigate(['login']);
    }

    ClearFields() {
      this.user.username = '';
      this.user.surname ='';
      this.user.contact ='';
      this.user.email='';
      this.user.password ='';
      this.user.cPass ='';
      this.setFocusOnInput() ;
    }

    warningToaster(message: string){
      this.toast.create({
        message,
        color:'danger',
        duration: 3000,
      }).then(toastData => toastData.present());

    }

    showToaster(message: string){
      this.toast.create({
        message,
        color:'success',
        duration: 3000,
      }).then(toastData => toastData.present());

    }

    setFocusOnInput() {
     this.User.setFocus();
   }

   async signup(){
  this.fireService.signup({email:this.user.email,password:this.user.password}).then(async res=>{
      if(res.user.uid){
        await this.authService.SendVerificationMail()
        let data = {
          email:this.user.email,
          password:this.user.password,
          name:this.user.username,
          uid:res.user.uid
        };
        this.fireService.saveDetails(data).then(res=>{
          this.showToaster('Account Created!');
          this.complete();
        },err=>{
          console.log(err);
        });
      }
    },err=>{
      this.warningToaster(err.message);

      console.log(err);
    });
  }

  complete(){

    this.showToaster('Signup completed successfully!');
    const params: NavigationExtras = {queryParams:{ userVal: this.user.username}, };
    this.route.navigate(['login'], params);

  }

  }
