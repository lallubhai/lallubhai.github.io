(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n  <!-- <div class=\"card\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Account</th>\n          <th>Available Cash <br><small class=\"text-secondary font-weight-bold\">Todays Change</small> </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of symbols | slice:0:slice_param\">\n          <td>\n            <h4 class=\"text-primary font-weight-bold\">{{s.acct_name}} - {{s.acct_number | padZero}}</h4>\n          </td>\n          <td>\n            <h5>{{s.a_cash | currency}}</h5>\n            <small class=\"font-weight-bold\" [ngClass]=\"colorMap[s.change]\">{{s.change_percent}}% / {{s.change_value |\n              currency}}</small>\n          </td>\n        </tr>\n        <tr *ngIf=\"ShowLimited\">\n          <td colspan=\"2\">\n            <h5 class=\"text-primary font-weight-bold text-center\">\n              <a href=\"#\" class=\"card-link\" (click)=\"ShowAll()\">Load More</a>\n            </h5>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div> -->\n  <div class=\"card\">\n\n\n    <table class=\"table\" matSort (matSortChange)=\"sortData($event)\">\n      <thead>\n        <tr>\n          <th mat-sort-header=\"acct_number\">Account</th>\n          <th mat-sort-header=\"a_cash\">\n            <div>Available Cash <br><small class=\"text-secondary font-weight-bold\">Todays Change</small> </div>\n          </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let s of sortedData | slice:0:slice_param\">\n          <td>\n            <h4 class=\"text-primary font-weight-bold\">{{s.acct_name}} - {{s.acct_number | padZero}}</h4>\n          </td>\n          <td>\n            <h5>{{s.a_cash | currency}}</h5>\n            <small class=\"font-weight-bold\" [ngClass]=\"colorMap[s.change]\">{{gainMap[s.change]}}{{s.change_percent}}% /\n              {{s.change_value |\n              currency}}</small>\n          </td>\n        </tr>\n        <tr>\n          <td colspan=\"2\">\n            <h5 class=\"text-primary font-weight-bold text-center pointer\">\n              <a class=\"card-link\" (click)=\"ShowAll()\">Load {{more_less}}</a>\n            </h5>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: SymbolsList, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolsList", function() { return SymbolsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SymbolsList = /** @class */ (function () {
    function SymbolsList() {
    }
    return SymbolsList;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.ShowLimited = true;
        this.slice_param_default = 3;
        this.slice_param = this.slice_param_default;
        this.more_less = "More";
        this.colorMap = {
            'loss': 'text-danger',
            'gain': 'text-success',
            'none': 'text-secondary'
        };
        this.gainMap = {
            'loss': '-',
            'gain': '+',
            'none': ''
        };
        this.symbols_array_service = [
            {
                "acct_name": "AAA",
                "acct_number": 29,
                "a_cash": 39160334.42,
                "change": "loss",
                "change_percent": 0.07,
                "change_value": 31435.87
            },
            {
                "acct_name": "IRA",
                "acct_number": 146,
                "a_cash": 15884302.39,
                "change": "gain",
                "change_percent": 0.03,
                "change_value": 7430.83
            },
            {
                "acct_name": "AAA",
                "acct_number": 1812,
                "a_cash": 2010926.10,
                "change": "gain",
                "change_percent": 0.21,
                "change_value": 38881.63
            },
            {
                "acct_name": "REG",
                "acct_number": 2019,
                "a_cash": 13465679.34,
                "change": "none",
                "change_percent": 0.00,
                "change_value": 0.00
            },
            {
                "acct_name": "AAA",
                "acct_number": 3810,
                "a_cash": 10050054.07,
                "change": "gain",
                "change_percent": 0.07,
                "change_value": 8916.69
            },
            {
                "acct_name": "IRA",
                "acct_number": 5200,
                "a_cash": 5763.36,
                "change": "loss",
                "change_percent": 0.08,
                "change_value": 8916.69
            }
        ];
        //let obs = this.http.get('./assets/db.json');
        //obs.subscribe((response) => { console.log(response); this.symbols_array_service = response as SymbolsList[] });
        //this.symbols_array_service = this.api_response.slice();
        //this.sortedData = this.api_response.slice();
        //this.http.get('./assets/db.json').subscribe((response) => { 
        //this.symbols_array_service = (response as SymbolsList[]).slice(); },
        //error => console.log("Error: ", error),
        //function () { this.sortedData = this.symbols_array_service.slice(); }
        //)
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.data.getSymbols().subscribe(
        //   data => this.symbols_array_service = data as SymbolsList[],
        //   error => console.log("Error: ", error),
        //   function () { this.sortedData = this.symbols_array_service.slice(); }
        // )
        this.sortedData = this.symbols_array_service.slice();
    };
    AppComponent.prototype.ShowAll = function () {
        if (this.ShowLimited) {
            this.slice_param = Object.keys(this.symbols_array_service).length;
            this.more_less = "Less";
            this.ShowLimited = false;
        }
        else {
            this.slice_param = this.slice_param_default;
            this.ShowLimited = true;
            this.more_less = "More";
        }
    };
    AppComponent.prototype.sortData = function (sort) {
        var data = this.symbols_array_service.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'acct_number': return compare(a.acct_number, b.acct_number, isAsc);
                case 'a_cash': return compare(a.a_cash, b.a_cash, isAsc);
                default: return 0;
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _myPipes_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myPipes.pipe */ "./src/app/myPipes.pipe.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _myPipes_pipe__WEBPACK_IMPORTED_MODULE_6__["padZeroPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/myPipes.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/myPipes.pipe.ts ***!
  \*********************************/
/*! exports provided: padZeroPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padZeroPipe", function() { return padZeroPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var padZeroPipe = /** @class */ (function () {
    function padZeroPipe() {
    }
    padZeroPipe.prototype.transform = function (value) {
        var s = value + "";
        while (s.length < 4)
            s = "0" + s;
        return s;
    };
    padZeroPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'padZero'
        })
    ], padZeroPipe);
    return padZeroPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repo\Angular\ng6-symbol-list\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map