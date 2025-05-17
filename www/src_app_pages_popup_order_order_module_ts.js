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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.page */ 6453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_0__.OrderPage
    }
];
class OrderPageRoutingModule {
}
OrderPageRoutingModule.ɵfac = function OrderPageRoutingModule_Factory(t) { return new (t || OrderPageRoutingModule)(); };
OrderPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderPageRoutingModule });
OrderPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-routing.module */ 2414);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page */ 6453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class OrderPageModule {
}
OrderPageModule.ɵfac = function OrderPageModule_Factory(t) { return new (t || OrderPageModule)(); };
OrderPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OrderPageModule });
OrderPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderPageRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrderPageModule, { declarations: [_order_page__WEBPACK_IMPORTED_MODULE_1__.OrderPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderPageRoutingModule] }); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ 910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);







function OrderPage_ion_list_19_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-card", 28)(1, "ion-item", 29)(2, "ion-thumbnail", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-label", 31)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ion-card-content")(15, "div", 35)(16, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_list_19_ion_card_1_Template_ion_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const i_r8 = restoredCtx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.remove(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_list_19_ion_card_1_Template_ion_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const i_r8 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.add(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "ion-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_ion_list_19_ion_card_1_Template_ion_button_click_22_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const order_r7 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.deleteItem(order_r7.prodID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const order_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", order_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", order_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("ID: ", order_r7.prodID, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 10, order_r7.amount, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", order_r7.status === "CONFIRMED" ? "confirmed" : "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", order_r7.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](order_r7.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Price: R", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 13, order_r7.amount, "1.2-2"), " \u2022 Left: ", order_r7.qtyLeft, " ");
} }
function OrderPage_ion_list_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, OrderPage_ion_list_19_ion_card_1_Template, 27, 16, "ion-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.orders);
} }
function OrderPage_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No orders to display.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function OrderPage_div_26_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", item_r14.name, " \u2014 Qty: ", item_r14.quantity, " \u2014 R", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 3, item_r14.price * item_r14.quantity, "1.2-2"), " ");
} }
function OrderPage_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, OrderPage_div_26_div_4_Template, 3, 6, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 48)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Sub Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 48)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "VAT Included:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 48)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Delivery:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Free");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.orderSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 3, ctx_r3.total_amt, "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("R", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 6, ctx_r3.total_amt * 15 / 115, "1.2-2"), "");
} }
function OrderPage_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Order Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No items selected.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class OrderPage {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
}
OrderPage.ɵfac = function OrderPage_Factory(t) { return new (t || OrderPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_0__.FireserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService)); };
OrderPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OrderPage, selectors: [["app-order"]], decls: 40, vars: 12, consts: [["color", "shade"], ["slot", "start"], ["defaultHref", "search-chef", "color", "dark"], [2, "text-align", "center"], ["slot", "end"], ["fill", "clear"], ["name", "notifications-outline"], ["color", "primary"], ["src", "../../../assets/img/Profile.png"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "disabled", "click"], ["name", "cart-outline"], ["color", "success"], [1, "ion-padding"], [4, "ngIf", "ngIfElse"], ["noOrders", ""], [1, "more-items"], [1, "summary-wrapper"], ["class", "order_summary", 4, "ngIf", "ngIfElse"], ["noItems", ""], ["color", "dark", 1, "checkout-toolbar"], [1, "ion-align-items-center"], ["size", "7"], ["color", "light"], ["size", "5", 1, "ion-text-right"], ["fill", "clear", "size", "small", 2, "color", "rgb(255, 255, 255)", "padding-right", "30%", "font-weight", "bolder", 3, "disabled", "click"], ["slot", "end", "name", "arrow-forward-outline"], ["class", "order-card", 4, "ngFor", "ngForOf"], [1, "order-card"], ["lines", "none"], [3, "src", "alt"], [1, "order-info"], [1, "order-id"], [1, "order-amount"], [1, "order-status", 3, "ngClass"], [1, "edit-controls"], ["fill", "outline", "size", "small", 3, "click"], ["slot", "icon-only", "name", "remove-outline"], [1, "qty"], ["slot", "icon-only", "name", "add-outline"], ["fill", "clear", "color", "danger", "size", "small", 3, "click"], ["slot", "icon-only", "name", "eye-off"], [1, "item-info"], [1, "empty-state"], ["name", "cart-outline", "size", "large"], [1, "order_summary"], [1, "items-list"], ["class", "order-item", 4, "ngFor", "ngForOf"], [1, "summary-line"], [1, "order-item"], [1, "order_summary", "empty"]], template: function OrderPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-title", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Make Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-buttons", 4)(7, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-badge", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-fab", 9)(14, "ion-fab-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_Template_ion_fab_button_click_14_listener() { return ctx.goToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-badge", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ion-content", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, OrderPage_ion_list_19_Template, 2, 1, "ion-list", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, OrderPage_ng_template_20_Template, 4, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "No more items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "ion-footer")(25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, OrderPage_div_26_Template, 22, 9, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, OrderPage_ng_template_27_Template, 5, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-toolbar", 20)(30, "ion-row", 21)(31, "ion-col", 22)(32, "ion-text", 23)(33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "ion-col", 24)(37, "ion-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function OrderPage_Template_ion_button_click_37_listener() { return ctx.goToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "ion-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](21);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.totalItems === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.totalItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orders.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.orderSummary.length > 0)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Total: R", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 9, ctx.total_amt, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.total_amt === 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonThumbnail, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonText], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: ["[_nghost-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: #f8f8ff;\n}\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #777;\n  margin-top: 50%;\n}\n\n.empty-state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #ccc;\n  margin-bottom: 10px;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.order-card[_ngcontent-%COMP%] {\n  margin: 12px 0;\n  --background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n\n.order-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n}\n\n.order-card[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-right: 12px;\n}\n\n.order-card[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.order-card[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 16px;\n  color: #333;\n}\n\n.order-card[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  font-size: 14px;\n  color: #555;\n}\n\n.order-card[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-status.confirmed[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: bold;\n}\n\n.order-card[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-status.pending[_ngcontent-%COMP%] {\n  color: orange;\n  font-weight: bold;\n}\n\n.order-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n}\n\n.order-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .edit-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.order-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .edit-controls[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\n  min-width: 24px;\n  text-align: center;\n  font-weight: 600;\n  color: #333;\n}\n\n.order-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .edit-controls[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --min-width: 32px;\n  --min-height: 32px;\n  --padding: 0;\n}\n\n.order-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .item-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n}\n\n.more-items[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #f15b3a;\n  font-weight: 600;\n  margin: 20px 0;\n  cursor: pointer;\n}\n\n.summary-wrapper[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, #f0f0f0, #d1d1d1 70%);\n  max-height: 200px;\n  overflow-y: auto;\n  padding: 12px;\n  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.6), 0 4px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 25px;\n  \n  border: 1px solid rgba(0, 0, 0, 0.2);\n  \n  background-blend-mode: overlay;\n  \n  position: relative;\n}\n\n.summary-wrapper[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  background: linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));\n  pointer-events: none;\n}\n\n\n\n.items-list[_ngcontent-%COMP%] {\n  max-height: 130px;\n  overflow-y: auto;\n  margin-bottom: 8px;\n}\n\n\n\n.order-item[_ngcontent-%COMP%] {\n  padding: 6px 0;\n  border-bottom: 1px dotted #ccc;\n  color: #333;\n  font-size: 14px;\n}\n\n\n\n.summary-line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-weight: 600;\n  color: #333;\n  padding: 4px 0;\n  border-top: 1px solid #eee;\n}\n\n\n\n.order_summary.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #777;\n}\n\n.order_summary.empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #f15b3a;\n}\n\n\n\n.checkout-toolbar[_ngcontent-%COMP%] {\n  --padding-top: 6px;\n  --padding-bottom: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBREY7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUo7O0FBRUU7RUFDRSxlQUFBO0FBQUo7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBREY7O0FBR0U7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZKOztBQUlJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZOOztBQU9JO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBTE47O0FBT0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFMTjs7QUFPSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUxOOztBQU9JO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBTE47O0FBU0U7RUFDRSxpQkFBQTtBQVBKOztBQVNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBUE47O0FBU007RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFQUjs7QUFVTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBUlI7O0FBWUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVZOOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVpGOztBQWVBO0VBQ0UsNERBQUE7RUFNQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlGQUFBO0VBRUEsbUJBQUE7RUFBcUIsZ0NBQUE7RUFDckIsb0NBQUE7RUFDQSx1REFBQTtFQUNBLDhCQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2RUFBQTtFQUNBLG9CQUFBO0FBakJGOztBQW9CQSx5Q0FBQTs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWpCRjs7QUFvQkEsNkJBQUE7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQWpCRjs7QUFvQkEseUJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFqQkY7O0FBb0JBLHdCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBakJGOztBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQWpCSjs7QUFxQkEseUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBbEJGIiwiZmlsZSI6Im9yZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmOGY4ZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzc3NztcclxuICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5vcmRlci1jYXJkIHtcclxuICBtYXJnaW46IDEycHggMDtcclxuICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgfVxyXG5cclxuICBpb24tdGh1bWJuYWlsIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vcmRlci1pbmZvIHtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiAwIDAgNHB4O1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM1NTU7XHJcbiAgICB9XHJcbiAgICAub3JkZXItc3RhdHVzLmNvbmZpcm1lZCB7XHJcbiAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAub3JkZXItc3RhdHVzLnBlbmRpbmcge1xyXG4gICAgICBjb2xvcjogb3JhbmdlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcblxyXG4gICAgLmVkaXQtY29udHJvbHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICAgICAgLnF0eSB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAtLW1pbi13aWR0aDogMzJweDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0taW5mbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM2NjY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9yZS1pdGVtcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZjE1YjNhO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3VtbWFyeS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICB0byBib3R0b20sXHJcbiAgICAjZjBmMGYwLFxyXG4gICAgLyogbGlnaHQgdG9wIGZvciBnbG9zcyAqLyAjZDFkMWQxIDcwJSxcclxuICAgIC8qIGRhcmtlciBib3R0b20gZm9yIGRlcHRoICovXHJcbiAgKTtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxyXG4gICAgLyogZ2xvc3N5IGhpZ2hsaWdodCAqLyAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7IC8qIHJvdW5kZWQgc2hhcGUgbGlrZSBhIGJvdHRsZSAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAvKiBBZGQgYSBzbGlnaHQgcmVmbGVjdGlvbiBmb3IgdGhlIGJvdHRsZSdzIGN1cnZhdHVyZSAqL1xyXG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogb3ZlcmxheTtcclxuICAvKiBPcHRpb25hbDogYWRkIGEgc2hpbnkgb3ZlcmxheSBmb3IgYSBnbG9zc3kgZWZmZWN0ICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3VtbWFyeS13cmFwcGVyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi8qIExpc3Qgb2YgaXRlbXMgaW5zaWRlIHRoZSBzY3JvbGwgYXJlYSAqL1xyXG4uaXRlbXMtbGlzdCB7XHJcbiAgbWF4LWhlaWdodDogMTMwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi8qIEVhY2ggbGluZSBpbiB0aGUgc3VtbWFyeSAqL1xyXG4ub3JkZXItaXRlbSB7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCAjY2NjO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLyogU3VtbWFyeSB0b3RhbHMgbGluZXMgKi9cclxuLnN1bW1hcnktbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzMzMztcclxuICBwYWRkaW5nOiA0cHggMDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLyogRmFsbGJhY2sgd2hlbiBlbXB0eSAqL1xyXG4ub3JkZXJfc3VtbWFyeS5lbXB0eSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBjb2xvcjogI2YxNWIzYTtcclxuICB9XHJcbn1cclxuXHJcbi8qIENoZWNrb3V0IGJhciBzdHlsaW5nICovXHJcbi5jaGVja291dC10b29sYmFyIHtcclxuICAtLXBhZGRpbmctdG9wOiA2cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class CartService {
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
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_popup_order_order_module_ts.js.map