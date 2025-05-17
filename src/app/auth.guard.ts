import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthenticationServiceService,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    // Check if user is logged in and email is verified
    if (user && user.emailVerified) {
      return true;
    }

    // If not logged in, redirect to login
    return this.router.parseUrl('/login');
  }
}
