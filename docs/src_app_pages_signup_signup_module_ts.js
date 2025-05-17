"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 4374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 4374);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 7581);








let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 4374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 4050);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/fireservice.service */ 9792);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.service */ 1491);
/* harmony import */ var src_app_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/authentication-service.service */ 1328);











let SignupPage = class SignupPage {
    constructor(route, activated, toast, afAuth, authService, firestore, _apiservice, load, fireService) {
        this.route = route;
        this.activated = activated;
        this.toast = toast;
        this.afAuth = afAuth;
        this.authService = authService;
        this.firestore = firestore;
        this._apiservice = _apiservice;
        this.load = load;
        this.fireService = fireService;
        this.user = {};
        this.type = true;
    }
    addCustomer() {
        let data = {
            name: this.user.name,
            username: this.user.username,
            surname: this.user.surname,
            email: this.user.email,
            contact: this.user.contact,
        };
        this._apiservice.addCustomer(data).subscribe((res) => {
            console.log("Customer Added ===", res);
            this.showToaster('Customer added to Created!');
        }, (error) => {
            alert('ERROR');
            console.log("ERROR ===", error);
        });
    }
    ngOnInit() {
    }
    /* reg(){
      this.email = ((document.getElementById("email") as HTMLInputElement).value);
      this.password = ((document.getElementById("password") as HTMLInputElement).value);

      const auth = getAuth();

      createUserWithEmailAndPassword(auth, this.email, this.password).then(userCredentials => {
        if (userCredentials.user){
          window.alert("User created successfully");
          this.route.navigate(['/login']);
        }
      }).catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        window.alert(errorMessage);
        console.log(err);

      })
    }*/
    navigateDetails() {
        this.CheckFields();
    }
    /*
    async setValue(user: User){
      if(this.CheckFields()){
      let load = this.load.create({
        message: 'Creating Account...'
      });
      (await load).present();
          try{
      this.fireAuth.createUserWithEmailAndPassword(user.email, user.password).
      then(data => console.log(data));
    
      await (await (await this.fireAuth.currentUser).sendEmailVerification());
    
      this.showToaster('Account Created!');
          }catch(e){
    
            console.log(e);
          }
          (await load).dismiss();
      }
    }*/
    CheckFields() {
        if (this.user.username == null || this.user.surname == null || this.user.contact == null || this.user.email == null || this.user.password == null || this.user.cPass == null) {
            this.warningToaster('Please fill in missing field');
            return false;
        }
        else if (this.user.password !== this.user.cPass) {
            this.warningToaster('Passwords do not match');
            return false;
        }
        else {
            this.signup();
            this.addCustomer();
            return true;
        }
    }
    changeType() {
        this.type = !this.type;
    }
    gotoHome() {
    }
    gmailLogin() {
    }
    twitterLogin() {
    }
    faceBookLogin() {
    }
    goToLogin() {
        this.route.navigate(['login']);
    }
    ClearFields() {
        this.user.username = '';
        this.user.surname = '';
        this.user.contact = '';
        this.user.email = '';
        this.user.password = '';
        this.user.cPass = '';
        this.setFocusOnInput();
    }
    warningToaster(message) {
        this.toast.create({
            message,
            color: 'danger',
            duration: 3000,
        }).then(toastData => toastData.present());
    }
    showToaster(message) {
        this.toast.create({
            message,
            color: 'success',
            duration: 3000,
        }).then(toastData => toastData.present());
    }
    setFocusOnInput() {
        this.User.setFocus();
    }
    signup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.fireService.signup({ email: this.user.email, password: this.user.password }).then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (res.user.uid) {
                    yield this.authService.SendVerificationMail();
                    let data = {
                        email: this.user.email,
                        password: this.user.password,
                        name: this.user.username,
                        uid: res.user.uid
                    };
                    this.fireService.saveDetails(data).then(res => {
                        this.showToaster('Account Created!');
                        this.complete();
                    }, err => {
                        console.log(err);
                    });
                }
            }), err => {
                this.warningToaster(err.message);
                console.log(err);
            });
        });
    }
    complete() {
        this.showToaster('Signup completed successfully!');
        const params = { queryParams: { userVal: this.user.username }, };
        this.route.navigate(['login'], params);
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: src_app_authentication_service_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationServiceService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_9__.AngularFirestore },
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_fireservice_service__WEBPACK_IMPORTED_MODULE_2__.FireserviceService }
];
SignupPage.propDecorators = {
    User: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['inputUser', { static: false },] }],
    Surname: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['inputId', { static: false },] }]
};
SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-signup',
        template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupPage);



