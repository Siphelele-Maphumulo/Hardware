"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_index_index_module_ts"],{

/***/ 7581:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo/logo.component */ 8484);
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide/slide.component */ 2459);
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ 727);






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent, _slide_slide_component__WEBPACK_IMPORTED_MODULE_1__.SlideComponent, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule
        ],
        exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent, _slide_slide_component__WEBPACK_IMPORTED_MODULE_1__.SlideComponent, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA],
    })
], ComponentsModule);



/***/ }),

/***/ 8484:
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _logo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.component.html?ngResource */ 3026);
/* harmony import */ var _logo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.component.scss?ngResource */ 8678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() { }
};
LogoComponent.ctorParameters = () => [];
LogoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-logo',
        template: _logo_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_logo_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LogoComponent);



/***/ }),

/***/ 2459:
/*!*****************************************************!*\
  !*** ./src/app/components/slide/slide.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlideComponent": () => (/* binding */ SlideComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide.component.html?ngResource */ 930);
/* harmony import */ var _slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide.component.scss?ngResource */ 1763);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SlideComponent = class SlideComponent {
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() { }
};
SlideComponent.ctorParameters = () => [];
SlideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-slide',
        template: _slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SlideComponent);



/***/ }),

/***/ 727:
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartComponent": () => (/* binding */ StartComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _start_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.component.html?ngResource */ 5129);
/* harmony import */ var _start_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.component.scss?ngResource */ 3303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let StartComponent = class StartComponent {
    constructor(rout) {
        this.rout = rout;
    }
    ngOnInit() { }
    login() {
        this.rout.navigate(['login']);
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
StartComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-start',
        template: _start_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_start_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartComponent);



/***/ }),

/***/ 8627:
/*!***********************************************!*\
  !*** ./src/app/index/index-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageRoutingModule": () => (/* binding */ IndexPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.page */ 754);




const routes = [
    {
        path: '',
        component: _index_page__WEBPACK_IMPORTED_MODULE_0__.IndexPage,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_welcome_welcome_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/welcome/welcome.module */ 1362)).then(m => m.WelcomePageModule)
            },
            {
                path: 'login',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
            },
            {
                path: 'signup',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_signup_signup_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../pages/signup/signup.module */ 7110)).then(m => m.SignupPageModule)
            },
        ]
    }
];
let IndexPageRoutingModule = class IndexPageRoutingModule {
};
IndexPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IndexPageRoutingModule);



/***/ }),

/***/ 722:
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageModule": () => (/* binding */ IndexPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-routing.module */ 8627);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page */ 754);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 7581);








let IndexPageModule = class IndexPageModule {
};
IndexPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _index_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndexPageRoutingModule
        ],
        declarations: [_index_page__WEBPACK_IMPORTED_MODULE_1__.IndexPage]
    })
], IndexPageModule);



/***/ }),

/***/ 754:
/*!*************************************!*\
  !*** ./src/app/index/index.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPage": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _index_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.page.html?ngResource */ 1794);
/* harmony import */ var _index_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page.scss?ngResource */ 9939);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let IndexPage = class IndexPage {
    constructor() { }
    ngOnInit() {
    }
};
IndexPage.ctorParameters = () => [];
IndexPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-index',
        template: _index_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_index_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], IndexPage);



/***/ }),

