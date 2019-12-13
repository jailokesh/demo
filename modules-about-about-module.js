(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-about-about-module"],{

/***/ "./src/app/modules/about/about-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/about/about-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AboutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutRoutingModule", function() { return AboutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../about */ "./src/app/modules/about/index.ts");





var routes = [
    {
        path: '',
        component: _about__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var AboutRoutingModule = /** @class */ (function () {
    function AboutRoutingModule() {
    }
    AboutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], AboutRoutingModule);
    return AboutRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/about/about.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/about/about.module.ts ***!
  \***********************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/modules/about/pages/about/about.component.ts");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-routing.module */ "./src/app/modules/about/about-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






var AboutModule = /** @class */ (function () {
    function AboutModule() {
    }
    AboutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _about_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./src/app/modules/about/index.ts":
/*!****************************************!*\
  !*** ./src/app/modules/about/index.ts ***!
  \****************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/modules/about/pages/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _pages_about_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]; });

/* ......All About Us Export Features....... */



/***/ }),

/***/ "./src/app/modules/about/pages/about/about.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/about/pages/about/about.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-section-one {\r\n    margin-top: 9%;\r\n}\r\n\r\n.about-section-one h3 {\r\n    margin-bottom: 15px;\r\n    color: #333333;\r\n    font-size: 30px;\r\n    font-weight: 300;\r\n}\r\n\r\n.about-section-one p {\r\n    margin-bottom: 15px;\r\n    font-weight: 300;\r\n}\r\n\r\n.about-section-one h4 {\r\n    border-top: 1px dashed #333;\r\n    border-bottom: 1px dashed #333;\r\n    padding: 8px 0;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n}\r\n\r\n.about-section-one ul {\r\n    padding-left: 0px;\r\n    margin-top: 20px;\r\n}\r\n\r\n.about-section-one li {\r\n    list-style-type: none;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.about-section-one li i {\r\n    color: #268b45;\r\n}\r\n\r\n@media (min-width: 320px) and (max-width: 480px) {\r\n  \r\n\r\n    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hYm91dC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTs7OztFQUlFIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hYm91dC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXNlY3Rpb24tb25lIHtcclxuICAgIG1hcmdpbi10b3A6IDklO1xyXG59XHJcblxyXG4uYWJvdXQtc2VjdGlvbi1vbmUgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmFib3V0LXNlY3Rpb24tb25lIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5hYm91dC1zZWN0aW9uLW9uZSBoNCB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZGFzaGVkICMzMzM7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMzMzM7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5hYm91dC1zZWN0aW9uLW9uZSB1bCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1zZWN0aW9uLW9uZSBsaSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5hYm91dC1zZWN0aW9uLW9uZSBsaSBpIHtcclxuICAgIGNvbG9yOiAjMjY4YjQ1O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICBcclxuXHJcbiAgICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/modules/about/pages/about/about.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/about/pages/about/about.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row about-section-one\">\n        <div class=\"col-md-5\">\n            <h3>What is Lorem Ipsum?</h3>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has\n                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\n                desktop publishing\n            </p>\n            <div>\n                <h4>\n                    Unordered and Ordered List\n                </h4>\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <ul>\n                            <li><i class=\"fas fa-chevron-circle-right\"></i> Lorem Ipsum is simply</li>\n                            <li><i class=\"fas fa-chevron-circle-right\"></i> Lorem Ipsum is simply</li>\n                            <li><i class=\"fas fa-chevron-circle-right\"></i> Lorem Ipsum is simply</li>\n                            <li><i class=\"fas fa-chevron-circle-right\"></i> Lorem Ipsum is simply</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <ul>\n                            <li><i class=\"fas fa-chevron-circle-right\"></i> Lorem Ipsum is simply</li>\n                            <li><i class=\"fas fa-chevron-circle-right\"></i> Lorem Ipsum is simply</li>\n                            <li><i class=\"fas fa-chevron-circle-right\"></i> Lorem Ipsum is simply</li>\n                            <li><i class=\"fas fa-chevron-circle-right\"></i> Lorem Ipsum is simply</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-7\">\n            <img src=\"assets/Images/About/about.png\" class=\"img-fluid mx-auto d-block\" alt=\"About Image\">\n        </div>\n    </div>\n</div> \n<app-download></app-download>\n<app-testimonial></app-testimonial>"

/***/ }),

/***/ "./src/app/modules/about/pages/about/about.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/about/pages/about/about.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/modules/about/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/modules/about/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-about-about-module.js.map