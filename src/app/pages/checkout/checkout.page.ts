import { Component, OnInit } from '@angular/core';
import { CartItem, FireserviceService } from 'src/app/fireservice.service';
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController, LoadingController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
import emailjs from 'emailjs-com';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Add this import

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItems: CartItem[] = [];
  totalAmount: number = 0;
  // Remove this line: firestore: any;

  constructor(
    private fireService: FireserviceService,
    private router: Router,
    private location: Location,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore // Add AngularFirestore here
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as {
      totalAmount: number;
      cartItems: CartItem[];
    };

    if (state && state.cartItems) {
      this.cartItems = state.cartItems;
      this.totalAmount = state.totalAmount || 0;
    } else {
      this.fireService.getCart().subscribe((items) => {
        this.cartItems = items;
        this.totalAmount = items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      });
    }
  }

  async payNow() {
    const alert = await this.alertCtrl.create({
      header: 'Enter Your Email',
      message: 'Please enter your email address to receive the receipt.',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'you@example.com',
          attributes: {
            required: true,
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Send Receipt',
          handler: async (data) => {
            const email = data.email.trim();

            if (!this.isValidEmail(email)) {
              this.showInvalidEmailAlert();
              return false;
            }

            const loading = await this.loadingCtrl.create({
              message: 'Processing your order...',
            });
            await loading.present();

            try {
              // Validate cart items first
              if (!this.cartItems || this.cartItems.length === 0) {
                throw new Error('Cart is empty');
              }

              // Create receipt object with proper product references
              const receipt = {
                id: this.fireService.firestore.firestore.collection('_').doc()
                  .id,
                email: email,
                items: this.cartItems.map((item) => ({
                  productId: item.id.toString(), // Ensure string ID
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity,
                })),
                totalAmount: this.totalAmount,
                timestamp: new Date(),
                status: 'completed',
              };

              // 1. First update product quantities
              const updateSuccess =
                await this.fireService.updateProductQuantities(receipt);
              if (!updateSuccess) {
                throw new Error('Failed to update product quantities');
              }

              // 2. Save receipt
              await this.fireService.saveReceipt(receipt);

              // 3. Send email receipt (if implemented)
              await this.sendEmailReceipt(email, receipt);

              // 4. Clear cart
              await this.fireService.clearCart();

              await loading.dismiss();

              // Navigate to receipt page
              this.router.navigate(['/receipt'], {
                state: { receipt },
                replaceUrl: true, // Prevent going back to checkout
              });
            } catch (error) {
              await loading.dismiss();
              console.error('Checkout error:', error);
              const errorMessage =
                error instanceof Error
                  ? error.message
                  : 'Failed to complete checkout';

              const errorAlert = await this.alertCtrl.create({
                header: 'Error',
                message: errorMessage,
                buttons: ['OK'],
              });
              await errorAlert.present();
            }
          },
        },
      ],
    });

    await alert.present();
  }

  private async sendEmailReceipt(email: string, receipt: any) {
    try {
      const emailParams = {
        to_email: email,
        receipt_id: receipt.id,
        total_amount: receipt.totalAmount.toFixed(2),
        timestamp: receipt.timestamp.toLocaleString(),
        items_list: receipt.items
          .map(
            (item) =>
              `${item.name} (x${item.quantity}) - R${item.price.toFixed(2)}`
          )
          .join('\n'),
      };

      await emailjs.send(
        'service_yx0n32r',
        'template_lii9gcr',
        emailParams,
        'eKzdemI4rGn5XqTtd'
      );
    } catch (error) {
      console.error('Email sending failed:', error);
      // Don't fail the whole checkout if email fails
    }
  }

  private isValidEmail(email: string): boolean {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  private async showInvalidEmailAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Email',
      message: 'Please enter a valid email address.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  goBack() {
    this.location.back();
  }
}
