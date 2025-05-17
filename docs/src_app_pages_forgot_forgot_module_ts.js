"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgot_forgot_module_ts"],{

/***/ 6493:
/*!*******************************************************!*\
  !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageRoutingModule": () => (/* binding */ ForgotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page */ 5792);




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ 3647:
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPageModule": () => (/* binding */ ForgotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-routing.module */ 6493);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page */ 5792);







let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPageRoutingModule
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage]
    })
], ForgotPageModule);



/***/ }),

/***/ 5792:
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPage": () => (/* binding */ ForgotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page.html?ngResource */ 147);
/* harmony import */ var _forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page.scss?ngResource */ 7984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);








let ForgotPage = class ForgotPage {
    constructor(route, fireService, toast, load, fireAuth, auth, alertController) {
        this.route = route;
        this.fireService = fireService;
        this.toast = toast;
        this.load = load;
        this.fireAuth = fireAuth;
        this.auth = auth;
        this.alertController = alertController;
        this.user = {};
        this.type = true;
    }
    ngOnInit() { }
    recovery() {
        this.email = document.getElementById('email').value;
        this.fireService
            .signup({ email: this.user.email, password: this.user.password })
            .then((res) => {
            if (res.user.uid) {
                this.auth.sendPasswordResetEmail(this.email);
                this.showToaster('Please check your email to reset your password!');
                this.route.navigate(['/login']);
            }
        }, (err) => {
            this.warningToaster(err.message);
            console.log(err);
        });
    }
    register() {
        this.route.navigate(['login']);
    }
    /* async resetPassword(){
    this.email = ((document.getElementById("email") as HTMLInputElement).value);
  if(this.email){
    const loading = await this.load.create({
      message: 'Sending reset password link',
      spinner : 'crescent',
      showBackdrop: true,
    });
    loading.present();
  
  
    this.auth.sendPasswordResetEmail(this.email).then(() => {
      loading.dismiss();
      this.showToaster("Please check your email for reset password link");
      this.route.navigate(['/login']);
    }).catch(async (error) => {
      loading.dismiss();
      this.warningToaster(error.message);
    });
  }else{
    this.warningToaster("Please enter email");
  }
  }
  
  
  
  
  
   reset(){
      this.email = ((document.getElementById("email") as HTMLInputElement).value);
      console.log(this.email);
      this.auth.sendPasswordResetEmail(this.email).then(userCredentials => {
        console.log(userCredentials);
          this.showToaster("Password reset email sent to your email: " + this.email);
          this.route.navigate(['/login']);
      }).catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        this.warningToaster(errorMessage);
        console.log(err);
  
      })
    }*/
    warningToaster(message) {
        this.toast
            .create({
            message,
            color: 'danger',
            duration: 4000,
        })
            .then((toastData) => toastData.present());
    }
    showToaster(message) {
        this.toast
            .create({
            message,
            color: 'success',
            duration: 4000,
        })
            .then((toastData) => toastData.present());
    }
};
ForgotPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__.FireserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
ForgotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgot',
        template: _forgot_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgot_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotPage);



/***/ }),

