import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrls: ['./image-preview-modal.component.scss'],
})
export class ImagePreviewModalComponent implements OnInit {
  imageSrc: string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.imageSrc = this.navParams.get('imageSrc');
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
