"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6552);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6552);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6552:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var src_app_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication-service.service */ 1328);









let LoginPage = class LoginPage {
    constructor(route, fireService, toast, load, afAuth, ngFireAuth, alertController, authService) {
        this.route = route;
        this.fireService = fireService;
        this.toast = toast;
        this.load = load;
        this.afAuth = afAuth;
        this.ngFireAuth = ngFireAuth;
        this.alertController = alertController;
        this.authService = authService;
        this.login = {
            email: '',
            password: '',
        };
        this.user = {};
        this.type = true;
    }
    ngOnInit() { }
    recover() {
        this.route.navigate(['/forgot']);
    }
    navigateWelcome() {
        this.validate();
    }
    changeType() {
        this.type = !this.type;
    }
    gotoHome() { }
    gmailLogin() { }
    twitterLogin() { }
    faceBookLogin() { }
    register() {
        this.route.navigate(['signup']);
    }
    validate() {
        if (this.user.username == null) {
            this.warningToaster('Please insert Email');
            this.userDis = 'Please insert Username!';
            return false;
        }
        else if (this.user.password == null) {
            this.warningToaster('Please insert Password');
            this.userDis = '';
            this.userPass = 'Please insert Password!';
            return false;
        }
        else {
            let loader = this.load.create({
                message: 'Almost',
            });
            this.logging();
        }
    }
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
    logging() {
        this.fireService
            .loginWithEmail({
            email: this.user.username,
            password: this.user.password,
        })
            .then((res) => {
            if (res.user) {
                // Check if the user is email verified after the login attempt
                res.user.reload().then(() => {
                    var _a;
                    if (res.user.emailVerified) {
                        console.log(res);
                        // Proceed only if the user has a valid UID and email is verified
                        if ((_a = res.user) === null || _a === void 0 ? void 0 : _a.uid) {
                            // Fetch user details from Firestore
                            this.fireService.getDetails({ uid: res.user.uid }).subscribe((userDetails) => {
                                console.log(userDetails);
                                // Proceed with the user details, and open the appropriate page
                                this.openDetailsWithState();
                                // Clear sensitive data for security purposes
                                this.userPass = '';
                                this.userDis = '';
                                // Show a welcome message once the details are successfully retrieved
                                this.showToaster('Welcome ' + userDetails['name']);
                            }, (error) => {
                                // Handle Firestore errors
                                this.warningToaster('Error fetching user details');
                                console.error(error);
                            });
                        }
                    }
                    else {
                        // If the email is not verified, show an alert
                        window.alert('Email is not verified');
                    }
                });
            }
        }, (err) => {
            // Handle authentication errors
            this.warningToaster(err.message);
            console.log(err);
        });
    }
    btnClicked() {
        this.data = [];
        this.data[0] = document.getElementById('username').value;
        this.data[1] = document.getElementById('password').value;
        this.route.navigate(['home/' + this.data]);
        this.showToaster(this.data[0] + ' logged in successfully!');
    }
    openDetailsWithState() {
        const name = document.getElementById('username')
            .value;
        const password = document.getElementById('password')
            .value;
        this.data = [this.me];
        const navigationExtras = {
            state: {
                user: this.data,
            },
        };
        this.route.navigate(['home'], navigationExtras);
    }
    openLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.load.create({
                message: 'Please Wait ...',
                duration: 2000,
            });
            yield loading.present();
        });
    }
    closeLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.load.dismiss();
        });
    }
    presentToast(message, position, duration) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toast.create({
                message,
                duration,
                position,
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__.FireserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_authentication_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationServiceService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".home-background {\n  --background: url(\"/assets/img/bckgrd.jpg\") no-repeat center center / cover;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n.home-background::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 50%);\n  z-index: 0;\n}\n\n.middle {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n}\n\n.box {\n  width: 90%;\n  max-width: 400px;\n  background: rgba(255, 255, 255, 0.534);\n  padding: 2rem;\n  border-radius: 16px;\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2) inset, 0 0 30px rgba(255, 255, 255, 0.3) inset;\n  position: relative;\n  overflow: hidden;\n}\n\n.box::after {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.4) 45%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);\n  transform: rotate(30deg);\n  animation: shine 6s infinite;\n}\n\n@keyframes shine {\n  0% {\n    transform: translateX(-100%) rotate(30deg);\n  }\n  100% {\n    transform: translateX(100%) rotate(30deg);\n  }\n}\n\n.login-header {\n  font-weight: 600;\n  font-size: 22px;\n  text-align: center;\n  margin-bottom: 1.5rem;\n  color: #333;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.glass-input ion-item {\n  --background: rgba(255, 255, 255, 0.438);\n  --highlight-color-focused: rgba(56, 128, 255, 0.4);\n  --border-color: rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  padding: 0 12px;\n  margin-bottom: 1.2rem;\n  --color: #333;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  transition: all 0.3s ease;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);\n}\n\n.glass-input ion-item:hover {\n  --background: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.glass-input ion-label {\n  color: #555;\n  font-weight: 500;\n}\n\n.glass-input ion-input {\n  --color: #333;\n  --padding-end: 8px;\n}\n\n.glass-input ion-icon {\n  color: #555;\n  transition: all 0.3s ease;\n}\n\n.glass-input ion-item.item-has-focus ion-icon {\n  color: #3880ff;\n}\n\n.password-toggle-icon {\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n\n.password-toggle-icon:hover {\n  transform: scale(1.1);\n  color: #3880ff;\n}\n\n#forgetPassword {\n  color: #3880ff;\n  cursor: pointer;\n  text-align: right;\n  font-size: 14px;\n  font-weight: 500;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);\n  transition: all 0.3s ease;\n}\n\n#forgetPassword:hover {\n  text-decoration: underline;\n  color: #2a62c4;\n}\n\n.btn {\n  margin-top: 1.8rem;\n}\n\n.btn ion-button {\n  --border-radius: 10px;\n  --box-shadow: 0 4px 12px rgba(56, 128, 255, 0.3);\n  --transition: all 0.3s ease;\n  height: 48px;\n  font-weight: 600;\n}\n\n.btn ion-button:hover {\n  --box-shadow: 0 6px 16px rgba(56, 128, 255, 0.4);\n  transform: translateY(-2px);\n}\n\n.socialMedia {\n  margin: 1.5rem 0;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n}\n\n.socialMedia ion-icon {\n  font-size: 28px;\n  color: #555;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.5));\n  padding: 8px;\n  background: rgba(255, 255, 255, 0.7);\n  border-radius: 50%;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.socialMedia ion-icon:hover {\n  transform: translateY(-3px) scale(1.1);\n  color: #3880ff;\n  background: rgba(255, 255, 255, 0.9);\n  box-shadow: 0 4px 8px rgba(56, 128, 255, 0.2);\n}\n\n.register-link p {\n  text-align: center;\n  margin-top: 1.5rem;\n  cursor: pointer;\n  color: #3880ff;\n  font-weight: 500;\n  transition: all 0.3s ease;\n}\n\n.register-link p:hover {\n  text-decoration: underline;\n  color: #2a62c4;\n}\n\n.app-footer {\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  margin-top: 2rem;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n  font-size: 18px;\n}\n\n.app-footer ion-icon {\n  vertical-align: middle;\n  margin-left: 8px;\n  color: #ffc409;\n  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.3));\n}\n\n/* Lock image styling */\n\n.middle img {\n  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));\n  transition: all 0.5s ease;\n  margin-bottom: 1rem;\n}\n\n.middle img:hover {\n  transform: rotate(-10deg) scale(1.05);\n  filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));\n}\n/*# sourceMappingURL=data:application/json;base64,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LHFDQUFBO0VBQ0Esa0RBQUE7QUFiRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1iYWNrZ3JvdW5kIHtcclxuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1nL2Jja2dyZC5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ob21lLWJhY2tncm91bmQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDEzNWRlZyxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJVxyXG4gICk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLm1pZGRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uYm94IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUzNCk7XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgYm94LXNoYWRvdzogMCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgaW5zZXQsXHJcbiAgICAwIDAgMzBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgaW5zZXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ib3g6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01MCU7XHJcbiAgbGVmdDogLTUwJTtcclxuICB3aWR0aDogMjAwJTtcclxuICBoZWlnaHQ6IDIwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgdG8gYm90dG9tIHJpZ2h0LFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNDAlLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpIDQ1JSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNTAlLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlXHJcbiAgKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcbiAgYW5pbWF0aW9uOiBzaGluZSA2cyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGluZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWhlYWRlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmdsYXNzLWlucHV0IGlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzgpO1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHJnYmEoNTYsIDEyOCwgMjU1LCAwLjQpO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xyXG4gIC0tY29sb3I6ICMzMzM7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLmdsYXNzLWlucHV0IGlvbi1pdGVtOmhvdmVyIHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQgaW9uLWxhYmVsIHtcclxuICBjb2xvcjogIzU1NTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQgaW9uLWlucHV0IHtcclxuICAtLWNvbG9yOiAjMzMzO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxufVxyXG5cclxuLmdsYXNzLWlucHV0IGlvbi1pY29uIHtcclxuICBjb2xvcjogIzU1NTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZ2xhc3MtaW5wdXQgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMgaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjMzg4MGZmO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtdG9nZ2xlLWljb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucGFzc3dvcmQtdG9nZ2xlLWljb246aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICBjb2xvcjogIzM4ODBmZjtcclxufVxyXG5cclxuI2ZvcmdldFBhc3N3b3JkIHtcclxuICBjb2xvcjogIzM4ODBmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuI2ZvcmdldFBhc3N3b3JkOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzJhNjJjNDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgbWFyZ2luLXRvcDogMS44cmVtO1xyXG59XHJcblxyXG4uYnRuIGlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtLWJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg1NiwgMTI4LCAyNTUsIDAuMyk7XHJcbiAgLS10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnRuIGlvbi1idXR0b246aG92ZXIge1xyXG4gIC0tYm94LXNoYWRvdzogMCA2cHggMTZweCByZ2JhKDU2LCAxMjgsIDI1NSwgMC40KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSB7XHJcbiAgbWFyZ2luOiAxLjVyZW0gMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLnNvY2lhbE1lZGlhIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5zb2NpYWxNZWRpYSBpb24taWNvbjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHNjYWxlKDEuMSk7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDU2LCAxMjgsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWxpbmsgcCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItbGluayBwOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzJhNjJjNDtcclxufVxyXG5cclxuLmFwcC1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5hcHAtZm9vdGVyIGlvbi1pY29uIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgY29sb3I6ICNmZmM0MDk7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxufVxyXG5cclxuLyogTG9jayBpbWFnZSBzdHlsaW5nICovXHJcbi5taWRkbGUgaW1nIHtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLm1pZGRsZSBpbWc6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZykgc2NhbGUoMS4wNSk7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"home-background\">\r\n  <div class=\"middle\">\r\n    <div class=\"box\">\r\n      <form #loginForm=\"ngForm\">\r\n        <p class=\"login-header\">Please login to your account</p>\r\n\r\n        <div class=\"glass-input\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Email Address</ion-label>\r\n            <ion-input\r\n              type=\"email\"\r\n              placeholder=\"Email\"\r\n              id=\"username\"\r\n              name=\"email\"\r\n              #email=\"ngModel\"\r\n              [(ngModel)]=\"user.username\"\r\n              required\r\n              email\r\n            ></ion-input>\r\n            <ion-icon slot=\"end\" name=\"mail\"></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <div class=\"glass-input\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Password</ion-label>\r\n            <ion-input\r\n              [type]=\"type ? 'password' : 'text'\"\r\n              placeholder=\"Password\"\r\n              id=\"password\"\r\n              name=\"password\"\r\n              #password=\"ngModel\"\r\n              [(ngModel)]=\"user.password\"\r\n              required\r\n            ></ion-input>\r\n            <ion-icon\r\n              slot=\"end\"\r\n              name=\"eye\"\r\n              (click)=\"changeType()\"\r\n              class=\"password-toggle-icon\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </div>\r\n\r\n        <p id=\"forgetPassword\" (click)=\"recover()\">Forgot Password</p>\r\n\r\n        <div class=\"btn\">\r\n          <ion-button\r\n            expand=\"block\"\r\n            [disabled]=\"!loginForm.valid\"\r\n            (click)=\"navigateWelcome()\"\r\n            >LOGIN</ion-button\r\n          >\r\n        </div>\r\n      </form>\r\n\r\n      <div align=\"center\">\r\n        <img src=\"../assets/img/lock2.gif\" width=\"80\" />\r\n        <div class=\"socialMedia\">\r\n          <ion-icon name=\"logo-facebook\"></ion-icon>\r\n          <ion-icon name=\"logo-twitter\"></ion-icon>\r\n          <ion-icon name=\"logo-google\"></ion-icon>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"register-link\">\r\n        <p (click)=\"register()\">Click me to create an account</p>\r\n      </div>\r\n    </div>\r\n\r\n    <p id=\"login\" class=\"app-footer\">\r\n      HARDWARE STORE APP\r\n      <ion-icon name=\"construct\"></ion-icon>\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map