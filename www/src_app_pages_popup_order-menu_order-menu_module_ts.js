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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _order_menu_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-menu.page */ 1915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _order_menu_page__WEBPACK_IMPORTED_MODULE_0__.OrderMenuPage
    }
];
class OrderMenuPageRoutingModule {
}
OrderMenuPageRoutingModule.ɵfac = function OrderMenuPageRoutingModule_Factory(t) { return new (t || OrderMenuPageRoutingModule)(); };
OrderMenuPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OrderMenuPageRoutingModule });
OrderMenuPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OrderMenuPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _order_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-menu-routing.module */ 2381);
/* harmony import */ var _order_menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-menu.page */ 1915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class OrderMenuPageModule {
}
OrderMenuPageModule.ɵfac = function OrderMenuPageModule_Factory(t) { return new (t || OrderMenuPageModule)(); };
OrderMenuPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OrderMenuPageModule });
OrderMenuPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _order_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderMenuPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OrderMenuPageModule, { declarations: [_order_menu_page__WEBPACK_IMPORTED_MODULE_1__.OrderMenuPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _order_menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderMenuPageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_popup_order-menu_order-menu_module_ts.js.map