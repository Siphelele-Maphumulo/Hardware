import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.page'; // Update to ProductsComponent

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent, // Use ProductsComponent here
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsPageRoutingModule {}
