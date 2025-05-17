"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_popup_order-menu_order-menu_module_ts"],{

/***/ 2381:
/*!*********************************************************************!*\
  !*** ./src/app/pages/popup/order-menu/order-menu-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderMenuPageRoutingModule": () => (/* binding */ OrderMenuPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _order_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-menu.page */ 1915);




const routes = [
    {
        path: '',
        component: _order_menu_page__WEBPACK_IMPORTED_MODULE_0__.OrderMenuPage
    }
];
let OrderMenuPageRoutingModule = class OrderMenuPageRoutingModule {
};
OrderMenuPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderMenuPageRoutingModule);



/***/ }),

/***/ 8740:
/*!*************************************************************!*\
  !*** ./src/app/pages/popup/order-menu/order-menu.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderMenuPageModule": () => (/* binding */ OrderMenuPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _order_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-menu-routing.module */ 2381);
/* harmony import */ var _order_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-menu.page */ 1915);







let OrderMenuPageModule = class OrderMenuPageModule {
};
OrderMenuPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderMenuPageRoutingModule
        ],
        declarations: [_order_menu_page__WEBPACK_IMPORTED_MODULE_1__.OrderMenuPage]
    })
], OrderMenuPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_popup_order-menu_order-menu_module_ts.js.map