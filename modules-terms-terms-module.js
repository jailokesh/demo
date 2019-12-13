(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-terms-terms-module"],{

/***/ "./src/app/modules/terms/index.ts":
/*!****************************************!*\
  !*** ./src/app/modules/terms/index.ts ***!
  \****************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/modules/terms/pages/terms/terms.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_0__["TermsComponent"]; });

/* ......All Terms Export Features....... */



/***/ }),

/***/ "./src/app/modules/terms/pages/terms/terms.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/terms/pages/terms/terms.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terms-bg {\r\n    background-color: #f7f7f7;\r\n    min-height: 325px;\r\n}\r\n\r\n.img {\r\n    width: 400px;\r\n    height: 300px;\r\n}\r\n\r\n.heading-pad {\r\n    padding: 70px 200px 70px 80px;\r\n}\r\n\r\n.heading {\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    font-size: 42px;\r\n    color: #000000;\r\n}\r\n\r\n.heading-contend {\r\n    padding: 5px;\r\n}\r\n\r\n.para-pad {\r\n    padding: 30px 80px;\r\n}\r\n\r\n.para-pad p {\r\n    padding-bottom: 15px;\r\n    color: rgba(85, 85, 85, 0.819607843137255);\r\n    text-align: justify;\r\n}\r\n\r\n.grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    padding: 20px 80px;\r\n}\r\n\r\n.footBlogImgPad {\r\n    padding: 10px;\r\n}\r\n\r\n.innerGrid {\r\n    display: grid;\r\n    grid-template-columns: 20% 80%;\r\n}\r\n\r\n.footFont p {\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-size: 17px;\r\n    color: #7F7F7F;\r\n    text-align: justify;\r\n    padding: 10px 25px 0px 0px;\r\n}\r\n\r\n.footFont span {\r\n    font-weight: 300;\r\n    font-style: normal;\r\n    font-size: 21px;\r\n    color: #263043;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    .footBlogImg img {\r\n        width: 117px;\r\n        height: 130px;\r\n    }\r\n    .heading-pad,\r\n    .para-pad {\r\n        padding: 0px;\r\n    }\r\n    .footPadLeft,\r\n    .grid {\r\n        padding: 10px;\r\n    }\r\n\r\n    .heading {\r\n        font-size: 24px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy90ZXJtcy9wYWdlcy90ZXJtcy90ZXJtcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsMENBQTBDO0lBQzFDLG1CQUFtQjtBQUN2Qjs7QUFHQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBSUE7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0lBQ0E7O1FBRUksWUFBWTtJQUNoQjtJQUNBOztRQUVJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Rlcm1zL3BhZ2VzL3Rlcm1zL3Rlcm1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgIG1pbi1oZWlnaHQ6IDMyNXB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5oZWFkaW5nLXBhZCB7XHJcbiAgICBwYWRkaW5nOiA3MHB4IDIwMHB4IDcwcHggODBweDtcclxufVxyXG5cclxuLmhlYWRpbmcge1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uaGVhZGluZy1jb250ZW5kIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnBhcmEtcGFkIHtcclxuICAgIHBhZGRpbmc6IDMwcHggODBweDtcclxufVxyXG5cclxuLnBhcmEtcGFkIHAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBjb2xvcjogcmdiYSg4NSwgODUsIDg1LCAwLjgxOTYwNzg0MzEzNzI1NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5cclxuLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDgwcHg7XHJcbn1cclxuXHJcblxyXG4uZm9vdEJsb2dJbWdQYWQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmlubmVyR3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgODAlO1xyXG59XHJcblxyXG4uZm9vdEZvbnQgcCB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgY29sb3I6ICM3RjdGN0Y7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5mb290Rm9udCBzcGFuIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjogIzI2MzA0MztcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuZm9vdEJsb2dJbWcgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTE3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIH1cclxuICAgIC5oZWFkaW5nLXBhZCxcclxuICAgIC5wYXJhLXBhZCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3RQYWRMZWZ0LFxyXG4gICAgLmdyaWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/terms/pages/terms/terms.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/terms/pages/terms/terms.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row terms-bg\">\n        <div class=\"col-xl-8\">\n            <div class=\"heading-pad\">\n                <span class=\"heading\">Term & Condition</span>\n                <p class=\"heading-contend\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley\n                </p>\n            </div>\n        </div>\n        <div class=\"col-xl-4\">\n            <div>\n                <img class=\"img-fluid\" src=\"assets/Images/Terms & Condition/1.png\">\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xl-12\">\n            <div class=\"para-pad\">\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\n                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,\n                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and\n                    1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum\n                    dolor sit amet..\", comes from a line in section 1.10.32.t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less\n                    normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search\n                    for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader\n                    will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making\n                    it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions\n                    have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The\n                    point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors\n                    now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected\n                    humour and the like).t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,\n                    as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover\n                    many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will be distracted by the readable\n                    content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many\n                    desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes\n                    by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it\n                    has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model\n                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established\n                    fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content\n                    here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.\n                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will be distracted by the readable content of a page when looking at\n                    its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web\n                    page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose\n                    (injected humour and the like).t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution\n                    of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'\n                    will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will be distracted\n                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable\n                    English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the\n                    years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied\n                    by English versions from the 1914 translation by H. Rackham.\n                </p>\n                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage\n                    of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator\n                    on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,\n                    injected humour, or non-characteristic words etc.</p>\n                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using\n                    'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still\n                    in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).t is a long established fact that a reader will be distracted by the readable content of a page\n                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing\n                    packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,\n                    sometimes on purpose (injected humour and the like).</p>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/terms/pages/terms/terms.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/terms/pages/terms/terms.component.ts ***!
  \**************************************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
    };
    TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms',
            template: __webpack_require__(/*! ./terms.component.html */ "./src/app/modules/terms/pages/terms/terms.component.html"),
            styles: [__webpack_require__(/*! ./terms.component.css */ "./src/app/modules/terms/pages/terms/terms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());



/***/ }),

/***/ "./src/app/modules/terms/terms-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/terms/terms-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TermsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsRoutingModule", function() { return TermsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _terms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../terms */ "./src/app/modules/terms/index.ts");





var routes = [
    {
        path: '',
        component: _terms__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var TermsRoutingModule = /** @class */ (function () {
    function TermsRoutingModule() {
    }
    TermsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], TermsRoutingModule);
    return TermsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/terms/terms.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/terms/terms.module.ts ***!
  \***********************************************/
/*! exports provided: TermsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsModule", function() { return TermsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _terms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-routing.module */ "./src/app/modules/terms/terms-routing.module.ts");
/* harmony import */ var _pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/terms/terms.component */ "./src/app/modules/terms/pages/terms/terms.component.ts");





var TermsModule = /** @class */ (function () {
    function TermsModule() {
    }
    TermsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_terms_terms_component__WEBPACK_IMPORTED_MODULE_4__["TermsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _terms_routing_module__WEBPACK_IMPORTED_MODULE_3__["TermsRoutingModule"]
            ]
        })
    ], TermsModule);
    return TermsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-terms-terms-module.js.map