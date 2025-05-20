import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-popover',
  template: `
    <ion-list class="glassy-list" style="font-weight:bold;">
      <ion-item (click)="navigateTo('home')" class="home-item">
        <ion-icon slot="start" name="home-outline"></ion-icon>
        <ion-label>Home</ion-label>
      </ion-item>
      <ion-item (click)="navigateTo('orders')" class="orders-item">
        <ion-icon slot="start" name="receipt-outline"></ion-icon>
        <ion-label>Orders</ion-label>
      </ion-item>
      <ion-item (click)="navigateTo('settings')" class="settings-item">
        <ion-icon slot="start" name="settings-outline"></ion-icon>
        <ion-label>Settings</ion-label>
      </ion-item>
      <ion-item (click)="logout()" class="logout-item" style="color: red;">
        <ion-icon slot="start" name="log-out-outline"></ion-icon>
        <ion-label>Logout</ion-label>
      </ion-item>
    </ion-list>
  `,
})
export class MenuPopoverComponent {
  constructor(private router: Router, private popoverCtrl: PopoverController) {}

  navigateTo(route: string) {
    this.popoverCtrl.dismiss();
    this.router.navigate([`/${route}`]);
  }

  logout() {
    this.popoverCtrl.dismiss();
    // Add your logout logic here
    this.router.navigate(['/login']);
  }
}
