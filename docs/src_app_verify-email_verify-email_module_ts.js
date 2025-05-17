"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_verify-email_verify-email_module_ts"],{

/***/ 8356:
/*!*************************************************************!*\
  !*** ./src/app/verify-email/verify-email-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageRoutingModule": () => (/* binding */ VerifyEmailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.page */ 8236);




const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPage
    }
];
let VerifyEmailPageRoutingModule = class VerifyEmailPageRoutingModule {
};
VerifyEmailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerifyEmailPageRoutingModule);



/***/ }),

/***/ 5938:
/*!*****************************************************!*\
  !*** ./src/app/verify-email/verify-email.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPageModule": () => (/* binding */ VerifyEmailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email-routing.module */ 8356);
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page */ 8236);







let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyEmailPageRoutingModule
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_1__.VerifyEmailPage]
    })
], VerifyEmailPageModule);



/***/ }),

/***/ 8236:
/*!***************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyEmailPage": () => (/* binding */ VerifyEmailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _verify_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-email.page.html?ngResource */ 4429);
/* harmony import */ var _verify_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-email.page.scss?ngResource */ 3393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../authentication-service.service */ 1328);





let VerifyEmailPage = class VerifyEmailPage {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
VerifyEmailPage.ctorParameters = () => [
    { type: _authentication_service_service__WEBPACK_IMPORTED_MODULE_2__.AuthenticationServiceService }
];
VerifyEmailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-verify-email',
        template: _verify_email_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_verify_email_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerifyEmailPage);



/***/ }),

/***/ 3393:
/*!****************************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktZW1haWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4429:
/*!****************************************************************!*\
  !*** ./src/app/verify-email/verify-email.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n        <ion-buttons slot=\"start\">\r\n            <ion-back-button></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>verify-email</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-grid>\r\n        <ion-row>\r\n            <h2>Ionic Firebase Verify Email</h2>\r\n            <p>\r\n                Please check your email and click on the link to verfiy your email address.\r\n            </p>\r\n            <ion-button type=\"submit\" (click)=\"authService.SendVerificationMail()\" expand=\"block\">\r\n                Resend Verification Email\r\n            </ion-button>\r\n        </ion-row>\r\n    </ion-grid>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_verify-email_verify-email_module_ts.js.map