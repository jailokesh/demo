(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-about-about-module~modules-cart-cart-module~modules-competitive-competitive-module~m~c69af3b1"],{

/***/ "./src/app/shared/alert/alert.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/alert/alert.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".notification {\r\n\tposition: fixed;\r\n\ttop: 20px;\r\n\tright: 20px; \r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: flex-end;\r\n\tcolor: hsl(0, 0%, 20%); \r\n\toverflow-x: hidden; \r\n\tpadding: 0.25rem;\r\n\tz-index: 1000;\r\n}\r\n\r\n.notification__message {\r\n\tdisplay: grid;\r\n\tgrid-gap: 0.2rem;\r\n\tgrid-template-columns: 1fr auto;\r\n\tpadding: 0.5rem 1rem;\r\n\tmargin: 1rem 0; \r\n\tbackground: hsl(0, 0%, 100%);\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0 0 5px hsla(0, 0%, 0%, 0.1), 0 2px 3px hsla(0, 0%, 0%, 0.1);\r\n\tborder-left: 0.5rem solid hsl(0, 0%, 100%); \r\n\ttransform: translateX(100%);\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransition-property: transform, opacity, visibility;\r\n\ttransition-duration: 0.7s;\r\n\ttransition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);\r\n}\r\n\r\n.notification__message h1 {\r\n\tfont-size: 1.1rem;\r\n\tfont-weight: 500;\r\n\ttext-transform: capitalize;\r\n}\r\n\r\n.notification__message p {\r\n\tmax-width: 320px;\r\n\tfont-size: 0.8rem;\r\n\tgrid-column: 1/-1;\r\n}\r\n\r\n.notification__message button {\r\n\tbackground: none;\r\n\tborder: none;\r\n\tcolor: inherit;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tgrid-column: 2/3;\r\n\tgrid-row: 1/2;\r\n\talign-self: center;\r\n\toutline: none;\r\n}\r\n\r\n.notification__message button svg {\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\n.notification.received .notification__message {\r\n\ttransform: translateX(0%);\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n}\r\n\r\n.message-info {\r\n\tborder-left-color: #90dee9;\r\n\tbackground: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle stroke=\"none\" fill=\"%2390dee9\" cx=\"50\" cy=\"22\" r=\"8\"></circle><path fill=\"none\" stroke=\"%2390dee9\" stroke-width=\"12\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M 45 40 h 5 v 40 h -5 h 10\"></path></svg>'), hsl(0, 0%, 100%);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: 35px;\r\n\tbackground-position: 100% 100%;\r\n}\r\n\r\n.message-success {\r\n\tborder-left-color: hsl(120, 67%, 74%);\r\n\tbackground: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path fill=\"none\" stroke=\"%2390e990\" stroke-width=\"12\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M 20 52 l 25 25 l 30 -50\"></path></svg>'), hsl(0, 0%, 100%);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: 40px;\r\n\tbackground-position: 100% 100%;\r\n}\r\n\r\n.message-warning {\r\n\tborder-left-color: hsl(54, 67%, 74%);\r\n\tbackground: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><path fill=\"none\" stroke=\"%23e9e090\" stroke-width=\"12\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M 50 18 v 40\"></path><circle stroke=\"none\" fill=\"%23e9e090\" cx=\"50\" cy=\"78\" r=\"8\"></circle></svg>'), hsl(0, 0%, 100%);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: 35px;\r\n\tbackground-position: 100% 100%;\r\n}\r\n\r\n.message-danger {\r\n\tborder-left-color: hsl(0, 67%, 74%);\r\n\tbackground: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><g transform=\"translate(50 50) rotate(45)\"><path fill=\"none\" stroke=\"%23e99090\" stroke-width=\"12\" stroke-linejoin=\"round\" stroke-linecap=\"round\" d=\"M 0 -30 v 60 z M -30 0 h 60\"></path></g></svg>'), hsl(0, 0%, 100%);\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: 35px;\r\n\tbackground-position: 100% 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2YsU0FBUztDQUNULFdBQVc7Q0FDWCxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLCtCQUErQjtDQUMvQixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLDRCQUE0QjtDQUM1QixtQkFBbUI7Q0FDbkIsd0VBQXdFO0NBQ3hFLDBDQUEwQztDQUMxQywyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixtREFBbUQ7Q0FDbkQseUJBQXlCO0NBQ3pCLGlFQUFpRTtBQUNsRTs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsbVZBQW1WO0NBQ25WLDRCQUE0QjtDQUM1QixxQkFBcUI7Q0FDckIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MscUNBQXFDO0NBQ3JDLDJRQUEyUTtDQUMzUSw0QkFBNEI7Q0FDNUIscUJBQXFCO0NBQ3JCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxxVUFBcVU7Q0FDclUsNEJBQTRCO0NBQzVCLHFCQUFxQjtDQUNyQiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsNlRBQTZUO0NBQzdULDRCQUE0QjtDQUM1QixxQkFBcUI7Q0FDckIsOEJBQThCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90aWZpY2F0aW9uIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAyMHB4O1xyXG5cdHJpZ2h0OiAyMHB4OyBcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cdGNvbG9yOiBoc2woMCwgMCUsIDIwJSk7IFxyXG5cdG92ZXJmbG93LXg6IGhpZGRlbjsgXHJcblx0cGFkZGluZzogMC4yNXJlbTtcclxuXHR6LWluZGV4OiAxMDAwO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uX19tZXNzYWdlIHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtZ2FwOiAwLjJyZW07XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcclxuXHRwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuXHRtYXJnaW46IDFyZW0gMDsgXHJcblx0YmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMDAlKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgMCA1cHggaHNsYSgwLCAwJSwgMCUsIDAuMSksIDAgMnB4IDNweCBoc2xhKDAsIDAlLCAwJSwgMC4xKTtcclxuXHRib3JkZXItbGVmdDogMC41cmVtIHNvbGlkIGhzbCgwLCAwJSwgMTAwJSk7IFxyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHRvcGFjaXR5OiAwO1xyXG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHksIHZpc2liaWxpdHk7XHJcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC43cztcclxuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNDQ1LCAwLjA1LCAwLjU1LCAwLjk1KTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbl9fbWVzc2FnZSBoMSB7XHJcblx0Zm9udC1zaXplOiAxLjFyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbl9fbWVzc2FnZSBwIHtcclxuXHRtYXgtd2lkdGg6IDMyMHB4O1xyXG5cdGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cdGdyaWQtY29sdW1uOiAxLy0xO1xyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uX19tZXNzYWdlIGJ1dHRvbiB7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcblx0d2lkdGg6IDM1cHg7XHJcblx0aGVpZ2h0OiAzNXB4O1xyXG5cdGdyaWQtY29sdW1uOiAyLzM7XHJcblx0Z3JpZC1yb3c6IDEvMjtcclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcblx0b3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbl9fbWVzc2FnZSBidXR0b24gc3ZnIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24ucmVjZWl2ZWQgLm5vdGlmaWNhdGlvbl9fbWVzc2FnZSB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuXHRvcGFjaXR5OiAxO1xyXG5cdHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWluZm8ge1xyXG5cdGJvcmRlci1sZWZ0LWNvbG9yOiAjOTBkZWU5O1xyXG5cdGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+PGNpcmNsZSBzdHJva2U9XCJub25lXCIgZmlsbD1cIiUyMzkwZGVlOVwiIGN4PVwiNTBcIiBjeT1cIjIyXCIgcj1cIjhcIj48L2NpcmNsZT48cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiUyMzkwZGVlOVwiIHN0cm9rZS13aWR0aD1cIjEyXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgZD1cIk0gNDUgNDAgaCA1IHYgNDAgaCAtNSBoIDEwXCI+PC9wYXRoPjwvc3ZnPicpLCBoc2woMCwgMCUsIDEwMCUpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiAzNXB4O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxufVxyXG5cclxuLm1lc3NhZ2Utc3VjY2VzcyB7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6IGhzbCgxMjAsIDY3JSwgNzQlKTtcclxuXHRiYWNrZ3JvdW5kOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPjxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiJTIzOTBlOTkwXCIgc3Ryb2tlLXdpZHRoPVwiMTJcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBkPVwiTSAyMCA1MiBsIDI1IDI1IGwgMzAgLTUwXCI+PC9wYXRoPjwvc3ZnPicpLCBoc2woMCwgMCUsIDEwMCUpO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiA0MHB4O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTtcclxufVxyXG5cclxuLm1lc3NhZ2Utd2FybmluZyB7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6IGhzbCg1NCwgNjclLCA3NCUpO1xyXG5cdGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIlMjNlOWUwOTBcIiBzdHJva2Utd2lkdGg9XCIxMlwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIGQ9XCJNIDUwIDE4IHYgNDBcIj48L3BhdGg+PGNpcmNsZSBzdHJva2U9XCJub25lXCIgZmlsbD1cIiUyM2U5ZTA5MFwiIGN4PVwiNTBcIiBjeT1cIjc4XCIgcj1cIjhcIj48L2NpcmNsZT48L3N2Zz4nKSwgaHNsKDAsIDAlLCAxMDAlKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtc2l6ZTogMzVweDtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWRhbmdlciB7XHJcblx0Ym9yZGVyLWxlZnQtY29sb3I6IGhzbCgwLCA2NyUsIDc0JSk7XHJcblx0YmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTAgNTApIHJvdGF0ZSg0NSlcIj48cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiUyM2U5OTA5MFwiIHN0cm9rZS13aWR0aD1cIjEyXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgZD1cIk0gMCAtMzAgdiA2MCB6IE0gLTMwIDAgaCA2MFwiPjwvcGF0aD48L2c+PC9zdmc+JyksIGhzbCgwLCAwJSwgMTAwJSk7XHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDM1cHg7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/alert/alert.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/alert/alert.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"notification\" [ngClass]=\"_alertMsg != undefined ? _alertMsg.class : ''\">\n  <div class=\"notification__message\" [ngClass]=\"_alertMsg != undefined ? _alertMsg.colorClass : ''\">\n    <h1 *ngIf=\"_alertMsg != undefined\">{{_alertMsg.info}}</h1>\n    <p *ngIf=\"_alertMsg != undefined\">{{_alertMsg.text}}</p>\n    <button aria-labelledby=\"button-dismiss\" (click)=\"dismiss()\">\n      <span id=\"button-dismiss\" hidden>Dismiss</span>\n      <svg viewBox=\"0 0 100 100\" width=\"10\" height=\"10\">\n        <g stroke=\"currentColor\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n          <g transform=\"translate(50 50) rotate(45)\">\n            <path d=\"M 0 -30 v 60 z M -30 0 h 60\"></path>\n          </g>\n        </g>\n      </svg>\n    </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/alert/alert.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/alert/alert.component.ts ***!
  \*************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
    }
    Object.defineProperty(AlertComponent.prototype, "alertMsg", {
        set: function (alertValue) {
            this._alertMsg = alertValue;
        },
        enumerable: true,
        configurable: true
    });
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.dismiss = function () {
        this._alertMsg['class'] = "";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], AlertComponent.prototype, "alertMsg", null);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/shared/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/shared/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _isloading_isloading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isloading/isloading.component */ "./src/app/shared/isloading/isloading.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/shared/alert/alert.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_shared__WEBPACK_IMPORTED_MODULE_3__["TestimonialComponent"], _shared__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"], _isloading_isloading_component__WEBPACK_IMPORTED_MODULE_4__["IsloadingComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            exports: [_shared__WEBPACK_IMPORTED_MODULE_3__["TestimonialComponent"], _shared__WEBPACK_IMPORTED_MODULE_3__["DownloadComponent"], _isloading_isloading_component__WEBPACK_IMPORTED_MODULE_4__["IsloadingComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_5__["AlertComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~modules-about-about-module~modules-cart-cart-module~modules-competitive-competitive-module~m~c69af3b1.js.map