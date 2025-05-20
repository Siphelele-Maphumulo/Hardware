import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  receipts: any[] = [];
  filteredReceipts: any[] = [];
  searchTerm: string = '';
  dateFilter: string = '';
  filterType: string = 'email';
  amountRange: any = { lower: 0, upper: 10000 };
  minAmount: number = 0;
  maxAmount: number = 10000;
  currentUserEmail: string = '';
  isAdmin: boolean = false;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCurrentUserEmail()
      .then((email) => {
        this.currentUserEmail = email;
        this.isAdmin = this.checkIfAdmin(email);
        this.loadReceipts();
      })
      .catch((err) => {
        console.error('Error fetching user email:', err);
      });
  }

  getCurrentUserEmail(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.auth.authState.pipe(map((user) => user?.email || '')).subscribe({
        next: (email) => resolve(email),
        error: (err) => reject(err),
      });
    });
  }

  checkIfAdmin(email: string): boolean {
    return (
      email === 'admin@gmail.com' || email === 'siphelelemaphumulo@gmail.com'
    );
  }

  loadReceipts() {
    this.firestore
      .collection('receipts')
      .valueChanges({ idField: 'id' })
      .subscribe((data: any[]) => {
        // Only show current user's receipts if not admin
        if (this.isAdmin) {
          this.receipts = data;
        } else {
          this.receipts = data.filter((r) => r.email === this.currentUserEmail);
        }

        this.calculateAmountRange();
        this.filteredReceipts = [...this.receipts];
        this.sortReceipts();
      });
  }

  calculateAmountRange() {
    if (this.receipts.length > 0) {
      const amounts = this.receipts.map((r) => r.totalAmount || 0);
      this.minAmount = Math.floor(Math.min(...amounts) / 100) * 100;
      this.maxAmount = Math.ceil(Math.max(...amounts) / 100) * 100;
      this.amountRange = { lower: this.minAmount, upper: this.maxAmount };
    }
  }

  getSearchPlaceholder() {
    switch (this.filterType) {
      case 'email':
        return 'Filter by email';
      case 'receiptId':
        return 'Filter by Receipt ID';
      case 'amount':
        return 'Filter by amount';
      default:
        return 'Filter';
    }
  }

  resetFilters() {
    this.searchTerm = '';
    this.dateFilter = '';
    this.amountRange = { lower: this.minAmount, upper: this.maxAmount };
    this.filterReceipts();
  }

  sortReceipts() {
    this.filteredReceipts.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
  }

  filterReceipts() {
    this.filteredReceipts = this.receipts.filter((receipt) => {
      let matchesSearch = true;
      if (this.searchTerm) {
        const term = this.searchTerm.toLowerCase();
        if (this.filterType === 'email') {
          matchesSearch = receipt.email?.toLowerCase().includes(term);
        } else if (this.filterType === 'receiptId') {
          matchesSearch = receipt.id?.toLowerCase().includes(term);
        }
      }

      let matchesDate = true;
      if (this.dateFilter) {
        const receiptDate = new Date(receipt.timestamp).toDateString();
        const filterDate = new Date(this.dateFilter).toDateString();
        matchesDate = receiptDate === filterDate;
      }

      let matchesAmount = true;
      if (this.filterType === 'amount') {
        matchesAmount =
          receipt.totalAmount >= this.amountRange.lower &&
          receipt.totalAmount <= this.amountRange.upper;
      }

      return matchesSearch && matchesDate && matchesAmount;
    });

    this.sortReceipts();
  }

  clearDateFilter() {
    this.dateFilter = '';
    this.filterReceipts();
  }

  async confirmDelete(receiptId: string) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this receipt?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => this.deleteReceipt(receiptId),
        },
      ],
    });

    await alert.present();
  }

  deleteReceipt(receiptId: string) {
    this.firestore
      .collection('receipts')
      .doc(receiptId)
      .delete()
      .then(() => {
        console.log('Receipt deleted successfully');
        this.receipts = this.receipts.filter((r) => r.id !== receiptId);
        this.calculateAmountRange();
        this.filterReceipts();
      })
      .catch((error) => {
        console.error('Error deleting receipt:', error);
      });
  }

  writeReview(item: any) {
    const productData = {
      prodID: item.id?.toString() || 'unknown',
      title: item.name || 'Unknown Product',
      price: item.price || 0,
      image: item.image || 'assets/default-product.png',
    };

    this.router.navigate(['/reviews'], {
      state: {
        product: productData,
      },
    });
  }
}
