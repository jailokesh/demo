(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-otp-otp-module"],{

/***/ "./src/app/modules/otp/index.ts":
/*!**************************************!*\
  !*** ./src/app/modules/otp/index.ts ***!
  \**************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_otp_otp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/otp/otp.component */ "./src/app/modules/otp/pages/otp/otp.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return _pages_otp_otp_component__WEBPACK_IMPORTED_MODULE_0__["OtpComponent"]; });

/* ......All OTP Export Features....... */



/***/ }),

/***/ "./src/app/modules/otp/otp-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/otp/otp-routing.module.ts ***!
  \***************************************************/
/*! exports provided: OtpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpRoutingModule", function() { return OtpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _otp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../otp */ "./src/app/modules/otp/index.ts");





var routes = [
    {
        path: '',
        component: _otp__WEBPACK_IMPORTED_MODULE_4__["OtpComponent"],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var OtpRoutingModule = /** @class */ (function () {
    function OtpRoutingModule() {
    }
    OtpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], OtpRoutingModule);
    return OtpRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/otp/otp.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/otp/otp.module.ts ***!
  \*******************************************/
/*! exports provided: OtpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpModule", function() { return OtpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_otp_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/otp/otp.component */ "./src/app/modules/otp/pages/otp/otp.component.ts");
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./otp-routing.module */ "./src/app/modules/otp/otp-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var OtpModule = /** @class */ (function () {
    function OtpModule() {
    }
    OtpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_otp_otp_component__WEBPACK_IMPORTED_MODULE_3__["OtpComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _otp_routing_module__WEBPACK_IMPORTED_MODULE_4__["OtpRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ]
        })
    ], OtpModule);
    return OtpModule;
}());



/***/ }),

