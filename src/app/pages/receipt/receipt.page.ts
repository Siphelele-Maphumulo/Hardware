import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
})
export class ReceiptPage {
  receipt: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { receipt: any };

    if (state && state.receipt) {
      this.receipt = state.receipt;
    } else {
      console.error('No receipt found in navigation extras');
      this.router.navigate(['/cart']); // Redirect if no receipt
    }
  }

  printReceipt() {
    window.print();
  }
}
