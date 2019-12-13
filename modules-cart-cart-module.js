(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-cart-cart-module"],{

/***/ "./src/app/modules/cart/cart-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/cart/cart-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart */ "./src/app/modules/cart/index.ts");





var routes = [
    {
        path: '',
        component: _cart__WEBPACK_IMPORTED_MODULE_4__["CartComponent"],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var CartRoutingModule = /** @class */ (function () {
    function CartRoutingModule() {
    }
    CartRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], CartRoutingModule);
    return CartRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/cart/cart.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/cart/cart.module.ts ***!
  \*********************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/modules/cart/pages/cart/cart.component.ts");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/modules/cart/cart-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");






var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cart_routing_module__WEBPACK_IMPORTED_MODULE_4__["CartRoutingModule"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], CartModule);
    return CartModule;
}());



/***/ }),

/***/ "./src/app/modules/cart/index.ts":
/*!***************************************!*\
  !*** ./src/app/modules/cart/index.ts ***!
  \***************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/modules/cart/pages/cart/cart.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_0__["CartComponent"]; });

/* ......All Cart Export Features....... */



/***/ }),

/***/ "./src/app/modules/cart/pages/cart/cart.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/cart/pages/cart/cart.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.Cart-section {\r\n    margin: 7% 0 0 0;\r\n}\r\n\r\n.Cart-table img {\r\n    width: 66px;\r\n    height: 49px;\r\n    border-radius: 4px;\r\n}\r\n\r\n.Cart-table tr:nth-child(even) {\r\n    background-color: #f2f2f2;\r\n}\r\n\r\n.Cart-table tr:hover {\r\n    background-color: #ddd;\r\n}\r\n\r\n.Cart-table td {\r\n    vertical-align: baseline;\r\n}\r\n\r\n.Cart-table th {\r\n    font-weight: 400;\r\n    border-top: none;\r\n}\r\n\r\n.item-row td {\r\n    padding: 0px .75rem;\r\n}\r\n\r\n.cont-shoping {\r\n    border-radius: 50px;\r\n    text-transform: capitalize;\r\n    padding: 9px 20px;\r\n    /* Safari */\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.cart-total {\r\n    width: 100%;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    padding: 9px 20px;\r\n    /* Safari */\r\n    transition-duration: 0.4s;\r\n    text-decoration: none;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.move-cart {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* Responsive CSS */\r\n\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n    .table-xs tr,\r\n    .table-xs td,\r\n    .table-xs tbody,\r\n    .table-xs thead,\r\n    .table-xs tfoot,\r\n    .table-xs th {\r\n        display: table;\r\n        width: 100%;\r\n        border-collapse: separate;\r\n    }\r\n    .table-xs>tbody tr:first-child {\r\n        position: absolute;\r\n        top: -9999px;\r\n        left: -9999px;\r\n    }\r\n    .table-xs td[title]:before {\r\n        content: attr(title)\": \";\r\n    }\r\n    .table-xs td:before {\r\n        white-space: nowrap;\r\n        width: 50%;\r\n        display: table-cell;\r\n        text-align: left;\r\n    }\r\n    .table-xs .item-row td:first-child,\r\n    .table-xs .item-row td:nth-child(2) {\r\n        border: 0 none;\r\n    }\r\n    .table-xs .item-row td:first-child {\r\n        border: 0 none;\r\n    }\r\n    .table-xs .item-row td:last-child {\r\n        /* background: #eee;\r\n\t\tborder-bottom: 2px solid #a2a2a2; */\r\n        font-weight: 400;\r\n    }\r\n    .table-xs .item-row img {\r\n        margin-top: 15px;\r\n    }\r\n    .table-xs .total-row td {\r\n        display: table-cell;\r\n        width: 1%;\r\n        border-top: 0 none;\r\n        border-bottom: 3px double #a2a2a2;\r\n        font-weight: bold;\r\n        font-size: 1.5em;\r\n    }\r\n    .table-xs .total-row td:first-child {\r\n        width: 99%;\r\n    }\r\n    /* Buttons Responsive------------------------------------- */\r\n    .cont-shoping {\r\n        padding: 13px 15px !important;\r\n        font-size: 12px !important;\r\n    }\r\n    .sub-total {\r\n        font-size: 12px;\r\n        margin-bottom: 2px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jYXJ0L3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFFakIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFFakIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJOzs7Ozs7UUFNSSxjQUFjO1FBQ2QsV0FBVztRQUNYLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjtJQUNBOztRQUVJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJO3FDQUM2QjtRQUM3QixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsaUNBQWlDO1FBQ2pDLGlCQUFpQjtRQUNqQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBLDREQUE0RDtJQUM1RDtRQUNJLDZCQUE2QjtRQUM3QiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FydC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbn1cclxuXHJcbi5DYXJ0LXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiA3JSAwIDAgMDtcclxufVxyXG5cclxuLkNhcnQtdGFibGUgaW1nIHtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uQ2FydC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuLkNhcnQtdGFibGUgdHI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLkNhcnQtdGFibGUgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG4uQ2FydC10YWJsZSB0aCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxuLml0ZW0tcm93IHRkIHtcclxuICAgIHBhZGRpbmc6IDBweCAuNzVyZW07XHJcbn1cclxuXHJcbi5jb250LXNob3Bpbmcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAvKiBTYWZhcmkgKi9cclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FydC10b3RhbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICAvKiBTYWZhcmkgKi9cclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW92ZS1jYXJ0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcblxyXG4vKiBSZXNwb25zaXZlIENTUyAqL1xyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC50YWJsZS14cyB0cixcclxuICAgIC50YWJsZS14cyB0ZCxcclxuICAgIC50YWJsZS14cyB0Ym9keSxcclxuICAgIC50YWJsZS14cyB0aGVhZCxcclxuICAgIC50YWJsZS14cyB0Zm9vdCxcclxuICAgIC50YWJsZS14cyB0aCB7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIH1cclxuICAgIC50YWJsZS14cz50Ym9keSB0cjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogLTk5OTlweDtcclxuICAgICAgICBsZWZ0OiAtOTk5OXB4O1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXhzIHRkW3RpdGxlXTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IGF0dHIodGl0bGUpXCI6IFwiO1xyXG4gICAgfVxyXG4gICAgLnRhYmxlLXhzIHRkOmJlZm9yZSB7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIC50YWJsZS14cyAuaXRlbS1yb3cgdGQ6Zmlyc3QtY2hpbGQsXHJcbiAgICAudGFibGUteHMgLml0ZW0tcm93IHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGFibGUteHMgLml0ZW0tcm93IHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBib3JkZXI6IDAgbm9uZTtcclxuICAgIH1cclxuICAgIC50YWJsZS14cyAuaXRlbS1yb3cgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgLyogYmFja2dyb3VuZDogI2VlZTtcclxuXHRcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYTJhMmEyOyAqL1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICAudGFibGUteHMgLml0ZW0tcm93IGltZyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC50YWJsZS14cyAudG90YWwtcm93IHRkIHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHdpZHRoOiAxJTtcclxuICAgICAgICBib3JkZXItdG9wOiAwIG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IGRvdWJsZSAjYTJhMmEyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICB9XHJcbiAgICAudGFibGUteHMgLnRvdGFsLXJvdyB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDk5JTtcclxuICAgIH1cclxuICAgIC8qIEJ1dHRvbnMgUmVzcG9uc2l2ZS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuICAgIC5jb250LXNob3Bpbmcge1xyXG4gICAgICAgIHBhZGRpbmc6IDEzcHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnN1Yi10b3RhbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/cart/pages/cart/cart.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/cart/pages/cart/cart.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"Cart-section\">\n        <div class=\"row\">\n            <div class=\"col-xl-5\">\n                <img src=\"assets/Images/Cart/Cart.png\" class=\"img-fluid mx-auto d-block\" alt=\"Padholeekho Cart\">\n            </div>\n\n            <div class=\"col-xl-7\">\n                <div class=\"Cart-table\">\n                    <table class=\"table table-xs\">\n                        <tr>\n                            <th>Product</th>\n                            <th class=\"text-left\">Topic</th>\n                            <th class=\"text-center\">Price</th>\n                            <th class=\"text-center\">Offer Price</th>\n                            <th class=\"text-center\">Total Price</th>\n                            <th class=\"text-center\">Remove</th>\n                        </tr>\n                        <tr class=\"item-row\">\n                            <td class=\"text-left\">\n                                <img src=\"assets/Images/Cart/product.jpg\" class=\"img-fluid\" alt=\"Padholeekho Cart\">\n                            </td>\n                            <td class=\"text-left\">\n                                <p>Lorem Ipsum 1</p>\n                            </td>\n                            <td class=\"text-center\" title=\"Price\">3</td>\n                            <td class=\"text-center\" title=\"Offer Price\">2.00</td>\n                            <td class=\"text-center\" title=\"Total Price\">6.00</td>\n                            <td class=\"text-center\" title=\"Remove\"><i class=\"fas fa-trash-alt remove-product\"></i>\n                            </td>\n                        </tr>\n                        <tr class=\"item-row\">\n                            <td>\n                                <img src=\"assets/Images/Cart/product.jpg\" class=\"img-fluid\" alt=\"Padholeekho Cart\">\n                            </td>\n                            <td>\n                                <p class=\"text-left\">Lorem Ipsum 2</p>\n                            </td>\n                            <td class=\"text-center\" title=\"Price\">3</td>\n                            <td class=\"text-center\" title=\"Offer Price\">2.00</td>\n                            <td class=\"text-center\" title=\"Total Price\">6.00</td>\n                            <td class=\"text-center\" title=\"Remove\"><i class=\"fas fa-trash-alt remove-product\"></i>\n                            </td>\n                        </tr>\n                        <tr class=\"item-row\">\n                            <td>\n                                <img src=\"assets/Images/Cart/product.jpg\" class=\"img-fluid\" alt=\"Padholeekho Cart\">\n                            </td>\n                            <td>\n                                <p class=\"text-left\">Lorem Ipsum 3</p>\n                            </td>\n                            <td class=\"text-center\" title=\"Price\">3</td>\n                            <td class=\"text-center\" title=\"Offer Price\">2.00</td>\n                            <td class=\"text-center\" title=\"Total Price\">6.00</td>\n                            <td class=\"text-center\" title=\"Remove\"><i class=\"fas fa-trash-alt remove-product\"></i>\n                            </td>\n                        </tr>\n                        <tr class=\"item-row\">\n                            <td>\n                                <img src=\"assets/Images/Cart/product.jpg\" class=\"img-fluid\" alt=\"Padholeekho Cart\">\n                            </td>\n                            <td>\n                                <p class=\"text-left\">Lorem Ipsum 3</p>\n                            </td>\n                            <td class=\"text-center\" title=\"Price\">3</td>\n                            <td class=\"text-center\" title=\"Offer Price\">2.00</td>\n                            <td class=\"text-center\" title=\"Total Price\">6.00</td>\n                            <td class=\"text-center\" title=\"Remove\"><i class=\"fas fa-trash-alt remove-product\"></i>\n                            </td>\n                        </tr>\n                        <tr class=\"item-row\">\n                            <td>\n                                <img src=\"assets/Images/Cart/product.jpg\" class=\"img-fluid\" alt=\"Padholeekho Cart\">\n                            </td>\n                            <td>\n                                <p class=\"text-left\">Lorem Ipsum 3</p>\n                            </td>\n                            <td class=\"text-center\" title=\"Price\">3</td>\n                            <td class=\"text-center\" title=\"Offer Price\">2.00</td>\n                            <td class=\"text-center\" title=\"Total Price\">6.00</td>\n                            <td class=\"text-center\" title=\"Remove\"><i class=\"fas fa-trash-alt remove-product\"></i>\n                            </td>\n                        </tr>\n                    </table>\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <button type=\"button\" class=\"btn btn-success cont-shoping ripple\">Continue Shoping</button>\n                        </div>\n                        <div class=\"col-6\">\n                            <div>\n                                <p class=\"sub-total\">SUB TOTAL <span class=\"float-right\"> Rs- 2600.00 </span></p>\n                                <p class=\"sub-total\">DISCOUNT <span class=\"float-right\"> Rs- 300.00 </span></p>\n                                <p class=\"sub-total\">TOTAL <span class=\"float-right\"> Rs- 2300.00 </span></p>\n                                <div class=\"float-right move-cart\">\n                                    <button type=\"button\" class=\"btn btn-success cont-shoping ripple\">Check Out</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-download></app-download>\n<app-testimonial></app-testimonial>"

/***/ }),

/***/ "./src/app/modules/cart/pages/cart/cart.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/cart/pages/cart/cart.component.ts ***!
  \***********************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/modules/cart/pages/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/modules/cart/pages/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-cart-cart-module.js.map