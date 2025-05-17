"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_products_products_module_ts"],{

/***/ 986:
/*!*****************************************************!*\
  !*** ./src/app/products/products-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageRoutingModule": () => (/* binding */ ProductsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page */ 3854);



 // Update to ProductsComponent
const routes = [
    {
        path: '',
        component: _products_page__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent, // Use ProductsComponent here
    },
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductsPageRoutingModule);



/***/ }),

/***/ 8980:
/*!*********************************************!*\
  !*** ./src/app/products/products.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsPageModule": () => (/* binding */ ProductsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-routing.module */ 986);
/* harmony import */ var _products_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./products.page */ 3854);






 // Update to ProductsComponent
let ProductsPageModule = class ProductsPageModule {
};
ProductsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _products_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductsPageRoutingModule],
        declarations: [_products_page__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent], // Update to ProductsComponent
    })
], ProductsPageModule);



/***/ }),

/***/ 3854:
/*!*******************************************!*\
  !*** ./src/app/products/products.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products.page.html?ngResource */ 5418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _fireservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fireservice.service */ 9792);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);





let ProductsComponent = class ProductsComponent {
    constructor(fireService) {
        this.fireService = fireService;
        this.products = [];
        this.newProduct = {
            prodID: '',
            image: '',
            title: '',
            amount: 0,
            catID: '',
            qty: 0,
            item_total_amt: 0,
        };
        this.selectedProductId = null; // used to track if we're updating
    }
    ngOnInit() {
        this.loadProducts();
    }
    loadProducts() {
        this.fireService.firestore
            .collection('products')
            .valueChanges({ idField: 'id' })
            .subscribe((data) => {
            this.products = data;
        });
    }
    // Function to generate a 10-digit product ID
    generateProductId() {
        return Math.floor(Math.random() * 9000000000 + 1000000000).toString();
    }
    addOrUpdateProduct() {
        // Calculate total amount
        this.newProduct.item_total_amt =
            this.newProduct.amount * this.newProduct.qty;
        if (this.selectedProductId) {
            // Update existing product
            this.fireService.firestore
                .collection('products')
                .doc(this.selectedProductId) // Access the document by ID
                .update(this.newProduct)
                .then(() => {
                alert('Product updated successfully!');
                this.resetForm();
                this.loadProducts();
            })
                .catch((err) => {
                console.error('Error updating product:', err);
            });
        }
        else {
            // Add new product with generated product ID
            this.newProduct.prodID = this.generateProductId(); // Generate a 10-digit product ID
            // Set the new product in Firestore
            this.fireService.firestore
                .collection('products')
                .add(this.newProduct)
                .then(() => {
                alert('Product added successfully!');
                this.resetForm();
                this.loadProducts();
            })
                .catch((err) => {
                console.error('Error adding product:', err);
            });
        }
    }
    deleteProduct(docId) {
        this.fireService.firestore
            .collection('products')
            .doc(docId)
            .delete()
            .then(() => {
            alert('Product deleted');
            this.loadProducts();
        })
            .catch((err) => {
            console.error('Error deleting product:', err);
        });
    }
    updateProduct(product) {
        // 1) Load the product into the form
        this.selectedProductId = product.id;
        this.newProduct = Object.assign({}, product);
        // 2) Scroll up to the top of the ion-content
        this.content.scrollToTop(300); // 300ms animation
    }
    resetForm() {
        this.selectedProductId = null;
        this.newProduct = {
            prodID: '',
            image: '',
            title: '',
            amount: 0,
            catID: '',
            qty: 0,
            item_total_amt: 0,
        };
    }
};
ProductsComponent.ctorParameters = () => [
    { type: _fireservice_service__WEBPACK_IMPORTED_MODULE_1__.FireserviceService }
];
ProductsComponent.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, { static: false },] }]
};
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-products',
        template: _products_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], ProductsComponent);



/***/ }),

