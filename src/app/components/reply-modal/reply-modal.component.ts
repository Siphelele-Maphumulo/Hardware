import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reply-modal',
  templateUrl: './reply-modal.component.html',
  styleUrls: ['./reply-modal.component.scss'],
})
export class ReplyModalComponent {
  @Input() review: any;
  message: string = '';

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    this.modalCtrl.dismiss();
  }

  send() {
    if (this.message.trim()) {
      this.modalCtrl.dismiss({
        message: this.message,
      });
    }
  }
}
