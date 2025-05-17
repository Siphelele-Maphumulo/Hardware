"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_orders_orders_module_ts"],{

/***/ 6977:
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageRoutingModule": () => (/* binding */ OrdersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page */ 7130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_0__.OrdersPage
    }
];
class OrdersPageRoutingModule {
}
OrdersPageRoutingModule.ɵfac = function OrdersPageRoutingModule_Factory(t) { return new (t || OrdersPageRoutingModule)(); };
OrdersPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrdersPageRoutingModule });
OrdersPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrdersPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 7066:
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPageModule": () => (/* binding */ OrdersPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 6977);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page */ 7130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class OrdersPageModule {
}
OrdersPageModule.ɵfac = function OrdersPageModule_Factory(t) { return new (t || OrdersPageModule)(); };
OrdersPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OrdersPageModule });
OrdersPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrdersPageModule, { declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_1__.OrdersPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule] }); })();


/***/ }),

/***/ 7130:
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersPage": () => (/* binding */ OrdersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _popup_order_menu_order_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../popup/order-menu/order-menu.page */ 1915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function (a0, a1) { return { "color": a0, "background": a1 }; };
function OrdersPage_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19)(4, "div", 20)(5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrdersPage_div_26_div_3_Template_ion_icon_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r4.presentPopover($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 23)(11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 25)(16, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Record");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const Singleorder_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "../assets/tools/", Singleorder_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Singleorder_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Order ID: #", Singleorder_r3.transId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("R", Singleorder_r3.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, Singleorder_r3.status === "CONFIRM" ? "green" : "red", Singleorder_r3.status === "CONFIRM" ? "#e4f4eb" : "#f7d0c7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", Singleorder_r3.status, " ");
} }
function OrdersPage_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrdersPage_div_26_div_3_Template, 18, 9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", order_r1.order);
} }
class OrdersPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
        this.orders = [{
                "date": "Today, 16 Jun 2022",
                "order": [{
                        "id": "01",
                        "image": "001.jpg",
                        "title": "Mozzarella",
                        "amount": "34.10",
                        "transId": "11741980",
                        "time": "20 Min",
                        "status": "CONFIRM",
                    },
                    {
                        "id": "02",
                        "image": "002.jpg",
                        "title": "switch cover",
                        "amount": "45,99",
                        "transId": "58741980",
                        "time": "20 Min",
                        "status": "CANCELLED",
                    },
                    {
                        "id": "06",
                        "image": "006.jpg",
                        "title": "Generator",
                        "amount": "3999,99",
                        "transId": "23081980",
                        "time": "05 Min",
                        "status": "CONFIRM",
                    }
                ]
            },
            {
                "date": "30 Dec 2022",
                "order": [{
                        "id": "07",
                        "image": "007.jpg",
                        "title": "Geyser",
                        "amount": "4999,99",
                        "transId": "58745212",
                        "time": "26 Min",
                        "status": "CONFIRM",
                    },
                    {
                        "id": "03",
                        "image": "003.jpg",
                        "title": "Wheel Barrow",
                        "amount": "899,99",
                        "transId": "23081980",
                        "time": "10 Min",
                        "status": "CANCELLED",
                    }
                ]
            }
        ];
    }
    ngOnInit() {
    }
    segmentChanged(ev) {
        console.log(ev.detail.value);
    }
    presentPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popup_order_menu_order_menu_page__WEBPACK_IMPORTED_MODULE_0__.OrderMenuPage,
                event: ev,
                mode: 'ios',
                translucent: true
            });
            yield popover.present();
        });
    }
}
OrdersPage.ɵfac = function OrdersPage_Factory(t) { return new (t || OrdersPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.PopoverController)); };
OrdersPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrdersPage, selectors: [["app-orders"]], decls: 27, vars: 1, consts: [["color", "danger"], ["slot", "start"], ["color", "light", "defaultHref", "search-chef"], ["slot", "end"], ["fill", "clear"], ["name", "notifications", "slot", "icon-only"], ["color", "primary", 1, "badge-position"], ["name", "cart", "slot", "icon-only"], ["slot", "end", 1, "profile-avatar"], ["src", "../../../assets/img/Profile.png"], [1, "top-segment"], ["value", "Current"], ["value", "Past orders"], [4, "ngFor", "ngForOf"], [1, "order-date"], ["class", "order-box", 4, "ngFor", "ngForOf"], [1, "order-box"], [1, "order-image"], [3, "src"], [1, "order-info"], [1, "order-title"], ["name", "ellipsis-vertical-outline", 3, "click"], [1, "order-id"], [1, "order-amount-status"], [3, "ngStyle"], [1, "order-actions"], ["type", "submit", 1, "record-btn"]], template: function OrdersPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar", 0)(2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-buttons", 3)(7, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-badge", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-avatar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-content")(18, "div", 10)(19, "ion-segment", 11)(20, "ion-segment-button", 11)(21, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Current");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-segment-button", 12)(24, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Past Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, OrdersPage_div_26_Template, 4, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orders);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle], styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: var(--ion-color-danger);\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .badge-position[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  font-size: 10px;\n  z-index: 10;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 35px;\n  margin-left: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .profile-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: #f9f9f9;\n}\nion-content[_ngcontent-%COMP%]   .top-segment[_ngcontent-%COMP%] {\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%]   .top-segment[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%] {\n  border: 1px solid #22eeca;\n}\nion-content[_ngcontent-%COMP%]   .top-segment[_ngcontent-%COMP%]   ion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  --background-checked: #22eeca;\n  --color-checked: #fff;\n  font-weight: 500;\n}\nion-content[_ngcontent-%COMP%]   .order-date[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  color: #888;\n  font-weight: bold;\n}\nion-content[_ngcontent-%COMP%]   .order-box[_ngcontent-%COMP%] {\n  background: white;\n  margin: 10px;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 6px;\n  display: flex;\n  gap: 10px;\n  padding: 15px;\n}\nion-content[_ngcontent-%COMP%]   .order-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 6px;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #f15b3a;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #888;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-id[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  margin: 4px 0;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-amount-status[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-amount-status[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 16px;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-amount-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 5px 10px;\n  border-radius: 4px;\n  margin: 0;\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-actions[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nion-content[_ngcontent-%COMP%]   .order-info[_ngcontent-%COMP%]   .order-actions[_ngcontent-%COMP%]   .record-btn[_ngcontent-%COMP%] {\n  background: #f15b3a;\n  color: white;\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n}\nion-content[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\nion-content[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #f15b3a;\n  color: #f15b3a;\n  font-size: 18px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nion-content[_ngcontent-%COMP%]   .quantity-controls[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQ0FBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRE47QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRk47QUFLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFITjtBQVFBO0VBQ0UscUJBQUE7QUFMRjtBQU9FO0VBQ0UsYUFBQTtBQUxKO0FBTUk7RUFDRSx5QkFBQTtBQUpOO0FBS007RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQVBKO0FBVUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVdFO0VBQ0UsT0FBQTtBQVRKO0FBV0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFUTjtBQVdNO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRSO0FBWU07RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVZSO0FBY0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFaTjtBQWVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBYlI7QUFnQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWRSO0FBa0JJO0VBQ0UsZ0JBQUE7QUFoQk47QUFrQk07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFoQlI7QUFzQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFwQko7QUFzQkk7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXBCTjtBQXVCSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFyQk4iLCJmaWxlIjoib3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhZGdlLXBvc2l0aW9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1hdmF0YXIgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG5cclxuICAudG9wLXNlZ21lbnQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyZWVjYTtcclxuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzIyZWVjYTtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWRhdGUge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5vcmRlci1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCA0cHggNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAub3JkZXItaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICAub3JkZXItaW5mbyB7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIC5vcmRlci10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmMTViM2E7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyLWlkIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItYW1vdW50LXN0YXR1cyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItYWN0aW9ucyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAucmVjb3JkLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxNWIzYTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE9wdGlvbmFsOiBxdWFudGl0eSBjb250cm9sc1xyXG4gIC5xdWFudGl0eS1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxNWIzYTtcclxuICAgICAgY29sb3I6ICNmMTViM2E7IC8vIFRleHQgY29sb3IgZm9yICsgYW5kIC1cclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHkge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_orders_orders_module_ts.js.map