/***/ "./src/app/modules/otp/pages/otp/otp.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/otp/pages/otp/otp.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".otp-bg {\r\n    background: url(/assets/Images/Login/BG3.png) no-repeat;\r\n    background-position: right top;\r\n}\r\n\r\n.l-img-center {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100%;\r\n}\r\n\r\n.container {\r\n    margin: 0 auto;\r\n    max-width: 1200px;\r\n}\r\n\r\n/* OTP Panel */\r\n\r\n#wrapper { \r\n    font-size: 1.5rem;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    color: #333;\r\n}\r\n\r\n#wrapper #dialog {\r\n    /* border: solid 1px #ccc; */\r\n    margin: 10px auto;\r\n    padding: 20px 30px;\r\n    display: inline-block;\r\n    /* box-shadow: 0 0 4px #ccc;\r\n    background-color: #FAF8F8; */\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n#wrapper #dialog h3 {\r\n    margin: 0 0 10px;\r\n    padding: 0;\r\n    line-height: 1.25;\r\n    font-size: 24px;\r\n}\r\n\r\n#wrapper #dialog span {\r\n    font-size: 90%;\r\n}\r\n\r\n#wrapper #dialog #form {\r\n    max-width: 240px;\r\n    margin: 25px auto 0;\r\n}\r\n\r\n#wrapper #dialog #form input {\r\n    margin: 0 5px;\r\n    text-align: center;\r\n    line-height: 51px;\r\n    font-size: 50px;\r\n    border: solid 1px #ccc;\r\n    box-shadow: 0 0 5px #ccc inset;\r\n    outline: none;\r\n    width: 20%;\r\n    transition: all 0.2s ease-in-out;\r\n    border-radius: 3px;\r\n}\r\n\r\n#wrapper #dialog #form input:focus {\r\n    border-color: #28a745;\r\n    box-shadow: 0 0 5px #28a745 inset;\r\n}\r\n\r\n#wrapper #dialog #form input::-moz-selection {\r\n    background: transparent;\r\n}\r\n\r\n#wrapper #dialog #form input::selection {\r\n    background: transparent;\r\n}\r\n\r\n#wrapper #dialog #form button {\r\n    margin: 30px 0 50px;\r\n    width: 100%;\r\n    padding: 6px;\r\n    background-color: #268b45;\r\n    border: none;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#wrapper #dialog #form button:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n#wrapper #dialog div {\r\n    position: relative;\r\n    z-index: 1;\r\n    font-size: 16px;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n    #wrapper #dialog {\r\n        padding: 20px 0px;\r\n    }\r\n\r\n    #wrapper #dialog h3 {\r\n        font-size: 22px;\r\n    }\r\n\r\n    #wrapper #dialog span {\r\n        font-size: 18px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9vdHAvcGFnZXMvb3RwL290cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdURBQXVEO0lBQ3ZELDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUdBLGNBQWM7O0FBRWQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckI7Z0NBQzRCO0lBQzVCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL290cC9wYWdlcy9vdHAvb3RwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3RwLWJnIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL0ltYWdlcy9Mb2dpbi9CRzMucG5nKSBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCB0b3A7XHJcbn1cclxuXHJcbi5sLWltZy1jZW50ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG59XHJcblxyXG5cclxuLyogT1RQIFBhbmVsICovXHJcblxyXG4jd3JhcHBlciB7IFxyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbiN3cmFwcGVyICNkaWFsb2cge1xyXG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggI2NjYzsgKi9cclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLyogYm94LXNoYWRvdzogMCAwIDRweCAjY2NjO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRjhGODsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiN3cmFwcGVyICNkaWFsb2cgaDMge1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuI3dyYXBwZXIgI2RpYWxvZyBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcblxyXG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIHtcclxuICAgIG1heC13aWR0aDogMjQwcHg7XHJcbiAgICBtYXJnaW46IDI1cHggYXV0byAwO1xyXG59XHJcblxyXG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIGlucHV0IHtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTFweDtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4ICNjY2MgaW5zZXQ7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4jd3JhcHBlciAjZGlhbG9nICNmb3JtIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggIzI4YTc0NSBpbnNldDtcclxufVxyXG5cclxuI3dyYXBwZXIgI2RpYWxvZyAjZm9ybSBpbnB1dDo6LW1vei1zZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiN3cmFwcGVyICNkaWFsb2cgI2Zvcm0gaW5wdXQ6OnNlbGVjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI3dyYXBwZXIgI2RpYWxvZyAjZm9ybSBidXR0b24ge1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgNTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2OGI0NTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbiN3cmFwcGVyICNkaWFsb2cgI2Zvcm0gYnV0dG9uOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbiN3cmFwcGVyICNkaWFsb2cgZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICN3cmFwcGVyICNkaWFsb2cge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICN3cmFwcGVyICNkaWFsb2cgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAjd3JhcHBlciAjZGlhbG9nIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/otp/pages/otp/otp.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/otp/pages/otp/otp.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row otp-bg\">\n        <div class=\"col-xl-4\">\n            <div class=\"l-img-center\">\n                <img src=\"assets/Images/Login/Login.png\" class=\"img-fluid\" alt=\"Padholeekho Login\">\n            </div>\n        </div>\n        <div class=\"col-xl-6\">\n            <div id=\"wrapper\">\n                <div id=\"dialog\">\n                    <h3>Please enter the 4-digit verification code we sent via SMS:</h3>\n                    <span>(we want to make sure it's you before we proceed)</span>\n                    <form [formGroup]=\"otpForm\" (keyup.enter)=\"verifyOtp()\" class=\"form\">\n                        <div id=\"form\">\n                            <input type=\"text\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" formControlName=\"oneInputOtp\" />\n                            <input type=\"text\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" formControlName=\"twoInputOtp\" />\n                            <input type=\"text\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" formControlName=\"threeInputOtp\" />\n                            <input type=\"text\" maxLength=\"1\" size=\"1\" min=\"0\" max=\"9\" formControlName=\"fourInputOtp\" />\n                            <button class=\"btn btn-primary btn-embossed ripple\" (click)=\"verifyOtp()\">Verify</button> \n                        </div>\n                    </form>\n                    <div>\n                        Didn't receive the code?<br />\n                        <a (click)=\"resendOtp()\">Send code again</a><br />\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-2\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/otp/pages/otp/otp.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/otp/pages/otp/otp.component.ts ***!
  \********************************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/modules/otp/services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var OtpComponent = /** @class */ (function () {
    function OtpComponent(router, activatedRoute, otpService, formBuilder) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.otpService = otpService;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.paramValue = {};
        this.activatedRoute.params.subscribe(function (params) {
            if (params.user_id && params.pageName) {
                _this.paramValue = params;
            }
            else {
                _this.router.navigate(['auth/home']);
            }
        });
        this.otpForm = this.formBuilder.group({
            oneInputOtp: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(9), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]+$/)]],
            twoInputOtp: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(9), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]+$/)]],
            threeInputOtp: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(9), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]+$/)]],
            fourInputOtp: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(9), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[0-9]+$/)]]
        });
    }
    Object.defineProperty(OtpComponent.prototype, "f", {
        get: function () { return this.otpForm.controls; },
        enumerable: true,
        configurable: true
    });
    OtpComponent.prototype.ngOnInit = function () {
    };
    // Register & Forget OTP Function
    OtpComponent.prototype.verifyOtp = function () {
        var _this = this;
        this.submitted = true;
        if (this.otpForm.invalid) {
            return;
        }
        var passData = {};
        passData[this.paramValue['pageName'] + "_exp"] = "" + (this.otpForm.value.oneInputOtp + this.otpForm.value.twoInputOtp + this.otpForm.value.threeInputOtp + this.otpForm.value.fourInputOtp);
        this.paramValue['pageName'] == 'register' ? passData['temp_user_id'] = this.paramValue['user_id'] : passData['user_id'] = this.paramValue['user_id'];
        this.otpService.verifyOtpApi(passData, this.paramValue['pageName']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            if (response.status == 'success') {
                if (_this.paramValue['pageName'] == 'register') {
                    _this.router.navigate(['/auth/login']);
                }
                else {
                    _this.router.navigate(['/auth/login/updatePassword']);
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.error = error); })).subscribe();
    };
    OtpComponent.prototype.resendOtp = function () {
        var _this = this;
        this.otpService.resendOtpApi({ 'temp_user_id': this.paramValue['user_id'] }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) {
            console.log(response);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () { return _this.isLoading = false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.error = error); })).subscribe();
    };
    OtpComponent.prototype.ngAfterViewInit = function () {
        // $(function () {
        //   'use strict';
        //   let body = $('body');
        //   function goToNextInput(e) {
        //     let key = e.which,
        //       t = $(e.target),
        //       sib = t.next('input');
        //     if (key != 9 && (key < 48 || key > 57)) {
        //       e.preventDefault();
        //       return false;
        //     }
        //     if (key === 9) {
        //       return true;
        //     }
        //     if (!sib || !sib.length) {
        //       sib = body.find('input').eq(0);
        //     }
        //     sib.select().focus();
        //   }
        //   function onKeyDown(e) {
        //     let key = e.which;
        //     if (key === 9 || (key >= 48 && key <= 57)) {
        //       return true;
        //     }
        //     e.preventDefault();
        //     return false;
        //   }
        //   function onFocus(e) {
        //     $(e.target).select();
        //   }
        //   body.on('keyup', 'input', goToNextInput);
        //   body.on('keydown', 'input', onKeyDown);
        //   body.on('click', 'input', onFocus);
        // })
    };
    OtpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp',
            template: __webpack_require__(/*! ./otp.component.html */ "./src/app/modules/otp/pages/otp/otp.component.html"),
            styles: [__webpack_require__(/*! ./otp.component.css */ "./src/app/modules/otp/pages/otp/otp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services__WEBPACK_IMPORTED_MODULE_3__["OtpService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], OtpComponent);
    return OtpComponent;
}());



