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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot.page */ 5792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPage
    }
];
class ForgotPageRoutingModule {
}
ForgotPageRoutingModule.ɵfac = function ForgotPageRoutingModule_Factory(t) { return new (t || ForgotPageRoutingModule)(); };
ForgotPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ForgotPageRoutingModule });
ForgotPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ForgotPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-routing.module */ 6493);
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot.page */ 5792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class ForgotPageModule {
}
ForgotPageModule.ɵfac = function ForgotPageModule_Factory(t) { return new (t || ForgotPageModule)(); };
ForgotPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ForgotPageModule });
ForgotPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ForgotPageModule, { declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _forgot_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPageRoutingModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);






class ForgotPage {
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
}
ForgotPage.ɵfac = function ForgotPage_Factory(t) { return new (t || ForgotPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_0__.FireserviceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController)); };
ForgotPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgotPage, selectors: [["app-forgot"]], decls: 28, vars: 1, consts: [[1, "upper"], [1, "icon"], ["name", "construct"], [1, "middle"], [1, "box"], ["loginForm", "ngForm"], ["position", "floating"], ["type", "email", "Placeholder", "Email", "id", "email", "name", "email", "required", "", "email", "", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["slot", "end", "name", "mail", 1, "ion-align-self-center"], [1, "btn"], [3, "click"], ["align", "center"], ["src", "../assets/img/lock2.gif"], [1, "socialMedia"], ["slot", "end", "name", "logo-facebook"], ["slot", "end", "name", "logo-twitter"], ["slot", "end", "name", "logo-google"]], template: function ForgotPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content")(1, "div", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "form", null, 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Reset Your Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item")(11, "ion-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ForgotPage_Template_ion_input_ngModelChange_13_listener($event) { return ctx.user.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10)(17, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPage_Template_ion_button_click_17_listener() { return ctx.recovery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-icon", 15)(23, "ion-icon", 16)(24, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgotPage_Template_p_click_26_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Click me to create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user.username);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton], styles: ["img[_ngcontent-%COMP%] {\n  height: 50%;\n  width: 50%;\n  align-content: center;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: url(\"/assets/img/bckgrd.jpg\") repeat 45% 140%;\n  min-height: 100%;\n}\n\nion-content[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  padding-top: 25px;\n}\n\nion-content[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nion-content[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 100px;\n  color: #fff;\n}\n\nion-content[_ngcontent-%COMP%]   .upper[_ngcontent-%COMP%]   #login[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n}\n\nion-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\nion-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  height: auto;\n  background: #fff;\n  padding: 20px;\n}\n\nion-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: gray;\n  text-align: center;\n}\n\nion-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: gold;\n}\n\nion-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   #forgetPassword[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  color: #2c2ccc;\n  text-align: end;\n}\n\nion-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\nion-content[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: #20573d;\n}\n\nion-content[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n  font-size: 34px;\n  font-weight: bold;\n  color: #2c2ccc;\n}\n\nion-content[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\nion-content[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:nth-child(1) {\n  color: #4267B2;\n}\n\nion-content[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:nth-child(2) {\n  color: #1DA1F2;\n}\n\nion-content[_ngcontent-%COMP%]   .socialMedia[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:nth-child(3) {\n  color: #4267B2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSwyREFBQTtFQUVBLGdCQUFBO0FBQUo7O0FBQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBQVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVaOztBQURZO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBR2hCOztBQUFRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRVo7O0FBQ0k7RUFDSSxhQUFBO0FBQ1I7O0FBQVE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFFWjs7QUFBUTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQUVaOztBQUNZO0VBQ0ksV0FBQTtBQUNoQjs7QUFFUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQVo7O0FBRVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFBWjs7QUFDWTtFQUNJLHFCQUFBO0FBQ2hCOztBQUdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFFUTtFQUNJLG1CQUFBO0FBQVo7O0FBRVE7RUFDSSxjQUFBO0FBQVo7O0FBRVE7RUFDSSxjQUFBO0FBQVo7O0FBRVE7RUFDSSxjQUFBO0FBQVoiLCJmaWxlIjoiZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltZy9iY2tncmQuanBnJykgcmVwZWF0IDQ1JSAxNDAlO1xyXG4gICAgLy8tLWJhY2tncm91bmQ6ICNmZmIwMDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgLnVwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAjbG9naW4ge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5taWRkbGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGdvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgI2ZvcmdldFBhc3N3b3JkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig0NCwgNDQsIDIwNCk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogIzIwNTczZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zb2NpYWxNZWRpYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogcmdiKDQ0LCA0NCwgMjA0KTtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDI2N0IyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBjb2xvcjogIzFEQTFGMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb246bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0MjY3QjI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgot_forgot_module_ts.js.map