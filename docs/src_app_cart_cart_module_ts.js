"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cart_cart_module_ts"],{

/***/ 3951:
/*!*********************************************!*\
  !*** ./src/app/cart/cart-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageRoutingModule": () => (/* binding */ CartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page */ 4612);




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_0__.CartPage
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartPageRoutingModule);



/***/ }),

/***/ 2943:
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageModule": () => (/* binding */ CartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-routing.module */ 3951);
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page */ 4612);







let CartPageModule = class CartPageModule {
};
CartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartPageRoutingModule
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_1__.CartPage]
    })
], CartPageModule);



/***/ }),

/***/ 4612:
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPage": () => (/* binding */ CartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.page.html?ngResource */ 3098);
/* harmony import */ var _cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.page.scss?ngResource */ 4068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _fireservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fireservice.service */ 9792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);







let CartPage = class CartPage {
    constructor(fireService, location, router) {
        this.fireService = fireService;
        this.location = location;
        this.router = router;
        this.cartItems = [];
        this.totalItems = 0;
        this.totalAmount = 0;
    }
    ngOnInit() {
        this.fireService.getCartObservable().subscribe((items) => {
            this.cartItems = items;
            this.recalculateTotals();
        });
    }
    // ← New unique names
    increaseQuantity(i) {
        this.fireService.incCartItem(this.cartItems[i]);
    }
    decreaseQuantity(i) {
        this.fireService.decCartItem(this.cartItems[i]);
    }
    removeItem(i) {
        this.fireService.removeCartItem(this.cartItems[i]);
    }
    recalculateTotals() {
        this.totalItems = this.cartItems.reduce((sum, it) => sum + it.quantity, 0);
        this.totalAmount = this.cartItems.reduce((sum, it) => sum + it.quantity * it.price, 0);
    }
    checkout() {
        this.router.navigate(['/checkout'], {
            state: {
                totalAmount: this.totalAmount,
                cartItems: this.cartItems,
            },
        });
    }
    goBack() {
        this.location.back();
    }
};
CartPage.ctorParameters = () => [
    { type: _fireservice_service__WEBPACK_IMPORTED_MODULE_2__.FireserviceService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
CartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-cart',
        template: _cart_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartPage);



/***/ }),

/***/ 4068:
/*!************************************************!*\
  !*** ./src/app/cart/cart.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ion-background-color: #f5f5f5;\n}\n\n.empty-cart {\n  text-align: center;\n  color: #777;\n  margin-top: 50%;\n}\n\n.empty-cart ion-icon {\n  font-size: 48px;\n  color: #ccc;\n  margin-bottom: 12px;\n}\n\n.empty-cart p {\n  font-size: 18px;\n  margin: 0;\n}\n\n.cart-card {\n  margin-bottom: 12px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n}\n\n.cart-card ion-card-content {\n  padding: 12px;\n}\n\n.cart-card .item-top {\n  display: flex;\n  align-items: flex-start;\n}\n\n.cart-card ion-thumbnail {\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  margin-right: 12px;\n  overflow: hidden;\n}\n\n.cart-card ion-thumbnail img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.cart-card .details h2 {\n  margin: 0 0 4px 0;\n  font-size: 16px;\n  color: #333;\n  line-height: 1.2;\n}\n\n.cart-card .details p {\n  margin: 2px 0;\n  font-size: 14px;\n  color: #555;\n}\n\n.cart-card .controls {\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  justify-content: flex-start;\n  gap: 8px;\n  margin-top: 12px;\n}\n\n.cart-card .controls .qty {\n  min-width: 24px;\n  text-align: center;\n  font-weight: 500;\n  color: #333;\n}\n\n.cart-card .controls ion-button {\n  --padding: 0;\n  --min-width: 32px;\n  --min-height: 32px;\n}\n\n.checkout-section {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  padding: 16px;\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n}\n\n.checkout-section .total-summary {\n  background: #fff;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);\n}\n\n.checkout-section .total-summary p {\n  margin: 6px 0;\n  font-size: 16px;\n  color: #333;\n}\n\n.checkout-section .total-summary p strong {\n  color: #000;\n}\n\n.checkout-section ion-button {\n  width: 100%;\n}\n\n.checkout-section ion-button {\n  font-size: 16px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxTQUFBO0FBRUo7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUNFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUVJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUtJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSE47O0FBS0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFITjs7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFPSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUxOOztBQVFJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFOTjs7QUFXQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7QUFSRjs7QUFVRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQVJKOztBQVVJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBUk47O0FBVU07RUFDRSxXQUFBO0FBUlI7O0FBYUU7RUFDRSxXQUFBO0FBWEo7O0FBY0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVpKIiwiZmlsZSI6ImNhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5lbXB0eS1jYXJ0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgbWFyZ2luLXRvcDogNTAlO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FydC1jYXJkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgfVxyXG5cclxuICAuaXRlbS10b3Age1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBpbWcge1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXRhaWxzIHtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogIzU1NTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcblxyXG4gICAgLnF0eSB7XHJcbiAgICAgIG1pbi13aWR0aDogMjRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgICAtLW1pbi13aWR0aDogMzJweDtcclxuICAgICAgLS1taW4taGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNoZWNrb3V0LXNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAtMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gIC50b3RhbC1zdW1tYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG5cclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3098:
/*!************************************************!*\
  !*** ./src/app/cart/cart.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"shade\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Shopping Cart</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div *ngIf=\"cartItems.length === 0\" class=\"empty-cart\">\r\n    <ion-icon name=\"cart-outline\" size=\"large\"></ion-icon>\r\n    <p>Your cart is empty.</p>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"cartItems.length > 0\">\r\n    <ion-list>\r\n      <ion-card *ngFor=\"let item of cartItems; let i = index\" class=\"cart-card\">\r\n        <ion-card-content>\r\n          <div class=\"item-top\">\r\n            <ion-thumbnail>\r\n              <img [src]=\"item.image\" alt=\"{{ item.name }}\" />\r\n            </ion-thumbnail>\r\n            <div class=\"details\">\r\n              <h2>{{ item.name }}</h2>\r\n              <p>Unit Price: ${{ item.price | number:'1.2-2' }}</p>\r\n              <p>\r\n                Subtotal: ${{ (item.price * item.quantity) | number:'1.2-2' }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"controls\">\r\n            <ion-button\r\n              fill=\"outline\"\r\n              size=\"small\"\r\n              (click)=\"decreaseQuantity(i)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"remove-outline\"></ion-icon>\r\n            </ion-button>\r\n            <span class=\"qty\">{{ item.quantity }}</span>\r\n            <ion-button\r\n              fill=\"outline\"\r\n              size=\"small\"\r\n              (click)=\"increaseQuantity(i)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button\r\n              fill=\"clear\"\r\n              color=\"danger\"\r\n              size=\"small\"\r\n              (click)=\"removeItem(i)\"\r\n            >\r\n              <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-list>\r\n\r\n    <div class=\"checkout-section\">\r\n      <div class=\"total-summary\">\r\n        <p><strong>Total Items:</strong> {{ totalItems }}</p>\r\n        <p><strong>Total Price:</strong> ${{ totalAmount | number:'1.2-2' }}</p>\r\n      </div>\r\n      <ion-button color=\"dark\" expand=\"full\" (click)=\"checkout()\">\r\n        Proceed to Checkout\r\n      </ion-button>\r\n    </div>\r\n  </ng-container>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_cart_cart_module_ts.js.map