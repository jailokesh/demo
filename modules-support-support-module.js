(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-support-support-module"],{

/***/ "./src/app/modules/support/index.ts":
/*!******************************************!*\
  !*** ./src/app/modules/support/index.ts ***!
  \******************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_support_support_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/support/support.component */ "./src/app/modules/support/pages/support/support.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return _pages_support_support_component__WEBPACK_IMPORTED_MODULE_0__["SupportComponent"]; });

/* ......All Support Export Features....... */



/***/ }),

/***/ "./src/app/modules/support/pages/support/support.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/support/pages/support/support.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    /* support Panel */\r\n    \r\n    .center-align {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 100%;\r\n    }\r\n    \r\n    .login-panel {\r\n        padding: 20px;\r\n        width: 100%;\r\n    }\r\n    \r\n    .l-header {\r\n        font-size: 22px;\r\n        color: #212121;\r\n        font-weight: 300;\r\n        letter-spacing: 0.8px;\r\n        margin-bottom: 5px !important;\r\n    }\r\n    \r\n    .l-header-hint {\r\n        font-size: 12px;\r\n        color: #6d6d6dc2;\r\n    }\r\n    \r\n    .label {\r\n        font-size: 13px;\r\n        color: #333333;\r\n        margin-bottom: 10px !important;\r\n    }\r\n    \r\n    .i-login {\r\n        margin: 15px 0px;\r\n    }\r\n    \r\n    .drop-d {\r\n        background-color: #f6f9f7;\r\n        height: 54px;\r\n    }\r\n    \r\n    .container {\r\n        margin: 0 auto;\r\n        max-width: 1200px;\r\n    }\r\n    \r\n    /* Border Input */\r\n    \r\n    .i-panel {\r\n        position: relative;\r\n    }\r\n    \r\n    :focus {\r\n        outline: none;\r\n    }\r\n    \r\n    input[type=\"text\"] {\r\n        font: 15px/24px 'Roboto', sans-serif;\r\n        color: #333;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        letter-spacing: 1px;\r\n        background-color: #f6f9f7;\r\n    }\r\n    \r\n    input[type=\"number\"] {\r\n        font: 15px/24px 'Roboto', sans-serif;\r\n        color: #333;\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n        letter-spacing: 1px;\r\n        background-color: #f6f9f7;\r\n    }\r\n    \r\n    .input-effect {\r\n        border: 1px solid transparent;\r\n        padding: 14px 12px;\r\n        transition: 0.4s;\r\n        border-radius: 4px;\r\n    }\r\n    \r\n    .input-effect~.focus-border:before,\r\n    .input-effect~.focus-border:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 0;\r\n        left: 50%;\r\n        width: 0;\r\n        height: 2px;\r\n        background-color: #66bb6a;\r\n        transition: 0.4s;\r\n    }\r\n    \r\n    .input-effect~.focus-border:after {\r\n        top: auto;\r\n        bottom: 0;\r\n    }\r\n    \r\n    .input-effect~.focus-border i:before,\r\n    .input-effect~.focus-border i:after {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 0;\r\n        width: 2px;\r\n        height: 0;\r\n        background-color: #66bb6a;\r\n        transition: 0.6s;\r\n    }\r\n    \r\n    .input-effect~.focus-border i:after {\r\n        left: auto;\r\n        right: 0;\r\n    }\r\n    \r\n    .input-effect:focus~.focus-border:before,\r\n    .input-effect:focus~.focus-border:after {\r\n        left: 0;\r\n        width: 100%;\r\n        transition: 0.4s;\r\n    }\r\n    \r\n    .input-effect:focus~.focus-border i:before,\r\n    .input-effect:focus~.focus-border i:after {\r\n        top: 0;\r\n        height: 100%;\r\n        transition: 0.6s;\r\n    }\r\n    \r\n    .l-button {\r\n        margin-top: 30px;\r\n    }\r\n    \r\n    .btn-success {\r\n        border-radius: 50px;\r\n        padding-left: 35px;\r\n        padding-right: 35px;\r\n    }\r\n    \r\n    .l-account-t {\r\n        margin-top: 30px;\r\n    }\r\n    \r\n    .l-account-t p {\r\n        font-size: 13px;\r\n        color: #6d6d6dc2;\r\n    }\r\n    \r\n    .l-img-center {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        height: 100%;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zdXBwb3J0L3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLGtCQUFrQjs7SUFFbEI7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQiw2QkFBNkI7SUFDakM7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7SUFDckI7O0lBQ0EsaUJBQWlCOztJQUVqQjtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQztRQUNHLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxvQ0FBb0M7UUFDcEMsV0FBVztRQUNYLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLG9DQUFvQztRQUNwQyxXQUFXO1FBQ1gsV0FBVztRQUNYLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBOztRQUVJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7UUFDVCxRQUFRO1FBQ1IsV0FBVztRQUNYLHlCQUF5QjtRQUN6QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsU0FBUztJQUNiOztJQUVBOztRQUVJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLE9BQU87UUFDUCxVQUFVO1FBQ1YsU0FBUztRQUNULHlCQUF5QjtRQUN6QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsUUFBUTtJQUNaOztJQUVBOztRQUVJLE9BQU87UUFDUCxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCOztJQUVBOztRQUVJLE1BQU07UUFDTixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsWUFBWTtJQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VwcG9ydC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAvKiBzdXBwb3J0IFBhbmVsICovXHJcbiAgICBcclxuICAgIC5jZW50ZXItYWxpZ24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbi1wYW5lbCB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmwtaGVhZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sLWhlYWRlci1oaW50IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM2ZDZkNmRjMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaS1sb2dpbiB7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRyb3AtZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmNztcclxuICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTIwMHB4O1xyXG4gICAgfVxyXG4gICAgLyogQm9yZGVyIElucHV0ICovXHJcbiAgICBcclxuICAgIC5pLXBhbmVsIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICA6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgICAgICBmb250OiAxNXB4LzI0cHggJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY5Zjc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gICAgICAgIGZvbnQ6IDE1cHgvMjRweCAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjlmNztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWVmZmVjdCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxMnB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZWZmZWN0fi5mb2N1cy1ib3JkZXI6YmVmb3JlLFxyXG4gICAgLmlucHV0LWVmZmVjdH4uZm9jdXMtYm9yZGVyOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlucHV0LWVmZmVjdH4uZm9jdXMtYm9yZGVyOmFmdGVyIHtcclxuICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZWZmZWN0fi5mb2N1cy1ib3JkZXIgaTpiZWZvcmUsXHJcbiAgICAuaW5wdXQtZWZmZWN0fi5mb2N1cy1ib3JkZXIgaTphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC1lZmZlY3R+LmZvY3VzLWJvcmRlciBpOmFmdGVyIHtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXQtZWZmZWN0OmZvY3Vzfi5mb2N1cy1ib3JkZXI6YmVmb3JlLFxyXG4gICAgLmlucHV0LWVmZmVjdDpmb2N1c34uZm9jdXMtYm9yZGVyOmFmdGVyIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC1lZmZlY3Q6Zm9jdXN+LmZvY3VzLWJvcmRlciBpOmJlZm9yZSxcclxuICAgIC5pbnB1dC1lZmZlY3Q6Zm9jdXN+LmZvY3VzLWJvcmRlciBpOmFmdGVyIHtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNnM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sLWJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1zdWNjZXNzIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubC1hY2NvdW50LXQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sLWFjY291bnQtdCBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICM2ZDZkNmRjMjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmwtaW1nLWNlbnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/support/pages/support/support.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/support/pages/support/support.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row login-bg\">\n        <div class=\"col-xl-4\">\n            <div class=\"l-img-center\">\n                <img src=\"assets/Images/Support/Support IMG.png\" class=\"img-fluid\" alt=\"Padholeekho Support\">\n            </div>\n        </div>\n        <div class=\"col-xl-8\">\n            <div class=\"center-align\">\n                <div class=\"login-panel\">\n                    <p class=\"l-header\">Welcome to our Helpdesk :)</p>\n                    <p class=\"l-header-hint\">Complete this Enquiry Form to obtain additional information about our services or send personal complaints. We will analyze your enquiry and return to you shortly by email or phone.</p>\n                    <form [formGroup]=\"supportForm\" (keyup.enter)=\"support()\">\n                        <div class=\"row\">\n                            <div class=\"col-xl-6\">\n                                <div class=\"i-login\">\n                                    <p class=\"label\">User Name</p>\n                                    <div class=\"i-panel\">\n                                        <input class=\"input-effect\" type=\"text\" formControlName=\"name\">\n                                        <span class=\"focus-border\"><i></i> </span>\n                                    </div>\n                                    <div *ngIf=\"(submitted || f.name.touched) && f.name.errors\" class=\"error\">\n                                        <div [hidden]=\"!f.name.errors.required\">User Name is required<small>*</small></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-6\">\n                                <div class=\"i-login\">\n                                    <p class=\"label\">Email ID</p>\n                                    <div class=\"i-panel\">\n                                        <input class=\"input-effect\" type=\"text\" formControlName=\"email\">\n                                        <span class=\"focus-border\"><i></i></span>\n                                    </div>\n                                    <div *ngIf=\"(submitted || f.email.touched) && f.email.errors\" class=\"error\">\n                                        <div [hidden]=\"!f.email.errors.required\">Email is required<small>*</small></div>\n                                        <div [hidden]=\"!f.email.errors.email\">Email must be a valid email Address.</div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <p class=\"l-header-hint\">Please be specific of the enquiry you want to submit in this Enquiry Form, so we can return to you\n                            <br>fast with the information you are looking for. Thank you!</p>\n                        <div class=\"row\">\n                            <div class=\"col-xl-6\">\n                                <div class=\"i-login\">\n                                    <p class=\"label\">Preparation for</p>\n                                    <div class=\"i-panel\">\n                                        <select class=\"form-control drop-d input-effect\" formControlName=\"super_course_id\">\n                                            <option value=\"2\">CAT</option>\n                                            <option value=\"4\">IAS</option>\n                                            <option value=\"5\">MBA</option>\n                                        </select>\n                                        <span class=\"focus-border\"><i></i></span>\n                                    </div>\n                                    <div *ngIf=\"(submitted || f.super_course_id.touched) && f.super_course_id.errors\" class=\"error\">\n                                        <div [hidden]=\"!f.super_course_id.errors.required\">select your Preparation<small>*</small></div>\n                                    </div>\n                                </div>\n                                <p class=\"l-header-hint\">Do you want to be contacted by phone?\n                                    <span class=\"float-right\">\n                                        <label class=\"pure-material-radio\">\n                                            <input type=\"radio\" checked=\"checked\" formControlName=\"via_phone\" name=\"via_phone\" value='yes'>\n                                            <span>Yes</span>\n                                    </label>\n\n                                    <label class=\"pure-material-radio\">\n                                            <input type=\"radio\" name=\"via_phone\" formControlName=\"via_phone\" value=\"no\">\n                                            <span>No</span>\n                                        </label>\n                                    </span>\n                                </p>\n                                <div class=\"i-login\">\n                                    <p class=\"label\">Mobile Number</p>\n                                    <div class=\"i-panel\">\n                                        <input class=\"input-effect\" type=\"number\" formControlName=\"phone\">\n                                        <span class=\"focus-border\"> <i></i></span>\n                                    </div>\n                                    <div *ngIf=\"(submitted || f.phone.touched) && f.phone.errors\" class=\"error\">\n                                        <div [hidden]=\"!f.phone.errors.required\">Phone is required<small>*</small></div>\n                                        <div [hidden]=\"!f.phone.errors.pattern\">Phone number not valid.</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-xl-6\">\n                                <div class=\"i-login\">\n                                    <p class=\"label\">Support Details</p>\n                                    <div class=\"i-panel\">\n                                        <textarea class=\"form-control\" rows=\"7\" id=\"comment\" name=\"text\" formControlName=\"support\"></textarea>\n                                        <span class=\"focus-border\"> <i></i></span>\n                                    </div>\n                                    <div *ngIf=\"(submitted || f.support.touched) && f.support.errors\" class=\"error\">\n                                        <div [hidden]=\"!f.support.errors.required\">Enquiry is required<small>*</small></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"l-button text-right\">\n                            <button type=\"button\" class=\"btn btn-success ripple\" (click)=\"support()\">Need Support</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<app-download></app-download>\n<app-testimonial></app-testimonial>"

