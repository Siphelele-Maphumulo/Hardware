"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_index_index_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo/logo.component */ 8484);
/* harmony import */ var _slide_slide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide/slide.component */ 2459);
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start/start.component */ 727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent, _slide_slide_component__WEBPACK_IMPORTED_MODULE_1__.SlideComponent, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_start_start_component__WEBPACK_IMPORTED_MODULE_2__.StartComponent, _slide_slide_component__WEBPACK_IMPORTED_MODULE_1__.SlideComponent, _logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LogoComponent {
    constructor() { }
    ngOnInit() { }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 2, vars: 0, template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " logo works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../start/start.component */ 727);


class SlideComponent {
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() { }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(); };
SlideComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SlideComponent, selectors: [["app-slide"]], decls: 37, vars: 2, consts: [[1, "slider-container", 3, "fullscreen"], ["pager", "true", 1, "main-slides", 3, "options"], [1, "slide"], [1, "slide-content"], [1, "welcome-heading"], [1, "red"], [1, "blue"], [1, "yellow"], [1, "green"], [1, "gray"], [1, "image-grid"], ["src", "assets/img/Siyeshe.gif", "alt", "Siyeshe Logo", 1, "grid-image"], ["src", "assets/img/Sye.gif", "alt", "Hardware Products", 1, "grid-image"], [1, "slide-title", "red"], ["src", "assets/img/profile.gif", "alt", "Create Profile", 1, "full-image"], [1, "slide-title", "orange"], [1, "slide-subtitle"], ["src", "assets/img/online.gif", "alt", "Online Order", 1, "full-image"], [1, "slide-title", "blue"], ["src", "assets/img/order.gif", "alt", "App Features", 1, "full-image"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content", 0)(1, "ion-slides", 1)(2, "ion-slide", 2)(3, "div", 3)(4, "h1", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "WEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "COME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " TO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "SI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "YESHE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "HARDWARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 11)(18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-slide", 2)(20, "div", 3)(21, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Create a Store Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-slide", 2)(25, "div", 3)(26, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Order Online Now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Have everything delivered to your door!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-slide", 2)(32, "div", 3)(33, "h1", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Fast and Easy With Our New App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "app-start");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.slideOpts);
    } }, directives: [_start_start_component__WEBPACK_IMPORTED_MODULE_0__.StartComponent], styles: [".slider-container[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  height: 100vh;\n  position: relative;\n}\n.main-slides[_ngcontent-%COMP%] {\n  height: calc(100% - 80px);\n  \n  width: 100%;\n}\n\n.slide[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 16px;\n}\n.slide[_ngcontent-%COMP%]   .slide-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n}\n\n.image-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  \n  grid-gap: 8px;\n  gap: 8px;\n  height: 100%;\n  width: 100%;\n  margin-top: 16px;\n  flex-grow: 1;\n}\n.image-grid[_ngcontent-%COMP%]   .grid-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center;\n}\n\n.full-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-height: calc(100% - 60px);\n  object-fit: contain;\n  margin-top: auto;\n}\n\n.welcome-heading[_ngcontent-%COMP%] {\n  color: #f15b3a;\n  font-size: 1.8rem;\n  font-weight: bold;\n  margin-bottom: 16px;\n  line-height: 1.3;\n  flex-shrink: 0;\n}\n.slide-title[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: bold;\n  margin-bottom: 16px;\n  flex-shrink: 0;\n}\n\n.red[_ngcontent-%COMP%] {\n  color: #fa3411;\n}\n.blue[_ngcontent-%COMP%] {\n  color: #313abd;\n}\n.yellow[_ngcontent-%COMP%] {\n  color: #f3e51a;\n}\n.green[_ngcontent-%COMP%] {\n  color: #5cdd11;\n}\n.gray[_ngcontent-%COMP%] {\n  color: #626b6b;\n}\n.orange[_ngcontent-%COMP%] {\n  color: #f89d14;\n}\n.lightblue[_ngcontent-%COMP%] {\n  color: #3dc2ff;\n}\n\n.swiper-pagination[_ngcontent-%COMP%] {\n  bottom: 80px !important;\n}\n.swiper-pagination-bullet[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  width: 8px;\n  height: 8px;\n}\n\n@supports (padding-bottom: env(safe-area-inset-bottom)) {\n  .main-slides[_ngcontent-%COMP%] {\n    height: calc(100% - (80px + env(safe-area-inset-bottom)));\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSx5QkFBQTtFQUEyQixxQkFBQTtFQUMzQixXQUFBO0FBRUY7QUFDQSxvQkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFRjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUVKO0FBRUEsMENBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUE2QixtQkFBQTtFQUM3QixhQUFBO0VBQUEsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUVKO0FBRUEscUNBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFFQSxnQkFBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFFQSxrQkFBQTtBQUNBO0VBQ0UsY0FBQTtBQUNGO0FBQ0E7RUFDRSxjQUFBO0FBRUY7QUFBQTtFQUNFLGNBQUE7QUFHRjtBQURBO0VBQ0UsY0FBQTtBQUlGO0FBRkE7RUFDRSxjQUFBO0FBS0Y7QUFIQTtFQUNFLGNBQUE7QUFNRjtBQUpBO0VBQ0UsY0FBQTtBQU9GO0FBSkEsa0JBQUE7QUFDQTtFQUNFLHVCQUFBO0FBT0Y7QUFMRTtFQUNFLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFPSjtBQUhBLGtDQUFBO0FBQ0E7RUFDRTtJQUNFLHlEQUFBO0VBTUY7QUFDRiIsImZpbGUiOiJzbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhc2UgbGF5b3V0ICovXHJcbi5zbGlkZXItY29udGFpbmVyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tYWluLXNsaWRlcyB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTsgLyogU3BhY2UgZm9yIGJ1dHRvbiAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBTbGlkZSBzdHJ1Y3R1cmUgKi9cclxuLnNsaWRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gIC5zbGlkZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBJbWFnZSBncmlkIGZvciB0d28gZXF1YWwtc2l6ZWQgaW1hZ2VzICovXHJcbi5pbWFnZS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjsgLyogVHdvIGVxdWFsIHJvd3MgKi9cclxuICBnYXA6IDhweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gIC5ncmlkLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLyogRnVsbC1zaXplIGltYWdlIGZvciBvdGhlciBzbGlkZXMgKi9cclxuLmZ1bGwtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi8qIFRleHQgc3R5bGVzICovXHJcbi53ZWxjb21lLWhlYWRpbmcge1xyXG4gIGNvbG9yOiAjZjE1YjNhO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnNsaWRlLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4vKiBDb2xvciBjbGFzc2VzICovXHJcbi5yZWQge1xyXG4gIGNvbG9yOiAjZmEzNDExO1xyXG59XHJcbi5ibHVlIHtcclxuICBjb2xvcjogIzMxM2FiZDtcclxufVxyXG4ueWVsbG93IHtcclxuICBjb2xvcjogI2YzZTUxYTtcclxufVxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiAjNWNkZDExO1xyXG59XHJcbi5ncmF5IHtcclxuICBjb2xvcjogIzYyNmI2YjtcclxufVxyXG4ub3JhbmdlIHtcclxuICBjb2xvcjogI2Y4OWQxNDtcclxufVxyXG4ubGlnaHRibHVlIHtcclxuICBjb2xvcjogIzNkYzJmZjtcclxufVxyXG5cclxuLyogUGFnZXIgc3R5bGluZyAqL1xyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gIGJvdHRvbTogODBweCAhaW1wb3J0YW50O1xyXG5cclxuICAmLWJ1bGxldCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTYWZlIGFyZWEgZm9yIG5vdGNoZWQgZGV2aWNlcyAqL1xyXG5Ac3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkpIHtcclxuICAubWFpbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAoODBweCArIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSkpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class StartComponent {
    constructor(rout) {
        this.rout = rout;
    }
    ngOnInit() { }
    login() {
        this.rout.navigate(['login']);
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
StartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["app-start"]], decls: 2, vars: 0, consts: [["expand", "full", "fill", "clear", 1, "start-btn", 3, "click"], ["src", "assets/img/Start.gif", "alt", "Start Button", 1, "btn-gif"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartComponent_Template_ion_button_click_0_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".start-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  left: 16px;\n  right: 16px;\n  height: 60px;\n  margin: 0 auto;\n  padding: 0;\n  --background: transparent;\n  --box-shadow: none;\n}\n.start-btn[_ngcontent-%COMP%]   .btn-gif[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.start-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  color: white;\n  font-weight: bold;\n  font-size: 30px;\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);\n}\n.start-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFDSjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FBQUo7QUFHRTtFQUNFLHNCQUFBO0FBREoiLCJmaWxlIjoic3RhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtYnRuIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbiAgcmlnaHQ6IDE2cHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG4gIC5idG4tZ2lmIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.page */ 754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




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
class IndexPageRoutingModule {
}
IndexPageRoutingModule.ɵfac = function IndexPageRoutingModule_Factory(t) { return new (t || IndexPageRoutingModule)(); };
IndexPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: IndexPageRoutingModule });
IndexPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](IndexPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _index_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-routing.module */ 8627);
/* harmony import */ var _index_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.page */ 754);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ 5642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class IndexPageModule {
}
IndexPageModule.ɵfac = function IndexPageModule_Factory(t) { return new (t || IndexPageModule)(); };
IndexPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: IndexPageModule });
IndexPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _index_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndexPageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](IndexPageModule, { declarations: [_index_page__WEBPACK_IMPORTED_MODULE_1__.IndexPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _index_routing_module__WEBPACK_IMPORTED_MODULE_0__.IndexPageRoutingModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);


class IndexPage {
    constructor() { }
    ngOnInit() {
    }
}
IndexPage.ɵfac = function IndexPage_Factory(t) { return new (t || IndexPage)(); };
IndexPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexPage, selectors: [["app-index"]], decls: 2, vars: 0, template: function IndexPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonRouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC5wYWdlLnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_index_index_module_ts.js.map