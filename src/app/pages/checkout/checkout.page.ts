import { Component, OnInit } from '@angular/core';
import { CartItem, FireserviceService } from 'src/app/fireservice.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';

// Import EmailJS
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cartItems: CartItem[] = [];
  totalAmount: number = 0;

  constructor(
    private fireService: FireserviceService,
    private router: Router,
    private location: Location,
    private alertCtrl: AlertController
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
      // Fallback to service
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

            try {
              const receipt = {
                id: uuidv4(),
                email: email,
                items: this.cartItems.map((item) => ({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  quantity: item.quantity,
                })),
                totalAmount: this.totalAmount,
                timestamp: new Date(),
              };

              // Save receipt in Firestore (optional)
              await this.fireService.saveReceipt(
                JSON.parse(JSON.stringify(receipt))
              );

              // Prepare EmailJS template params
              const emailParams = {
                to_email: email,
                receipt_id: receipt.id,
                total_amount: receipt.totalAmount.toFixed(2),
                timestamp: receipt.timestamp.toLocaleString(),
                items_list: receipt.items
                  .map(
                    (item) =>
                      `${item.name} (x${item.quantity}) - R${item.price.toFixed(
                        2
                      )}`
                  )
                  .join('\n'),
              };

              // Send email using EmailJS
              await emailjs.send(
                'service_yx0n32r',
                'template_lii9gcr',
                emailParams,
                'eKzdemI4rGn5XqTtd'
              );

              // Clear cart
              await this.fireService.clearCart();

              // Navigate to receipt page with state
              const navigationExtras: NavigationExtras = {
                state: {
                  receipt,
                },
              };

              this.router.navigate(['/receipt'], navigationExtras);
            } catch (error) {
              console.error('Payment or email failed:', error);
              const errorAlert = await this.alertCtrl.create({
                header: 'Error',
                message: 'Failed to process payment or send email.',
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
