import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductsPageRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.page'; // Update to ProductsComponent

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProductsPageRoutingModule],
  declarations: [ProductsComponent], // Update to ProductsComponent
})
export class ProductsPageModule {}
