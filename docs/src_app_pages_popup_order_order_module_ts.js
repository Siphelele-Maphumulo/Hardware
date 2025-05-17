"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_popup_order_order_module_ts"],{

/***/ 2414:
/*!***********************************************************!*\
  !*** ./src/app/pages/popup/order/order-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageRoutingModule": () => (/* binding */ OrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.page */ 6453);




const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_0__.OrderPage
    }
];
let OrderPageRoutingModule = class OrderPageRoutingModule {
};
OrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderPageRoutingModule);



/***/ }),

/***/ 5498:
/*!***************************************************!*\
  !*** ./src/app/pages/popup/order/order.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageModule": () => (/* binding */ OrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-routing.module */ 2414);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page */ 6453);







let OrderPageModule = class OrderPageModule {
};
OrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderPageRoutingModule],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_1__.OrderPage],
    })
], OrderPageModule);



/***/ }),

/***/ 6453:
/*!*************************************************!*\
  !*** ./src/app/pages/popup/order/order.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPage": () => (/* binding */ OrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.page.html?ngResource */ 6529);
/* harmony import */ var _order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page.scss?ngResource */ 455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ 910);








let OrderPage = class OrderPage {
    constructor(loadingController, modalCtrl, alertCtrl, cdr, router, fireService, cartService) {
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.cdr = cdr;
        this.router = router;
        this.fireService = fireService;
        this.cartService = cartService;
        this.amount = 0;
        this.orders = [];
        this.total_amt = 0;
        this.totalItems = 0;
        this.notifications = 0;
        this.orderSummary = [];
    }
    ngOnInit() {
        // 1) empty out any persisted cart
        this.cartService.clearCart();
        this.total_amt = 0;
        this.totalItems = 0;
        this.orderSummary = [];
        // 2) now load your products
        this.presentLoading().then(() => {
            this.fireService.getProducts().subscribe((data) => {
                this.orders = data.map((item) => {
                    var _a, _b;
                    return (Object.assign(Object.assign({}, item), { qty: 0, qtyLeft: (_b = (_a = item.qtyLeft) !== null && _a !== void 0 ? _a : item.stock) !== null && _b !== void 0 ? _b : item.qty }));
                });
                this.loadingController.dismiss();
                // no more immediate updateCartDetails() here
                this.cdr.detectChanges();
            });
        });
        // 3) still listen for real cart changes later
        this.cartSub = this.cartService.getCartObservable().subscribe(() => {
            this.totalItems = this.cartService.getTotalItems();
            this.total_amt = this.cartService.getTotal();
            this.updateOrderSummary();
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.cartSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...',
            });
            yield loading.present();
        });
    }
    goToCart() {
        this.router.navigate(['/cart']);
    }
    updateCartDetails() {
        const cart = this.cartService.getCart();
        if (cart.length === 0) {
            // stay at zero until someone adds
            this.total_amt = 0;
            this.totalItems = 0;
            this.orderSummary = [];
            return;
        }
        // otherwise, do the normal thing
        this.total_amt = this.cartService.getTotal();
        this.totalItems = this.cartService.getTotalItems();
        this.updateOrderSummary();
    }
    add(index) {
        const order = this.orders[index];
        if (order && order.qtyLeft > 0) {
            order.qty++;
            order.qtyLeft--;
            this.fireService.addToCart({
                id: Number(order.prodID),
                name: order.title,
                price: order.amount,
                quantity: 1,
                image: order.image, // ✅ Include image
            });
            this.updateOrderSummary();
        }
    }
    remove(index) {
        const order = this.orders[index];
        if (order && order.qty > 0) {
            order.qty--;
            order.qtyLeft++;
            this.fireService.decreaseCartItemQuantity({
                id: Number(order.prodID),
                name: order.title,
                price: order.amount,
                quantity: 1,
                image: order.image,
            });
            this.updateOrderSummary();
        }
    }
    updateOrderSummary() {
        const rawCart = this.fireService.getRawCart();
        this.orderSummary = rawCart.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
        }));
        this.total_amt = this.fireService.getTotalPrice();
        this.totalItems = this.fireService.getTotalItems();
    }
    deleteItem(prodID) {
        this.orders = this.orders.filter((item) => Number(item.prodID) !== prodID);
        this.updateCartDetails();
    }
    checkout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Thanks for your Order!',
                message: 'Siyeshe Holdings will deliver your Orders as soon as possible',
                buttons: ['OK'],
            });
            yield alert.present();
            this.modalCtrl.dismiss().catch(() => console.warn('No modal to dismiss'));
            this.cartService.clearCart();
        });
    }
    goBack() {
        this.router.navigate(['/home']);
    }
};
OrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__.FireserviceService },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService }
];
OrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-order',
        template: _order_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_order_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrderPage);