/***/ }),

/***/ "./src/app/modules/support/pages/support/support.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/support/pages/support/support.component.ts ***!
  \********************************************************************/
/*! exports provided: SupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportComponent", function() { return SupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var SupportComponent = /** @class */ (function () {
    function SupportComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.supportForm = this.formBuilder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            super_course_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
            support: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            via_phone: [""],
        });
    }
    Object.defineProperty(SupportComponent.prototype, "f", {
        get: function () {
            return this.supportForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SupportComponent.prototype.ngOnInit = function () {
    };
    SupportComponent.prototype.support = function () {
        this.submitted = true;
        if (this.supportForm.invalid) {
            return;
        }
        console.log(this.supportForm.value);
    };
    SupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-support',
            template: __webpack_require__(/*! ./support.component.html */ "./src/app/modules/support/pages/support/support.component.html"),
            styles: [__webpack_require__(/*! ./support.component.css */ "./src/app/modules/support/pages/support/support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], SupportComponent);
    return SupportComponent;
}());



/***/ }),

/***/ "./src/app/modules/support/support-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/support/support-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SupportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportRoutingModule", function() { return SupportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../support */ "./src/app/modules/support/index.ts");





var routes = [
    {
        path: '',
        component: _support__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"],
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
];
var SupportRoutingModule = /** @class */ (function () {
    function SupportRoutingModule() {
    }
    SupportRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ]
        })
    ], SupportRoutingModule);
    return SupportRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/support/support.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/support/support.module.ts ***!
  \***************************************************/
/*! exports provided: SupportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModule", function() { return SupportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_support_support_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/support/support.component */ "./src/app/modules/support/pages/support/support.component.ts");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/modules/support/support-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SupportModule = /** @class */ (function () {
    function SupportModule() {
    }
    SupportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_support_support_component__WEBPACK_IMPORTED_MODULE_3__["SupportComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _support_routing_module__WEBPACK_IMPORTED_MODULE_4__["SupportRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ]
        })
    ], SupportModule);
    return SupportModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-support-support-module.js.map