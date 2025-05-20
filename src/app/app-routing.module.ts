import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./index/index.module').then((m) => m.IndexPageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./admin/users/users.module').then((m) => m.UsersPageModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'orders',
    loadChildren: () =>
      import('./admin/orders/orders.module').then((m) => m.OrdersPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'stock',
    loadChildren: () =>
      import('./admin/stock/stock.module').then((m) => m.StockPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reviews',
    loadChildren: () =>
      import('./admin/reviews/reviews.module').then((m) => m.ReviewsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'view-reviews',
    loadChildren: () =>
      import('./admin/view-reviews/view-reviews.module').then(
        (m) => m.ViewReviewsPageModule
      ),
    canActivate: [AuthGuard],
  },
  // Existing routes
  {
    path: 'order',
    loadChildren: () =>
      import('./pages/popup/order/order.module').then((m) => m.OrderPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'order-menu',
    loadChildren: () =>
      import('./pages/popup/order-menu/order-menu.module').then(
        (m) => m.OrderMenuPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./pages/forgot/forgot.module').then((m) => m.ForgotPageModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then((m) => m.ProductsPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'verify-email',
    loadChildren: () =>
      import('./verify-email/verify-email.module').then(
        (m) => m.VerifyEmailPageModule
      ),
  },
  {
    path: 'cart-modal',
    loadChildren: () =>
      import('./pages/cart-modal/cart-modal.module').then(
        (m) => m.CartModalPageModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./cart/cart.module').then((m) => m.CartPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'checkout',
    loadChildren: () =>
      import('./pages/checkout/checkout.module').then(
        (m) => m.CheckoutPageModule
      ),
  },
  {
    path: 'receipt',
    loadChildren: () =>
      import('./pages/receipt/receipt.module').then((m) => m.ReceiptPageModule),
  },
  // Fallback route
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