/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);



let CartService = class CartService {
    constructor() {
        this.cart = [];
        this.cartObservable = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.loadCart();
    }
    loadCart() {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            this.cart = JSON.parse(storedCart);
            this.cartObservable.next(this.cart);
        }
    }
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
    getCart() {
        return this.cart;
    }
    getCartObservable() {
        return this.cartObservable.asObservable();
    }
    getTotal() {
        return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    getTotalItems() {
        return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
    addProduct(product) {
        const existing = this.cart.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += product.quantity;
        }
        else {
            this.cart.push(product);
        }
        this.saveCart();
        this.cartObservable.next(this.cart);
    }
    decreaseProduct(product) {
        const index = this.cart.findIndex(item => item.id === product.id);
        if (index > -1) {
            if (this.cart[index].quantity > 1) {
                this.cart[index].quantity--;
            }
            else {
                this.cart.splice(index, 1);
            }
            this.saveCart();
            this.cartObservable.next(this.cart);
        }
    }
    removeProduct(product) {
        const index = this.cart.findIndex(item => item.id === product.id);
        if (index > -1) {
            this.cart.splice(index, 1);
            this.saveCart();
            this.cartObservable.next(this.cart);
        }
    }
    clearCart() {
        this.cart = [];
        this.saveCart();
        this.cartObservable.next(this.cart);
    }
};
CartService.ctorParameters = () => [];
CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], CartService);



/***/ }),