/***/ 8678:
/*!****************************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 1763:
/*!******************************************************************!*\
  !*** ./src/app/components/slide/slide.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/* Base layout */\n.slider-container {\n  --background: #ffffff;\n  height: 100vh;\n  position: relative;\n}\n.main-slides {\n  height: calc(100% - 80px);\n  /* Space for button */\n  width: 100%;\n}\n/* Slide structure */\n.slide {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 16px;\n}\n.slide .slide-content {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n/* Image grid for two equal-sized images */\n.image-grid {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  /* Two equal rows */\n  grid-gap: 8px;\n  gap: 8px;\n  height: 100%;\n  width: 100%;\n  margin-top: 16px;\n  flex-grow: 1;\n}\n.image-grid .grid-image {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n}\n/* Full-size image for other slides */\n.full-image {\n  width: 100%;\n  height: 100%;\n  max-height: calc(100% - 60px);\n  object-fit: contain;\n  margin-top: auto;\n}\n/* Text styles */\n.welcome-heading {\n  color: #f15b3a;\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 16px;\n  line-height: 1.3;\n  flex-shrink: 0;\n}\n.slide-title {\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n/* Color classes */\n.red {\n  color: #fa3411;\n}\n.blue {\n  color: #313abd;\n}\n.yellow {\n  color: #f3e51a;\n}\n.green {\n  color: #5cdd11;\n}\n.gray {\n  color: #626b6b;\n}\n.orange {\n  color: #f89d14;\n}\n.lightblue {\n  color: #3dc2ff;\n}\n/* Pager styling */\n.swiper-pagination {\n  bottom: 80px !important;\n}\n.swiper-pagination-bullet {\n  background: var(--ion-color-primary);\n  width: 8px;\n  height: 8px;\n}\n/* Safe area for notched devices */\n@supports (padding-bottom: env(safe-area-inset-bottom)) {\n  .main-slides {\n    height: calc(100% - (80px + env(safe-area-inset-bottom)));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUEyQixxQkFBQTtFQUMzQixXQUFBO0FBRUY7QUFDQSxvQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVKO0FBRUEsMENBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUE2QixtQkFBQTtFQUM3QixhQUFBO0VBQUEsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKO0FBRUEscUNBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFQSxnQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQSxrQkFBQTtBQUNBO0VBQ0UsY0FBQTtBQUNGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFBQTtFQUNFLGNBQUE7QUFHRjtBQURBO0VBQ0UsY0FBQTtBQUlGO0FBRkE7RUFDRSxjQUFBO0FBS0Y7QUFIQTtFQUNFLGNBQUE7QUFNRjtBQUpBO0VBQ0UsY0FBQTtBQU9GO0FBSkEsa0JBQUE7QUFDQTtFQUNFLHVCQUFBO0FBT0Y7QUFMRTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFPSjtBQUhBLGtDQUFBO0FBQ0E7RUFDRTtJQUNFLHlEQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJzbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhc2UgbGF5b3V0ICovXHJcbi5zbGlkZXItY29udGFpbmVyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYWluLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTsgLyogU3BhY2UgZm9yIGJ1dHRvbiAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBTbGlkZSBzdHJ1Y3R1cmUgKi9cclxuLnNsaWRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gIC5zbGlkZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBJbWFnZSBncmlkIGZvciB0d28gZXF1YWwtc2l6ZWQgaW1hZ2VzICovXHJcbi5pbWFnZS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgLyogVHdvIGVxdWFsIHJvd3MgKi9cclxuICBnYXA6IDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gIC5ncmlkLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLyogRnVsbC1zaXplIGltYWdlIGZvciBvdGhlciBzbGlkZXMgKi9cclxuLmZ1bGwtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi8qIFRleHQgc3R5bGVzICovXHJcbi53ZWxjb21lLWhlYWRpbmcge1xyXG4gIGNvbG9yOiAjZjE1YjNhO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnNsaWRlLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vKiBDb2xvciBjbGFzc2VzICovXHJcbi5yZWQge1xyXG4gIGNvbG9yOiAjZmEzNDExO1xyXG59XHJcbi5ibHVlIHtcclxuICBjb2xvcjogIzMxM2FiZDtcclxufVxyXG4ueWVsbG93IHtcclxuICBjb2xvcjogI2YzZTUxYTtcclxufVxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiAjNWNkZDExO1xyXG59XHJcbi5ncmF5IHtcclxuICBjb2xvcjogIzYyNmI2YjtcclxufVxyXG4ub3JhbmdlIHtcclxuICBjb2xvcjogI2Y4OWQxNDtcclxufVxyXG4ubGlnaHRibHVlIHtcclxuICBjb2xvcjogIzNkYzJmZjtcclxufVxyXG5cclxuLyogUGFnZXIgc3R5bGluZyAqL1xyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gIGJvdHRvbTogODBweCAhaW1wb3J0YW50O1xyXG5cclxuICAmLWJ1bGxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTYWZlIGFyZWEgZm9yIG5vdGNoZWQgZGV2aWNlcyAqL1xyXG5Ac3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpIHtcclxuICAubWFpbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAoODBweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSkpO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3303:
/*!******************************************************************!*\
  !*** ./src/app/components/start/start.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".start-btn {\n  position: fixed;\n  bottom: 20px;\n  left: 16px;\n  right: 16px;\n  height: 60px;\n  margin: 0 auto;\n  padding: 0;\n  --background: transparent;\n  --box-shadow: none;\n}\n.start-btn .btn-gif {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.start-btn .btn-text {\n  position: relative;\n  z-index: 2;\n  color: white;\n  font-weight: bold;\n  font-size: 30px;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);\n}\n.start-btn:active {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FBQUo7QUFHRTtFQUNFLHNCQUFBO0FBREoiLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtYnRuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gIC5idG4tZ2lmIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 9939:
/*!**************************************************!*\
  !*** ./src/app/index/index.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3026:
/*!****************************************************************!*\
  !*** ./src/app/components/logo/logo.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<p>\r\n  logo works!\r\n</p>\r\n";

/***/ }),