/***/ 7984:
/*!**********************************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "img {\n  height: 50%;\n  width: 50%;\n  align-content: center;\n}\n\nion-content {\n  --background: url(\"/assets/img/bckgrd.jpg\") repeat 45% 140%;\n  min-height: 100%;\n}\n\nion-content .upper {\n  width: 100%;\n  height: 100px;\n  padding-top: 25px;\n}\n\nion-content .upper .icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content .upper .icon ion-icon {\n  font-size: 100px;\n  color: #fff;\n}\n\nion-content .upper #login {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n}\n\nion-content .middle {\n  padding: 20px;\n}\n\nion-content .middle .box {\n  border-radius: 10px;\n  height: auto;\n  background: #fff;\n  padding: 20px;\n}\n\nion-content .middle p {\n  color: gray;\n  text-align: center;\n}\n\nion-content .middle ion-item ion-icon {\n  color: gold;\n}\n\nion-content .middle #forgetPassword {\n  font-size: 14px;\n  font-weight: bold;\n  color: #2c2ccc;\n  text-align: end;\n}\n\nion-content .middle .btn {\n  display: flex;\n  justify-content: center;\n}\n\nion-content .middle .btn ion-button {\n  --background: #20573d;\n}\n\nion-content .socialMedia {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n  font-size: 34px;\n  font-weight: bold;\n  color: #2c2ccc;\n}\n\nion-content .socialMedia ion-icon {\n  padding-right: 10px;\n}\n\nion-content .socialMedia ion-icon:nth-child(1) {\n  color: #4267B2;\n}\n\nion-content .socialMedia ion-icon:nth-child(2) {\n  color: #1DA1F2;\n}\n\nion-content .socialMedia ion-icon:nth-child(3) {\n  color: #4267B2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyREFBQTtFQUVBLGdCQUFBO0FBQUo7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBQVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVaOztBQURZO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBR2hCOztBQUFRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRVo7O0FBQ0k7RUFDSSxhQUFBO0FBQ1I7O0FBQVE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUVaOztBQUNZO0VBQ0ksV0FBQTtBQUNoQjs7QUFFUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQVo7O0FBRVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFBWjs7QUFDWTtFQUNJLHFCQUFBO0FBQ2hCOztBQUdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFFUTtFQUNJLG1CQUFBO0FBQVo7O0FBRVE7RUFDSSxjQUFBO0FBQVo7O0FBRVE7RUFDSSxjQUFBO0FBQVo7O0FBRVE7RUFDSSxjQUFBO0FBQVoiLCJmaWxlIjoiZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iY2tncmQuanBnJykgcmVwZWF0IDQ1JSAxNDAlO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6ICNmZmIwMDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgLnVwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAjbG9naW4ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5taWRkbGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI2ZvcmdldFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig0NCwgNDQsIDIwNCk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzIwNTczZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWxNZWRpYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogcmdiKDQ0LCA0NCwgMjA0KTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDI2N0IyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBjb2xvcjogIzFEQTFGMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb246bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0MjY3QjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 147:
/*!**********************************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n    <div class=\"upper\">\r\n        <div class=\"icon\">\r\n            <ion-icon name=\"construct\"></ion-icon>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"middle\">\r\n        <div class=\"box\">\r\n            <form #loginForm=\"ngForm\">\r\n                <p>Reset Your Password</p>\r\n\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Email Address</ion-label>\r\n                    <ion-input type=\"email\" Placeholder=\"Email\" id=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.username\" required email></ion-input>\r\n                    <ion-icon class=\"ion-align-self-center\" slot=\"end\" name=\"mail\"></ion-icon>\r\n                </ion-item>\r\n\r\n                <div class=\"btn\">\r\n                    <ion-button (click)=\"recovery()\">Reset</ion-button>\r\n                </div>\r\n\r\n            </form>\r\n            <div align=\"center\">\r\n                <img src=\"../assets/img/lock2.gif\" />\r\n                <div class=\"socialMedia\">\r\n                    <ion-icon slot=\"end\" name=\"logo-facebook\"></ion-icon>\r\n                    <ion-icon slot=\"end\" name=\"logo-twitter\"></ion-icon>\r\n                    <ion-icon slot=\"end\" name=\"logo-google\"></ion-icon>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <p (click)=\"register()\">Click me to create an account</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n<!--<ion-content>\r\n  <div class=\"upper\">\r\n      <div class=\"icon\">\r\n          <ion-icon name=\"construct\"></ion-icon>\r\n      </div>\r\n      <p id=\"login\" style=\"color:azure\">HARDWARE STORE APP</p>\r\n  </div>\r\n\r\n  <div class=\"middle\">\r\n      <div class=\"box\">\r\n          <form #loginForm=\"ngForm\">\r\n              <p>Please login to your account</p>\r\n\r\n              <ion-item>\r\n                  <ion-label position=\"floating\">Email Address</ion-label>\r\n                  <ion-input type=\"email\" Placeholder=\"Email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"login.email\" required email></ion-input>\r\n                  <ion-icon class=\"ion-align-self-center\" slot=\"end\" name=\"mail\"></ion-icon>\r\n              </ion-item>\r\n\r\n              <div *ngIf=\"email.invalid && email.touched\">\r\n                  <ion-text color=\"danger text-center\">\r\n                      <h4 style=\"padding-left: 20px; margin-top: 10px;\">Please enter email address</h4>\r\n                  </ion-text>\r\n              </div>\r\n\r\n              <ion-item>\r\n                  <ion-label position=\"floating\">Password</ion-label>\r\n                  <ion-input [type]=\"type ? 'password' : 'text'\" Placeholder=\"Password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"login.password\" required password></ion-input>\r\n                  <ion-icon class=\"ion-align-self-center\" slot=\"end\" name=\"eye\" (click)=\"changeType()\"></ion-icon>\r\n              </ion-item>\r\n\r\n              <div *ngIf=\"password.invalid && password.touched\">\r\n                  <ion-text color=\"danger text-center\">\r\n                      <h4 style=\"padding-left: 20px; margin-top: 10px;\">Please enter password</h4>\r\n                  </ion-text>\r\n              </div>\r\n\r\n              <p id=\"forgetPassword\" (click)=\"goToForget()\"> Forgot Password</p>\r\n\r\n              <div class=\"btn\">\r\n                  <ion-button (click)=\"goToHome()\" [disabled]=\"loginForm.invalid\">LOGIN</ion-button>\r\n              </div>\r\n\r\n          </form>\r\n          <div align=\"center\">\r\n              <img src=\"../assets/img/lock2.gif\" />\r\n              <div class=\"socialMedia\">\r\n                  <ion-icon slot=\"end\" name=\"logo-facebook\" (click)=\"changeType()\"></ion-icon>\r\n                  <ion-icon slot=\"end\" name=\"logo-twitter\" (click)=\"changeType()\"></ion-icon>\r\n                  <ion-icon slot=\"end\" name=\"logo-google\" (click)=\"changeType()\"></ion-icon>\r\n              </div>\r\n\r\n          </div>\r\n          <p (click)=\"register()\">Click me to create an account</p>\r\n      </div>\r\n\r\n  </div>\r\n</ion-content>-->";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot_forgot_module_ts.js.map