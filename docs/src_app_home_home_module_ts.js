"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    },
    {
        path: 'home/orders',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_orders_orders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/orders/orders.module */ 7066)).then((m) => m.OrdersPageModule),
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 2267);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 5873);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 1491);
/* harmony import */ var _authentication_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication-service.service */ 1328);
/* harmony import */ var _fireservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fireservice.service */ 9792);










let HomePage = class HomePage {
    constructor(route, router, activate, _apiservice, toast, authService, load, ngFireAuth, navCtrl, fireService, afAuth) {
        this.route = route;
        this.router = router;
        this.activate = activate;
        this._apiservice = _apiservice;
        this.toast = toast;
        this.authService = authService;
        this.load = load;
        this.ngFireAuth = ngFireAuth;
        this.navCtrl = navCtrl;
        this.fireService = fireService;
        this.afAuth = afAuth;
        this.customers = {}; // This should be an object, not an array
        this.user = {};
        this.type = true;
        this.route.queryParams.subscribe((params) => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.user;
            }
        });
        this.getProfile();
    }
    ngOnInit() {
        this.count = 1;
    }
    navigateWelcome() {
        this.router.navigate(['order']);
    }
    navigateQoute() {
        this.router.navigate(['cart']);
    }
    navigateOut() {
        this.Logout();
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
        this.router.navigate(['home'], navigationExtras);
    }
    showToaster(message) {
        this.toast
            .create({
            message,
            duration: 3000,
        })
            .then((toastData) => toastData.present());
    }
    getProfile() {
        this.afAuth.authState.subscribe((user) => {
            if (user && user.uid) {
                this.fireService.getDetails({ uid: user.uid }).subscribe((res) => {
                    this.customers = res;
                    console.log('from Firestore ===', res);
                }, (error) => {
                    alert('ERROR');
                    console.log('ERROR ===', error);
                });
            }
            else {
                console.log('User not logged in');
            }
        });
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
    Logout() {
        this.authService.Logout();
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _authentication_service_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _fireservice_service__WEBPACK_IMPORTED_MODULE_4__.FireserviceService },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/* Global Glass Effect Styles */\n.glass-header {\n  background: transparent;\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  padding: 10px 16px;\n}\n.header-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sFont {\n  margin: 0;\n  font-size: 1.1rem;\n  font-weight: 500;\n  color: #333;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.profile-icon {\n  color: #1ee93f;\n  font-size: 1.8rem;\n  margin-right: 10px;\n  filter: drop-shadow(0 2px 4px rgba(30, 233, 63, 0.3));\n  transition: transform 0.3s ease;\n}\n.customer-name {\n  flex-grow: 1;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.logout-icon {\n  color: #e91e1e;\n  font-size: 1.8rem;\n  filter: drop-shadow(0 2px 4px rgba(233, 30, 30, 0.3));\n  transition: all 0.3s ease;\n}\n.logout-icon:hover {\n  transform: scale(1.1);\n}\n.glass-content {\n  --background: transparent;\n  position: relative;\n}\n.image-container {\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.wallpaper-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  filter: brightness(0.95);\n}\n.glass-tab-bar {\n  background: rgba(255, 255, 255, 0.24);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-top: 1px solid rgba(255, 255, 255, 0.3);\n  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\n  padding: 5px 0;\n  height: 60px;\n}\n.glass-tab-button {\n  --background: transparent;\n  --color: #555;\n  --color-selected: #3880ff;\n  --padding-bottom: 5px;\n  --padding-top: 5px;\n  transition: all 0.3s ease;\n  border-radius: 12px;\n  margin: 0 5px;\n  overflow: hidden;\n  position: relative;\n}\n.glass-tab-button::before {\n  content: \"\";\n  position: absolute;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.3) 45%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 100%);\n  transform: rotate(30deg);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.glass-tab-button:hover::before {\n  opacity: 1;\n  animation: shine 3s infinite;\n}\n.tab-icon {\n  font-size: 1.8rem;\n  transition: all 0.3s ease;\n  filter: drop-shadow(0 1px 1px rgba(255, 255, 255, 0.5));\n}\n.tab-label {\n  font-size: 0.75rem;\n  font-weight: 500;\n  margin-top: 4px;\n  transition: all 0.3s ease;\n}\n.glass-tab-button:hover .tab-icon {\n  transform: translateY(-3px);\n  background-color: #555;\n}\n.glass-tab-button:hover .tab-label {\n  color: #66f7b3;\n  text-shadow: 0 1px 1px rgba(56, 128, 255, 0.2);\n}\n.glass-tab-button.tab-selected {\n  background: rgba(56, 128, 255, 0.15);\n}\n.glass-tab-button.tab-selected .tab-icon {\n  color: #3880ff;\n  filter: drop-shadow(0 2px 4px rgba(56, 128, 255, 0.3));\n}\n.glass-tab-button.tab-selected .tab-label {\n  color: #3880ff;\n  font-weight: 600;\n}\n@keyframes shine {\n  0% {\n    transform: translateX(-100%) rotate(30deg);\n  }\n  100% {\n    transform: translateX(100%) rotate(30deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUFBO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpREFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUVBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSwrQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQUNGO0FBRUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7QUFFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7QUFFQTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBMQUFBO0VBUUEsd0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QUFORjtBQVNBO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0FBTkY7QUFTQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1REFBQTtBQU5GO0FBU0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBTkY7QUFTQTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7QUFORjtBQVNBO0VBQ0UsY0FBQTtFQUNBLDhDQUFBO0FBTkY7QUFTQTtFQUNFLG9DQUFBO0FBTkY7QUFTQTtFQUNFLGNBQUE7RUFDQSxzREFBQTtBQU5GO0FBU0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVNBO0VBQ0U7SUFDRSwwQ0FBQTtFQU5GO0VBUUE7SUFDRSx5Q0FBQTtFQU5GO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHbG9iYWwgR2xhc3MgRWZmZWN0IFN0eWxlcyAqL1xyXG4uZ2xhc3MtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNGb250IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzMzMztcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pY29uIHtcclxuICBjb2xvcjogIzFlZTkzZjtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA0cHggcmdiYSgzMCwgMjMzLCA2MywgMC4zKSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmN1c3RvbWVyLW5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5sb2dvdXQtaWNvbiB7XHJcbiAgY29sb3I6ICNlOTFlMWU7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA0cHggcmdiYSgyMzMsIDMwLCAzMCwgMC4zKSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmxvZ291dC1pY29uOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5nbGFzcy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ud2FsbHBhcGVyLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiLWJhciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBib3gtc2hhZG93OiAwIC0ycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgcGFkZGluZzogNXB4IDA7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiAjNTU1O1xyXG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICMzODgwZmY7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmdsYXNzLXRhYi1idXR0b246OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNTAlO1xyXG4gIGxlZnQ6IC01MCU7XHJcbiAgd2lkdGg6IDIwMCU7XHJcbiAgaGVpZ2h0OiAyMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHRvIGJvdHRvbSByaWdodCxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDQwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKSA0NSUsXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDUwJSxcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJVxyXG4gICk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5nbGFzcy10YWItYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYW5pbWF0aW9uOiBzaGluZSAzcyBpbmZpbml0ZTtcclxufVxyXG5cclxuLnRhYi1pY29uIHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XHJcbn1cclxuXHJcbi50YWItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiLWJ1dHRvbjpob3ZlciAudGFiLWljb24ge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiLWJ1dHRvbjpob3ZlciAudGFiLWxhYmVsIHtcclxuICBjb2xvcjogIzY2ZjdiMztcclxuICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoNTYsIDEyOCwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNTYsIDEyOCwgMjU1LCAwLjE1KTtcclxufVxyXG5cclxuLmdsYXNzLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIC50YWItaWNvbiB7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCA0cHggcmdiYSg1NiwgMTI4LCAyNTUsIDAuMykpO1xyXG59XHJcblxyXG4uZ2xhc3MtdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgLnRhYi1sYWJlbCB7XHJcbiAgY29sb3I6ICMzODgwZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzaGluZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKSByb3RhdGUoMzBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header lines=\"none\" *ngIf=\"customers\" class=\"glass-header\">\r\n  <div class=\"header-content\">\r\n    <p class=\"sFont\">\r\n      <ion-icon name=\"person\" class=\"profile-icon\"></ion-icon>\r\n      <span class=\"customer-name\">{{ customers.name }}</span>\r\n      <ion-icon\r\n        (click)=\"navigateOut()\"\r\n        name=\"log-out-outline\"\r\n        class=\"logout-icon\"\r\n      ></ion-icon>\r\n    </p>\r\n  </div>\r\n</ion-header>\r\n\r\n<ion-content class=\"glass-content\">\r\n  <div class=\"image-container\">\r\n    <img src=\"../../../assets/img/wallpaperr.jpg\" class=\"wallpaper-image\" />\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\" class=\"glass-tab-bar\">\r\n    <ion-tab-button tab=\"profile\" class=\"glass-tab-button\">\r\n      <ion-icon name=\"person\" class=\"tab-icon\"></ion-icon>\r\n      <ion-label class=\"tab-label\">Profile</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"navigateWelcome()\" class=\"glass-tab-button\">\r\n      <ion-icon name=\"cash-outline\" class=\"tab-icon\"></ion-icon>\r\n      <ion-label class=\"tab-label\">Buy</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button (click)=\"navigateQoute()\" class=\"glass-tab-button\">\r\n      <ion-icon name=\"cart-outline\" class=\"tab-icon\"></ion-icon>\r\n      <ion-label class=\"tab-label\">Cart</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"settings\" class=\"glass-tab-button\">\r\n      <ion-icon name=\"settings\" class=\"tab-icon\"></ion-icon>\r\n      <ion-label class=\"tab-label\">Settings</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map