/***/ 930:
/*!******************************************************************!*\
  !*** ./src/app/components/slide/slide.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\" class=\"slider-container\">\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"main-slides\">\r\n    <!-- Slide 1: Welcome -->\r\n    <ion-slide class=\"slide\">\r\n      <div class=\"slide-content\">\r\n        <h1 class=\"welcome-heading\">\r\n          <span class=\"red\">WEL</span><span class=\"blue\">COME</span> TO\r\n          <span class=\"yellow\">SI</span><span class=\"green\">YESHE</span>\r\n          <span class=\"gray\">HARDWARE</span>\r\n        </h1>\r\n\r\n        <div class=\"image-grid\">\r\n          <img\r\n            class=\"grid-image\"\r\n            src=\"assets/img/Siyeshe.gif\"\r\n            alt=\"Siyeshe Logo\"\r\n          />\r\n          <img\r\n            class=\"grid-image\"\r\n            src=\"assets/img/Sye.gif\"\r\n            alt=\"Hardware Products\"\r\n          />\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n\r\n    <!-- Slide 2: Profile -->\r\n    <ion-slide class=\"slide\">\r\n      <div class=\"slide-content\">\r\n        <h1 class=\"slide-title red\">Create a Store Profile</h1>\r\n        <img\r\n          class=\"full-image\"\r\n          src=\"assets/img/profile.gif\"\r\n          alt=\"Create Profile\"\r\n        />\r\n      </div>\r\n    </ion-slide>\r\n\r\n    <!-- Slide 3: Order Online -->\r\n    <ion-slide class=\"slide\">\r\n      <div class=\"slide-content\">\r\n        <h1 class=\"slide-title orange\">Order Online Now!</h1>\r\n        <h2 class=\"slide-subtitle\">Have everything delivered to your door!</h2>\r\n        <img\r\n          class=\"full-image\"\r\n          src=\"assets/img/online.gif\"\r\n          alt=\"Online Order\"\r\n        />\r\n      </div>\r\n    </ion-slide>\r\n\r\n    <!-- Slide 4: App Features -->\r\n    <ion-slide class=\"slide\">\r\n      <div class=\"slide-content\">\r\n        <h1 class=\"slide-title blue\">Fast and Easy With Our New App</h1>\r\n        <img class=\"full-image\" src=\"assets/img/order.gif\" alt=\"App Features\" />\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <app-start></app-start>\r\n</ion-content>\r\n";

/***/ }),

/***/ 5129:
/*!******************************************************************!*\
  !*** ./src/app/components/start/start.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-button expand=\"full\" (click)=\"login()\" class=\"start-btn\" fill=\"clear\">\r\n  <img src=\"assets/img/Start.gif\" alt=\"Start Button\" class=\"btn-gif\" />\r\n</ion-button>\r\n";

/***/ }),

/***/ 1794:
/*!**************************************************!*\
  !*** ./src/app/index/index.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n    <ion-router-outlet></ion-router-outlet>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_index_index_module_ts.js.map