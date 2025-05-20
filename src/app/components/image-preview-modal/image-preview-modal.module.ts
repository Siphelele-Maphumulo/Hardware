import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular'; // ✅ THIS IS CRITICAL
import { ImagePreviewModalComponent } from './image-preview-modal.component';

@NgModule({
  declarations: [ImagePreviewModalComponent],
  imports: [
    CommonModule,
    IonicModule, // ✅ Make sure this is here!
  ],
  exports: [ImagePreviewModalComponent],
})
export class ImagePreviewModalModule {}