/***/ }),

/***/ "./src/app/modules/otp/services/index.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/otp/services/index.ts ***!
  \***********************************************/
/*! exports provided: OtpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_otp_otp_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/otp/otp.service */ "./src/app/modules/otp/services/otp/otp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OtpService", function() { return _services_otp_otp_service__WEBPACK_IMPORTED_MODULE_0__["OtpService"]; });

/* ......All OTP Services Export Features....... */



/***/ }),

/***/ "./src/app/modules/otp/services/otp/otp.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/otp/services/otp/otp.service.ts ***!
  \*********************************************************/
/*! exports provided: OtpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpService", function() { return OtpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/services */ "./src/app/core/services/index.ts");



var OtpService = /** @class */ (function () {
    function OtpService(apiService) {
        this.apiService = apiService;
    }
    OtpService.prototype.verifyOtpApi = function (data, pageName) {
        if (pageName == 'register') {
            return this.apiService.post('/api/rest/authentication/signup/verify', data);
        }
        return this.apiService.post('/api/rest/authentication/forgot-password/verify', data);
    };
    OtpService.prototype.resendOtpApi = function (data) {
        return this.apiService.post('/api/rest/authentication/signup/resend', data);
    };
    OtpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], OtpService);
    return OtpService;
}());



/***/ })

}]);
//# sourceMappingURL=modules-otp-otp-module.js.map