/***/ 5418:
/*!********************************************************!*\
  !*** ./src/app/products/products.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"shade\">\r\n    <ion-buttons slot=\"start\" class=\"menu_btn\" color=\"shade\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title style=\"text-align: center\">Products</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- Preview of the product being added/edited -->\r\n  <ion-card *ngIf=\"newProduct.title || newProduct.image\">\r\n    <ion-card-header>\r\n      <ion-card-title class=\"product-title\">\r\n        {{ newProduct.title }}\r\n      </ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <p>Amount: {{ newProduct.amount | currency:'ZAR':'symbol':'1.2-2' }}</p>\r\n      <p>Category ID: {{ newProduct.catID }}</p>\r\n      <img\r\n        *ngIf=\"newProduct.image\"\r\n        [src]=\"newProduct.image\"\r\n        alt=\"Preview Image\"\r\n        style=\"max-width: 100px; height: auto\"\r\n      />\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n  <!-- Form Inputs -->\r\n  <ion-item style=\"color: rgb(43, 41, 41)\">\r\n    <ion-label position=\"floating\">Product ID</ion-label>\r\n    <ion-input [(ngModel)]=\"newProduct.prodID\" type=\"text\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item style=\"color: rgb(43, 41, 41)\">\r\n    <ion-label position=\"floating\">Title</ion-label>\r\n    <ion-input [(ngModel)]=\"newProduct.title\" type=\"text\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item style=\"color: rgb(43, 41, 41)\">\r\n    <ion-label position=\"floating\">Amount</ion-label>\r\n    <ion-input [(ngModel)]=\"newProduct.amount\" type=\"number\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item style=\"color: rgb(43, 41, 41)\">\r\n    <ion-label position=\"floating\">Category ID</ion-label>\r\n    <ion-input [(ngModel)]=\"newProduct.catID\" type=\"text\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item style=\"color: rgb(43, 41, 41)\">\r\n    <ion-label position=\"floating\">Quantity</ion-label>\r\n    <ion-input [(ngModel)]=\"newProduct.qty\" type=\"number\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item style=\"color: rgb(43, 41, 41)\">\r\n    <ion-label position=\"floating\">Image URL</ion-label>\r\n    <ion-input [(ngModel)]=\"newProduct.image\" type=\"text\"></ion-input>\r\n  </ion-item>\r\n\r\n  <!-- Action Buttons -->\r\n  <ion-button expand=\"full\" (click)=\"addOrUpdateProduct()\">\r\n    {{ selectedProductId ? 'Update Product' : 'Add Product' }}\r\n  </ion-button>\r\n\r\n  <ion-button\r\n    expand=\"full\"\r\n    color=\"medium\"\r\n    *ngIf=\"selectedProductId\"\r\n    (click)=\"resetForm()\"\r\n  >\r\n    Cancel\r\n  </ion-button>\r\n\r\n  <!-- Display all saved products -->\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let product of products\">\r\n      <ion-label>\r\n        <h2 class=\"product-title\">{{ product.title }}</h2>\r\n        <p>Amount: {{ product.amount | currency:'ZAR':'symbol':'1.2-2' }}</p>\r\n        <p>Category ID: {{ product.catID }}</p>\r\n        <p>Quantity: {{ product.qty }}</p>\r\n      </ion-label>\r\n      <img\r\n        [src]=\"product.image\"\r\n        alt=\"Product Image\"\r\n        style=\"max-width: 60px; height: auto; margin-left: 10px\"\r\n      />\r\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"updateProduct(product)\">\r\n        Edit\r\n      </ion-button>\r\n      <ion-button\r\n        slot=\"end\"\r\n        color=\"danger\"\r\n        fill=\"clear\"\r\n        (click)=\"deleteProduct(product.id)\"\r\n      >\r\n        Delete\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<!-- Add custom CSS in the component's style -->\r\n<style>\r\n  .product-title {\r\n    color: black;\r\n    font-weight: bold;\r\n  }\r\n</style>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_products_products_module_ts.js.map