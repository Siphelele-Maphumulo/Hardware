"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_cart-modal_cart-modal_module_ts"],{

/***/ 6751:
/*!***************************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPageRoutingModule": () => (/* binding */ CartModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-modal.page */ 6699);




const routes = [
    {
        path: '',
        component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_0__.CartModalPage
    }
];
let CartModalPageRoutingModule = class CartModalPageRoutingModule {
};
CartModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartModalPageRoutingModule);



/***/ }),

/***/ 7828:
/*!*******************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPageModule": () => (/* binding */ CartModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-modal-routing.module */ 6751);
/* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-modal.page */ 6699);







let CartModalPageModule = class CartModalPageModule {
};
CartModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartModalPageRoutingModule
        ],
        declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_1__.CartModalPage]
    })
], CartModalPageModule);



/***/ }),

/***/ 6699:
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPage": () => (/* binding */ CartModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cart_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-modal.page.html?ngResource */ 135);
/* harmony import */ var _cart_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-modal.page.scss?ngResource */ 7543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let CartModalPage = class CartModalPage {
    constructor() { }
    ngOnDestroy() {
        throw new Error('Method not implemented.');
    }
    ngOnInit() { }
};
CartModalPage.ctorParameters = () => [];
CartModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-cart-modal',
        template: _cart_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartModalPage);



/***/ }),

/***/ 7543:
/*!******************************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LW1vZGFsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 135:
/*!******************************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_cart-modal_cart-modal_module_ts.js.map