/***/ 455:
/*!**************************************************************!*\
  !*** ./src/app/pages/popup/order/order.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ":host ion-content {\n  --background: #f8f8ff;\n}\n\n.empty-state {\n  text-align: center;\n  color: #777;\n  margin-top: 50%;\n}\n\n.empty-state ion-icon {\n  font-size: 48px;\n  color: #ccc;\n  margin-bottom: 10px;\n}\n\n.empty-state p {\n  font-size: 18px;\n}\n\n.order-card {\n  margin: 12px 0;\n  --background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n\n.order-card ion-item {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n}\n\n.order-card ion-thumbnail {\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-right: 12px;\n}\n\n.order-card ion-thumbnail img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.order-card .order-info h2 {\n  margin: 0 0 4px;\n  font-size: 16px;\n  color: #333;\n}\n\n.order-card .order-info p {\n  margin: 2px 0;\n  font-size: 14px;\n  color: #555;\n}\n\n.order-card .order-info .order-status.confirmed {\n  color: green;\n  font-weight: bold;\n}\n\n.order-card .order-info .order-status.pending {\n  color: orange;\n  font-weight: bold;\n}\n\n.order-card ion-card-content {\n  padding: 8px 16px;\n}\n\n.order-card ion-card-content .edit-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.order-card ion-card-content .edit-controls .qty {\n  min-width: 24px;\n  text-align: center;\n  font-weight: 600;\n  color: #333;\n}\n\n.order-card ion-card-content .edit-controls ion-button {\n  --min-width: 32px;\n  --min-height: 32px;\n  --padding: 0;\n}\n\n.order-card ion-card-content .item-info {\n  font-size: 14px;\n  color: #666;\n}\n\n.more-items {\n  text-align: center;\n  color: #f15b3a;\n  font-weight: 600;\n  margin: 20px 0;\n  cursor: pointer;\n}\n\n.summary-wrapper {\n  background: linear-gradient(to bottom, #f0f0f0, #d1d1d1 70%);\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 12px;\n  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.6), 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  /* rounded shape like a bottle */\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  /* Add a slight reflection for the bottle's curvature */\n  background-blend-mode: overlay;\n  /* Optional: add a shiny overlay for a glossy effect */\n  position: relative;\n}\n\n.summary-wrapper::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));\n  pointer-events: none;\n}\n\n/* List of items inside the scroll area */\n\n.items-list {\n  max-height: 130px;\n  overflow-y: auto;\n  margin-bottom: 8px;\n}\n\n/* Each line in the summary */\n\n.order-item {\n  padding: 6px 0;\n  border-bottom: 1px dotted #ccc;\n  color: #333;\n  font-size: 14px;\n}\n\n/* Summary totals lines */\n\n.summary-line {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n  color: #333;\n  padding: 4px 0;\n  border-top: 1px solid #eee;\n}\n\n/* Fallback when empty */\n\n.order_summary.empty {\n  text-align: center;\n  color: #777;\n}\n\n.order_summary.empty h3 {\n  margin-bottom: 8px;\n  color: #f15b3a;\n}\n\n/* Checkout bar styling */\n\n.checkout-toolbar {\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREY7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBREY7O0FBR0U7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZOOztBQU9JO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTE47O0FBT0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFMTjs7QUFPSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUxOOztBQU9JO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBTE47O0FBU0U7RUFDRSxpQkFBQTtBQVBKOztBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBUE47O0FBU007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFQUjs7QUFVTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUlI7O0FBWUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVZOOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVpGOztBQWVBO0VBQ0UsNERBQUE7RUFNQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlGQUFBO0VBRUEsbUJBQUE7RUFBcUIsZ0NBQUE7RUFDckIsb0NBQUE7RUFDQSx1REFBQTtFQUNBLDhCQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RUFBQTtFQUNBLG9CQUFBO0FBakJGOztBQW9CQSx5Q0FBQTs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWpCRjs7QUFvQkEsNkJBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWpCRjs7QUFvQkEseUJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFqQkY7O0FBb0JBLHdCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBakJGOztBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQWpCSjs7QUFxQkEseUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBbEJGIiwiZmlsZSI6Im9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY4ZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzc3NztcclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1jYXJkIHtcclxuICBtYXJnaW46IDEycHggMDtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vcmRlci1pbmZvIHtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICB9XHJcbiAgICAub3JkZXItc3RhdHVzLmNvbmZpcm1lZCB7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAub3JkZXItc3RhdHVzLnBlbmRpbmcge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcblxyXG4gICAgLmVkaXQtY29udHJvbHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgLnF0eSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLW1pbi13aWR0aDogMzJweDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0taW5mbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9yZS1pdGVtcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZjE1YjNhO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3VtbWFyeS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICAjZjBmMGYwLFxyXG4gICAgLyogbGlnaHQgdG9wIGZvciBnbG9zcyAqLyAjZDFkMWQxIDcwJSxcclxuICAgIC8qIGRhcmtlciBib3R0b20gZm9yIGRlcHRoICovXHJcbiAgKTtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxyXG4gICAgLyogZ2xvc3N5IGhpZ2hsaWdodCAqLyAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7IC8qIHJvdW5kZWQgc2hhcGUgbGlrZSBhIGJvdHRsZSAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAvKiBBZGQgYSBzbGlnaHQgcmVmbGVjdGlvbiBmb3IgdGhlIGJvdHRsZSdzIGN1cnZhdHVyZSAqL1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuICAvKiBPcHRpb25hbDogYWRkIGEgc2hpbnkgb3ZlcmxheSBmb3IgYSBnbG9zc3kgZWZmZWN0ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3VtbWFyeS13cmFwcGVyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIExpc3Qgb2YgaXRlbXMgaW5zaWRlIHRoZSBzY3JvbGwgYXJlYSAqL1xyXG4uaXRlbXMtbGlzdCB7XHJcbiAgbWF4LWhlaWdodDogMTMwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi8qIEVhY2ggbGluZSBpbiB0aGUgc3VtbWFyeSAqL1xyXG4ub3JkZXItaXRlbSB7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjY2NjO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLyogU3VtbWFyeSB0b3RhbHMgbGluZXMgKi9cclxuLnN1bW1hcnktbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLyogRmFsbGJhY2sgd2hlbiBlbXB0eSAqL1xyXG4ub3JkZXJfc3VtbWFyeS5lbXB0eSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBjb2xvcjogI2YxNWIzYTtcclxuICB9XHJcbn1cclxuXHJcbi8qIENoZWNrb3V0IGJhciBzdHlsaW5nICovXHJcbi5jaGVja291dC10b29sYmFyIHtcclxuICAtLXBhZGRpbmctdG9wOiA2cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 6529:
/*!**************************************************************!*\
  !*** ./src/app/pages/popup/order/order.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"shade\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"search-chef\" color=\"dark\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Make Orders</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon name=\"notifications-outline\"></ion-icon>\r\n        <ion-badge color=\"primary\">{{ notifications }}</ion-badge>\r\n      </ion-button>\r\n      <ion-avatar>\r\n        <img src=\"../../../assets/img/Profile.png\" />\r\n      </ion-avatar>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<!-- Floating Cart Button -->\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button (click)=\"goToCart()\" [disabled]=\"totalItems === 0\">\r\n    <ion-icon name=\"cart-outline\"></ion-icon>\r\n    <ion-badge color=\"success\">{{ totalItems }}</ion-badge>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-list *ngIf=\"orders.length > 0; else noOrders\">\r\n    <ion-card *ngFor=\"let order of orders; let i = index\" class=\"order-card\">\r\n      <ion-item lines=\"none\">\r\n        <ion-thumbnail slot=\"start\">\r\n          <img [src]=\"order.image\" alt=\"{{ order.title }}\" />\r\n        </ion-thumbnail>\r\n        <ion-label class=\"order-info\">\r\n          <h2>{{ order.title }}</h2>\r\n          <p class=\"order-id\">ID: {{ order.prodID }}</p>\r\n          <p class=\"order-amount\">R{{ order.amount | number:'1.2-2' }}</p>\r\n          <p\r\n            class=\"order-status\"\r\n            [ngClass]=\"order.status === 'CONFIRMED' ? 'confirmed' : 'pending'\"\r\n          >\r\n            {{ order.status }}\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-card-content>\r\n        <div class=\"edit-controls\">\r\n          <ion-button fill=\"outline\" size=\"small\" (click)=\"remove(i)\">\r\n            <ion-icon slot=\"icon-only\" name=\"remove-outline\"></ion-icon>\r\n          </ion-button>\r\n          <span class=\"qty\">{{ order.qty }}</span>\r\n          <ion-button fill=\"outline\" size=\"small\" (click)=\"add(i)\">\r\n            <ion-icon slot=\"icon-only\" name=\"add-outline\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button\r\n            fill=\"clear\"\r\n            color=\"danger\"\r\n            size=\"small\"\r\n            (click)=\"deleteItem(order.prodID)\"\r\n          >\r\n            <ion-icon slot=\"icon-only\" name=\"eye-off\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n        <p class=\"item-info\">\r\n          Price: R{{ order.amount | number:'1.2-2' }} &bull; Left: {{\r\n          order.qtyLeft }}\r\n        </p>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>\r\n\r\n  <ng-template #noOrders>\r\n    <div class=\"empty-state\">\r\n      <ion-icon name=\"cart-outline\" size=\"large\"></ion-icon>\r\n      <p>No orders to display.</p>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <p class=\"more-items\">No more items</p>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <!-- Scrollable summary container -->\r\n  <div class=\"summary-wrapper\">\r\n    <!-- If there are items in the summary, show them -->\r\n    <div class=\"order_summary\" *ngIf=\"orderSummary.length > 0; else noItems\">\r\n      <h3>Order Summary</h3>\r\n      <div class=\"items-list\">\r\n        <div *ngFor=\"let item of orderSummary\" class=\"order-item\">\r\n          {{ item.name }} — Qty: {{ item.quantity }} — R{{ (item.price *\r\n          item.quantity) | number:'1.2-2' }}\r\n        </div>\r\n      </div>\r\n      <div class=\"summary-line\">\r\n        <span>Sub Total:</span>\r\n        <span>R{{ total_amt | number:'1.2-2' }}</span>\r\n      </div>\r\n      <div class=\"summary-line\">\r\n        <span>VAT Included:</span>\r\n        <span>R{{ (total_amt * 15/115) | number:'1.2-2' }}</span>\r\n      </div>\r\n      <div class=\"summary-line\">\r\n        <span>Delivery:</span>\r\n        <span>Free</span>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Fallback when there are no items -->\r\n    <ng-template #noItems>\r\n      <div class=\"order_summary empty\">\r\n        <h3>Order Summary</h3>\r\n        <p>No items selected.</p>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n\r\n  <!-- Always-visible checkout toolbar -->\r\n  <ion-toolbar color=\"dark\" class=\"checkout-toolbar\">\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-col size=\"7\">\r\n        <ion-text color=\"light\">\r\n          <h4>Total: R{{ total_amt | number:'1.2-2' }}</h4>\r\n        </ion-text>\r\n      </ion-col>\r\n      <ion-col size=\"5\" class=\"ion-text-right\">\r\n        <ion-button\r\n          fill=\"clear\"\r\n          size=\"small\"\r\n          [disabled]=\"total_amt === 0\"\r\n          (click)=\"goToCart()\"\r\n          style=\"\r\n            color: rgb(255, 255, 255);\r\n            padding-right: 30%;\r\n            font-weight: bolder;\r\n          \"\r\n        >\r\n          cart\r\n          <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_popup_order_order_module_ts.js.map