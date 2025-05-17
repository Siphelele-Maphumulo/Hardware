import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from 'firebase/auth';
import { NavController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  userData: any;
  user = {} as User;

  constructor(
    private afStore: AngularFirestore,
    private toast: ToastController,
    private ngFireAuth: AngularFireAuth,
    private navCtrl: NavController,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.ngFireAuth.authState.subscribe(async (user) => {
      if (user) {
        this.userData = user;
        const token = await user.getIdToken();
        localStorage.setItem('user', JSON.stringify(this.userData));
        localStorage.setItem('token', token);
        // ❌ No redirect here!
      } else {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        // ❌ No redirect here!
      }
    });
  }

  // Send email verification link to user
  async SendVerificationMail() {
    const currentUser = await this.ngFireAuth.currentUser;
    if (currentUser) {
      await currentUser.sendEmailVerification();
      this.router.navigate(['verify-email']);
    }
  }

  // Returns true if user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return !!user?.emailVerified;
  }

  // Set user data in Firestore
  SetUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
      `users/${user.uid}`
    );
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, { merge: true });
  }

  // Sign out the user
  async SignOut() {
    try {
      await this.ngFireAuth.signOut();
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      sessionStorage.clear();
      this.ngZone.run(() => {
        this.router.navigate(['/login']);
      });
      this.showToaster('You are logged out');
    } catch (error) {
      console.error('Sign out error:', error);
      this.showToaster('Error during logout');
    }
  }

  // Display a toast message
  showToaster(message: string) {
    this.toast
      .create({
        message,
        color: 'danger',
        duration: 4000,
      })
      .then((toastData) => toastData.present());
  }

  Logout(): void {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  // Returns true if user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return (
      user !== null &&
      user.emailVerified === true &&
      !!localStorage.getItem('token')
    );
  }
}
