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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page */ 7130);




const routes = [
    {
        path: '',
        component: _orders_page__WEBPACK_IMPORTED_MODULE_0__.OrdersPage
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrdersPageRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders-routing.module */ 6977);
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page */ 7130);







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrdersPageRoutingModule
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_1__.OrdersPage]
    })
], OrdersPageModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orders.page.html?ngResource */ 5726);
/* harmony import */ var _orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orders.page.scss?ngResource */ 5030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _popup_order_menu_order_menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../popup/order-menu/order-menu.page */ 1915);






let OrdersPage = class OrdersPage {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _popup_order_menu_order_menu_page__WEBPACK_IMPORTED_MODULE_2__.OrderMenuPage,
                event: ev,
                mode: 'ios',
                translucent: true
            });
            yield popover.present();
        });
    }
};
OrdersPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.PopoverController }
];
OrdersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-orders',
        template: _orders_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_orders_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OrdersPage);



/***/ }),

/***/ 5030:
/*!**********************************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-header ion-toolbar {\n  --background: var(--ion-color-danger);\n}\nion-header ion-toolbar ion-title {\n  color: white;\n  font-weight: bold;\n}\nion-header ion-toolbar ion-icon {\n  font-size: 24px;\n  color: white;\n}\nion-header ion-toolbar .badge-position {\n  position: absolute;\n  top: 5px;\n  right: 0;\n  font-size: 10px;\n  z-index: 10;\n}\nion-header ion-toolbar .profile-avatar {\n  width: 35px;\n  height: 35px;\n  margin-left: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n}\nion-header ion-toolbar .profile-avatar img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\nion-content {\n  --background: #f9f9f9;\n}\nion-content .top-segment {\n  padding: 10px;\n}\nion-content .top-segment ion-segment {\n  border: 1px solid #22eeca;\n}\nion-content .top-segment ion-segment ion-segment-button {\n  --background-checked: #22eeca;\n  --color-checked: #fff;\n  font-weight: 500;\n}\nion-content .order-date {\n  padding: 10px 20px;\n  color: #888;\n  font-weight: bold;\n}\nion-content .order-box {\n  background: white;\n  margin: 10px;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 6px;\n  display: flex;\n  gap: 10px;\n  padding: 15px;\n}\nion-content .order-image img {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 6px;\n}\nion-content .order-info {\n  flex: 1;\n}\nion-content .order-info .order-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #f15b3a;\n}\nion-content .order-info .order-title h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n}\nion-content .order-info .order-title ion-icon {\n  font-size: 18px;\n  color: #888;\n}\nion-content .order-info .order-id {\n  font-size: 13px;\n  color: #666;\n  margin: 4px 0;\n}\nion-content .order-info .order-amount-status {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nion-content .order-info .order-amount-status h3 {\n  margin: 0;\n  color: #333;\n  font-size: 16px;\n}\nion-content .order-info .order-amount-status p {\n  font-size: 13px;\n  padding: 5px 10px;\n  border-radius: 4px;\n  margin: 0;\n  text-align: center;\n}\nion-content .order-info .order-actions {\n  margin-top: 10px;\n}\nion-content .order-info .order-actions .record-btn {\n  background: #f15b3a;\n  color: white;\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n}\nion-content .quantity-controls {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 10px;\n}\nion-content .quantity-controls button {\n  background: none;\n  border: 1px solid #f15b3a;\n  color: #f15b3a;\n  font-size: 18px;\n  padding: 4px 8px;\n  border-radius: 4px;\n  cursor: pointer;\n}\nion-content .quantity-controls .quantity {\n  font-weight: bold;\n  font-size: 16px;\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQ0FBQTtBQUFKO0FBQ0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRE47QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRk47QUFLSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFITjtBQVFBO0VBQ0UscUJBQUE7QUFMRjtBQU9FO0VBQ0UsYUFBQTtBQUxKO0FBTUk7RUFDRSx5QkFBQTtBQUpOO0FBS007RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQVBKO0FBVUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVdFO0VBQ0UsT0FBQTtBQVRKO0FBV0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFUTjtBQVdNO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRSO0FBWU07RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVZSO0FBY0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFaTjtBQWVJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWVNO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBYlI7QUFnQk07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQWRSO0FBa0JJO0VBQ0UsZ0JBQUE7QUFoQk47QUFrQk07RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFoQlI7QUFzQkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFwQko7QUFzQkk7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXBCTjtBQXVCSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFyQk4iLCJmaWxlIjoib3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICBpb24tdGl0bGUge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhZGdlLXBvc2l0aW9uIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtYXZhdGFyIHtcclxuICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvZmlsZS1hdmF0YXIgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG5cclxuICAudG9wLXNlZ21lbnQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGlvbi1zZWdtZW50IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzIyZWVjYTtcclxuICAgICAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogIzIyZWVjYTtcclxuICAgICAgICAtLWNvbG9yLWNoZWNrZWQ6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm9yZGVyLWRhdGUge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC5vcmRlci1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDgpIDBweCA0cHggNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAub3JkZXItaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICAub3JkZXItaW5mbyB7XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIC5vcmRlci10aXRsZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmMTViM2E7XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm9yZGVyLWlkIHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBjb2xvcjogIzY2NjtcclxuICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItYW1vdW50LXN0YXR1cyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAub3JkZXItYWN0aW9ucyB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgICAucmVjb3JkLWJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxNWIzYTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE9wdGlvbmFsOiBxdWFudGl0eSBjb250cm9sc1xyXG4gIC5xdWFudGl0eS1jb250cm9scyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxNWIzYTtcclxuICAgICAgY29sb3I6ICNmMTViM2E7IC8vIFRleHQgY29sb3IgZm9yICsgYW5kIC1cclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucXVhbnRpdHkge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5726:
/*!**********************************************************!*\
  !*** ./src/app/pages/orders/orders.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"danger\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button\r\n        color=\"light\"\r\n        defaultHref=\"search-chef\"\r\n      ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Orders</ion-title>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon name=\"notifications\" slot=\"icon-only\"></ion-icon>\r\n        <ion-badge color=\"primary\" class=\"badge-position\">2</ion-badge>\r\n      </ion-button>\r\n\r\n      <ion-button fill=\"clear\">\r\n        <ion-icon name=\"cart\" slot=\"icon-only\"></ion-icon>\r\n        <ion-badge color=\"primary\" class=\"badge-position\">5</ion-badge>\r\n      </ion-button>\r\n\r\n      <ion-avatar slot=\"end\" class=\"profile-avatar\">\r\n        <img src=\"../../../assets/img/Profile.png\" />\r\n      </ion-avatar>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"top-segment\">\r\n    <ion-segment value=\"Current\">\r\n      <ion-segment-button value=\"Current\">\r\n        <ion-label>Current</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"Past orders\">\r\n        <ion-label>Past Orders</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </div>\r\n\r\n  <div *ngFor=\"let order of orders\">\r\n    <p class=\"order-date\">{{ order.date }}</p>\r\n\r\n    <div class=\"order-box\" *ngFor=\"let Singleorder of order.order\">\r\n      <div class=\"order-image\">\r\n        <img src=\"../assets/tools/{{Singleorder.image}}\" />\r\n      </div>\r\n\r\n      <div class=\"order-info\">\r\n        <div class=\"order-title\">\r\n          <h3>{{ Singleorder.title }}</h3>\r\n          <ion-icon\r\n            name=\"ellipsis-vertical-outline\"\r\n            (click)=\"presentPopover($event)\"\r\n          ></ion-icon>\r\n        </div>\r\n\r\n        <p class=\"order-id\">Order ID: #{{ Singleorder.transId }}</p>\r\n\r\n        <div class=\"order-amount-status\">\r\n          <h3>R{{ Singleorder.amount }}</h3>\r\n          <p\r\n            [ngStyle]=\"{\r\n                'color': Singleorder.status === 'CONFIRM' ? 'green' : 'red',\r\n                'background': Singleorder.status === 'CONFIRM' ? '#e4f4eb' : '#f7d0c7'\r\n              }\"\r\n          >\r\n            {{ Singleorder.status }}\r\n          </p>\r\n        </div>\r\n\r\n        <div class=\"order-actions\">\r\n          <button class=\"record-btn\" type=\"submit\">Record</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_orders_orders_module_ts.js.map