/***/ }),

/***/ 2124:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".signup-content {\n  --background: url(\"/assets/img/bckgrd.jpg\") no-repeat center center / cover;\n  position: relative;\n  overflow: hidden;\n}\n\n.signup-content::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 50%);\n  z-index: 0;\n}\n\n.signup-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  position: relative;\n  z-index: 1;\n}\n\n.signup-box {\n  width: 100%;\n  max-width: 400px;\n  background: rgba(255, 255, 255, 0.596);\n  border-radius: 12px;\n  padding: 24px;\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.2) inset, 0 0 20px rgba(255, 255, 255, 0.4) inset;\n  position: relative;\n  overflow: hidden;\n}\n\n.signup-box::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.3) 45%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);\n  transform: rotate(30deg);\n  animation: shine 5s infinite;\n}\n\n@keyframes shine {\n  0% {\n    transform: translateX(-100%) rotate(30deg);\n  }\n  100% {\n    transform: translateX(100%) rotate(30deg);\n  }\n}\n\n.form-title {\n  text-align: center;\n  margin-bottom: 16px;\n  font-size: 1.5rem;\n  color: #333;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\nion-item {\n  --background: transparent;\n  --highlight-color-focused: rgba(56, 128, 255, 0.3);\n  --border-color: rgba(0, 0, 0, 0.1);\n  margin-bottom: 12px;\n  color: #333;\n  -webkit-backdrop-filter: blur(4px);\n          backdrop-filter: blur(4px);\n}\n\nion-button {\n  margin-top: 16px;\n  --border-radius: 8px;\n  --box-shadow: 0 2px 8px rgba(56, 128, 255, 0.3);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n\nion-button:hover {\n  --box-shadow: 0 4px 12px rgba(56, 128, 255, 0.4);\n  transform: translateY(-1px);\n}\n\n.login-link {\n  text-align: center;\n  margin-top: 12px;\n  color: #3880ff;\n  cursor: pointer;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);\n}\n\n.signup-media {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.signup-media img {\n  width: 50%;\n  height: auto;\n  margin-bottom: 10px;\n  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));\n}\n\n.signup-media .social-icons {\n  display: flex;\n  justify-content: center;\n  gap: 15px;\n}\n\n.signup-media .social-icons ion-icon {\n  font-size: 24px;\n  cursor: pointer;\n  color: #666;\n  transition: all 0.3s ease;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.5));\n}\n\n.signup-media .social-icons ion-icon:hover {\n  color: #3880ff;\n  transform: translateY(-2px);\n  filter: drop-shadow(0 2px 4px rgba(56, 128, 255, 0.3));\n}\n\n.app-footer {\n  text-align: center;\n  margin-top: 24px;\n  color: #ffffff;\n  font-weight: bold;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyRUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0RkFBQTtFQUtBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtFQUNBLDRIQUFBO0VBR0Esa0JBQUE7RUFDQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBMQUFBO0VBUUEsd0JBQUE7RUFDQSw0QkFBQTtBQVpGOztBQWVBO0VBQ0U7SUFDRSwwQ0FBQTtFQVpGO0VBY0E7SUFDRSx5Q0FBQTtFQVpGO0FBQ0Y7O0FBZUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUFiRjs7QUFnQkE7RUFDRSx5QkFBQTtFQUNBLGtEQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7QUFiRjs7QUFnQkE7RUFDRSxnREFBQTtFQUNBLDJCQUFBO0FBYkY7O0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7QUFiRjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBYkY7O0FBZUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFiSjs7QUFnQkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FBZEo7O0FBZ0JJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHVEQUFBO0FBZE47O0FBZ0JNO0VBQ0UsY0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0RBQUE7QUFkUjs7QUFvQkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFqQkYiLCJmaWxlIjoic2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWdudXAtY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltZy9iY2tncmQuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWdudXAtY29udGVudDo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTM1ZGVnLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDAlLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSA1MCVcclxuICApO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5zaWdudXAtd3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnNpZ251cC1ib3gge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU5Nik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig4cHgpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSBpbnNldCxcclxuICAgIDAgMCAyMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSBpbnNldDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNpZ251cC1ib3g6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTAlO1xyXG4gIGxlZnQ6IC01MCU7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbiAgaGVpZ2h0OiAyMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSByaWdodCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSA0NSUsXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJVxyXG4gICk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIGFuaW1hdGlvbjogc2hpbmUgNXMgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbmUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgcm90YXRlKDMwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSkgcm90YXRlKDMwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogcmdiYSg1NiwgMTI4LCAyNTUsIDAuMyk7XHJcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIC0tYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoNTYsIDEyOCwgMjU1LCAwLjMpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIGJveC1zaGFkb3cgMC4ycyBlYXNlO1xyXG59XHJcblxyXG5pb24tYnV0dG9uOmhvdmVyIHtcclxuICAtLWJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSg1NiwgMTI4LCAyNTUsIDAuNCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4ubG9naW4tbGluayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG59XHJcblxyXG4uc2lnbnVwLW1lZGlhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpKTtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMzg4MGZmO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCByZ2JhKDU2LCAxMjgsIDI1NSwgMC4zKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hcHAtZm9vdGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 4050:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"signup-content\">\r\n  <div class=\"signup-wrapper\">\r\n    <div class=\"signup-box\">\r\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"navigateDetails()\" novalidate>\r\n        <h2 class=\"form-title\">Create an Account</h2>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">First Name</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            name=\"name\"\r\n            [(ngModel)]=\"user.name\"\r\n            required\r\n          ></ion-input>\r\n          <ion-icon slot=\"end\" name=\"person\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Surname</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            name=\"surname\"\r\n            [(ngModel)]=\"user.surname\"\r\n            required\r\n          ></ion-input>\r\n          <ion-icon slot=\"end\" name=\"person\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Username</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            name=\"username\"\r\n            [(ngModel)]=\"user.username\"\r\n            required\r\n          ></ion-input>\r\n          <ion-icon slot=\"end\" name=\"person-circle\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Contact</ion-label>\r\n          <ion-input\r\n            type=\"tel\"\r\n            name=\"contact\"\r\n            [(ngModel)]=\"user.contact\"\r\n            required\r\n          ></ion-input>\r\n          <ion-icon slot=\"end\" name=\"call\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Email</ion-label>\r\n          <ion-input\r\n            type=\"email\"\r\n            name=\"email\"\r\n            [(ngModel)]=\"user.email\"\r\n            required\r\n          ></ion-input>\r\n          <ion-icon slot=\"end\" name=\"mail\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Password</ion-label>\r\n          <ion-input\r\n            [type]=\"type ? 'password' : 'text'\"\r\n            name=\"password\"\r\n            [(ngModel)]=\"user.password\"\r\n            required\r\n          ></ion-input>\r\n          <ion-icon slot=\"end\" name=\"eye\" (click)=\"changeType()\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Confirm Password</ion-label>\r\n          <ion-input\r\n            [type]=\"type ? 'password' : 'text'\"\r\n            name=\"cPassword\"\r\n            [(ngModel)]=\"user.cPass\"\r\n            required\r\n          ></ion-input>\r\n          <ion-icon slot=\"end\" name=\"eye\" (click)=\"changeType()\"></ion-icon>\r\n        </ion-item>\r\n\r\n        <ion-button expand=\"block\" type=\"submit\" [disabled]=\"loginForm.invalid\"\r\n          >Sign Up</ion-button\r\n        >\r\n\r\n        <p class=\"login-link\" (click)=\"goToLogin()\">\r\n          Already have an account? Log in\r\n        </p>\r\n      </form>\r\n\r\n      <div class=\"signup-media\">\r\n        <img src=\"../assets/img/login (2).gif\" alt=\"Signup animation\" />\r\n      </div>\r\n    </div>\r\n\r\n    <footer class=\"app-footer\">\r\n      <p>HARDWARE STORE APP <ion-icon name=\"construct\"></ion-icon></p>\r\n    </footer>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map