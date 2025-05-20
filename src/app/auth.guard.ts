import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationServiceService } from './authentication-service.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationServiceService,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // Check if user exists in localStorage
    const userString = localStorage.getItem('user');
    if (!userString) {
      return this.redirectToLogin();
    }

    try {
      const user = JSON.parse(userString);

      // Check if user object is valid
      if (!user || !user.uid) {
        return this.redirectToLogin();
      }

      // Verify with Firebase Auth for extra security
      return this.afAuth.authState.pipe(
        map((firebaseUser) => {
          if (!firebaseUser) {
            return this.redirectToLogin();
          }

          // Check email verification status
          if (!firebaseUser.emailVerified) {
            return this.redirectToVerifyEmail();
          }

          return true;
        }),
        catchError(() => {
          return of(this.redirectToLogin());
        })
      );
    } catch (error) {
      console.error('Error parsing user data:', error);
      return this.redirectToLogin();
    }
  }

  private redirectToLogin(): UrlTree {
    // Clear invalid user data
    localStorage.removeItem('user');
    return this.router.parseUrl('/login');
  }

  private redirectToVerifyEmail(): UrlTree {
    return this.router.parseUrl('/verify-email');
  }
}
