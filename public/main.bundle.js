webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports) {

module.exports = "li {\n  list-style-type: none;\n}\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container \">\n  <div class=\"row\">\n    <br>\n\n    <div class='col'>\n      <h4>Who is </h4>\n      <h4>#TeamBillise </h4>\n      <h4>?</h4>\n    </div>\n\n    <div class='col'>\n\n      <div class=\"row\">\n        <div class=\"col-md-4 signup\">\n          <ul class=\"list-group\">\n            <li class=\"li\">\n              <img src=\"../../assets/billy.jpeg\" width=\"150px\">\n            </li>\n            <li class=\"li\">Billy Trang</li>\n            <li class=\"li\">\n              <a href=\"https://www.linkedin.com/in/billytrang/\">Linkedin</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"col-md-4 signup\">\n          <ul class=\"list-group\">\n            <li class=\"li\">\n              <img src=\"../../assets/elise.jpeg\" width=\"150px\">\n            </li>\n            <li class=\"li\">Elise Griset</li>\n            <li class=\"li\">\n              <a href=\"https://www.linkedin.com/in/elisegriset/\">Linkedin</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__("./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__movie_details_movie_details_component__ = __webpack_require__("./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_detail_event_detail_component__ = __webpack_require__("./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__serie_details_serie_details_component__ = __webpack_require__("./src/app/serie-details/serie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_edit_component__ = __webpack_require__("./src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__favorite_favorite_component__ = __webpack_require__("./src/app/favorite/favorite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_7__search_search_component__["a" /* SearchComponent */] },
    { path: 'about-us', component: __WEBPACK_IMPORTED_MODULE_9__about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_11__edit_edit_component__["a" /* EditComponent */] },
    { path: 'favorite', component: __WEBPACK_IMPORTED_MODULE_12__favorite_favorite_component__["a" /* FavoriteComponent */] },
    { path: 'movie-detail/:movieId', component: __WEBPACK_IMPORTED_MODULE_6__movie_details_movie_details_component__["a" /* MovieDetailsComponent */] },
    { path: 'book-detail/:bookId', component: __WEBPACK_IMPORTED_MODULE_13__book_book_component__["a" /* BookComponent */] },
    { path: 'event-detail/:eventId', component: __WEBPACK_IMPORTED_MODULE_8__event_detail_event_detail_component__["a" /* EventDetailComponent */] },
    { path: 'serie-detail/:serieId', component: __WEBPACK_IMPORTED_MODULE_10__serie_details_serie_details_component__["a" /* SerieDetailsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\n  text-align: center;\n}\n\n.navbar-expand-md .navbar-nav .dropdown-menu {\n  position: absolute;\n}\n\nbody {\n  overflow: hidden;\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: aliceblue;\n}\n\nnav {\n  background: rgba(0,0,0,.4);\n}\n\n.dropdown-menu {\n  background: rgba(0,0,0,.4);\n  color: aliceblue;  \n  min-width: 7em;\n}\n\na.dropdown-item {\n  color: aliceblue;\n  text-align: center;\n}\n\n.dropdown-menu-right {\n  top: 80px;\n}\n\n.dropdown-item:hover {\n  background-color: rgba(0,0,0,.2);\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"!userTruc.currentUser\">\n  <nav class=\"navbar navbar-expand-md navbar-dark flex-row\">\n    <a class=\"navbar-brand mr-auto\" routerLink=\"\">\n      <h3>Ask Billise</h3>\n    </a>\n    <ul class=\"navbar-nav flex-row mr-lg-0\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle mr-3 mr-lg-0\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          <i class=\"fa fa-user\"></i>\n          <span class=\"caret\"></span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" routerLink=\"/signup\">Sign up</a>\n          <a class=\"dropdown-item\" routerLink=\"/login\">Login</a>\n        </div>\n      </li>\n    </ul>\n    <button class=\"navbar-toggler ml-lg-0\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </nav>\n  <nav class=\"navbar navbar-expand-md navbar-light\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <!-- <a class=\"nav-link\" routerLink=\"/search\">Search</a> -->\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n\n\n<header *ngIf=\"userTruc.currentUser\">\n  <nav class=\"navbar navbar-expand-md navbar-dark flex-row\">\n    <a class=\"navbar-brand mr-auto\" routerLink=\"\">\n      <h3>Ask Billise</h3>\n    </a>\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n       <h4> <a class=\"nav-link\" routerLink=\"/favorite\">My list</a> </h4>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav flex-row mr-lg-0\">\n      <h3>{{userTruc.currentUser.username}}</h3>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle mr-3 mr-lg-0\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n          aria-expanded=\"false\">\n          <i class=\"fa fa-user\"></i>\n          <span class=\"caret\"></span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n          <a class=\"dropdown-item\" routerLink=\"/edit\">Edit profile</a>\n          <a class=\"dropdown-item\" (click)=\"logoutClick()\">Logout</a>\n        </div>\n      </li>\n    </ul>\n    <button class=\"navbar-toggler ml-lg-0\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </nav>\n  <nav class=\"navbar navbar-expand-md navbar-light\">\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    </div>\n  </nav>\n</header>\n\n<!-- <header>\n  <nav>\n    <h2>Billise's anti-boredom App </h2>\n    <span *ngIf=\"!userTruc.currentUser\">\n\n      <a routerLink=\"/signup\">\n        <button class=\"btn btn-success\">\n          Sign up\n        </button>\n\n      </a>\n      <a routerLink=\"/login\">\n        <button class=\"btn btn-success\">\n          Log in\n        </button>\n      </a>\n      <a routerLink=\"/search\">\n        <button class=\"btn btn-success\">\n          Search\n        </button>\n      </a>\n\n      <a routerLink=\"\">\n        <button class=\"btn btn-success\">\n          Home\n        </button>\n      </a>\n\n      <a routerLink=\"/favorite\">\n        <button class=\"btn btn-info\">My list</button>\n      </a>\n\n    </span>\n\n    <span *ngIf=\"userTruc.currentUser\">\n      <h3> Welcome {{userTruc.currentUser.username}}</h3>\n\n      <button class=\"btn btn-danger\" (click)=\"logoutClick()\">Log Out</button>\n\n      <a routerLink=\"/edit\">\n        <button class=\"btn btn-success\">\n          Change my interests\n        </button>\n      </a>\n\n      <a routerLink=\"/search\">\n        <button class=\"btn btn-success\">\n          Search\n        </button>\n      </a>\n\n      <a routerLink=\"\">\n        <button class=\"btn btn-success\">\n          Home\n        </button>\n      </a>\n\n      <a routerLink=\"/favorite\">\n        <button class=\"btn btn-info\">My list</button>\n      </a>\n\n    </span>\n  </nav>\n</header> -->\n\n<br>\n\n<span class=\"content\" *ngIf=\"!userTruc.currentUser\">\n  <p>\n    <a routerLink=\"/signup\">Sign up</a> to get special content related to you</p>\n</span>\n\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_movie_tv_service__ = __webpack_require__("./src/app/service/movie-tv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userTruc, movieTvTruc) {
        this.userTruc = userTruc;
        this.movieTvTruc = movieTvTruc;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userTruc.check().catch(function (err) {
            console.log('app login error', err);
        });
    };
    AppComponent.prototype.logoutClick = function () {
        this.userTruc.logout().catch(function (err) {
            console.log(err);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__service_movie_tv_service__["a" /* MovieTvService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__ = __webpack_require__("./src/app/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__("./src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_movie_tv_service__ = __webpack_require__("./src/app/service/movie-tv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_music_service__ = __webpack_require__("./src/app/service/music.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_event_service__ = __webpack_require__("./src/app/service/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__movie_details_movie_details_component__ = __webpack_require__("./src/app/movie-details/movie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__event_detail_event_detail_component__ = __webpack_require__("./src/app/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__favorite_favorite_component__ = __webpack_require__("./src/app/favorite/favorite.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_list_service__ = __webpack_require__("./src/app/service/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__serie_details_serie_details_component__ = __webpack_require__("./src/app/serie-details/serie-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__edit_edit_component__ = __webpack_require__("./src/app/edit/edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_book_service__ = __webpack_require__("./src/app/service/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_15__movie_details_movie_details_component__["a" /* MovieDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_16__event_detail_event_detail_component__["a" /* EventDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_17__about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__favorite_favorite_component__["a" /* FavoriteComponent */],
                __WEBPACK_IMPORTED_MODULE_20__serie_details_serie_details_component__["a" /* SerieDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__edit_edit_component__["a" /* EditComponent */],
                __WEBPACK_IMPORTED_MODULE_23__book_book_component__["a" /* BookComponent */],
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__service_user_service__["c" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__service_movie_tv_service__["a" /* MovieTvService */],
                __WEBPACK_IMPORTED_MODULE_10__service_music_service__["a" /* MusicService */],
                __WEBPACK_IMPORTED_MODULE_11__service_event_service__["a" /* EventService */],
                __WEBPACK_IMPORTED_MODULE_19__service_list_service__["a" /* ListService */],
                __WEBPACK_IMPORTED_MODULE_22__service_book_service__["a" /* BookService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.container {\n  margin-top: 30px;\n  text-align: justify;\n  background: rgba(0,0,0,.4);\n}\n\n.row {\n  padding: 5%;\n  margin-bottom: 10px;\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm\">\n      <h1> <b> {{bookId?.title}} </b></h1>\n      <br>\n      <ul>\n        <h4> <b>Author(s) :</b></h4>\n        <li *ngFor=\"let oneAuthor of bookId.authors\">\n          <p>{{oneAuthor}}</p>\n        </li>\n      </ul>\n      <p>Published on {{bookId?.publishedDate | date}}</p>\n      <h4> <b>Description :</b></h4>\n      <b>{{bookId?.description}}</b>\n\n\n      <ul>\n        <br>\n        <h4> <b>Genre(s) :</b> </h4>\n        <li *ngFor=\"let oneGenre of bookId.categories\">\n          <p>{{oneGenre}}</p>\n\n        </li>\n      </ul>\n\n\n      <span *ngIf=\"userServ.currentUser\">\n        <button class=\"btn btn-primary\" (click)=\"addListClick()\">Add to my list</button>\n        <br>\n        <br>\n      </span>\n\n    </div>\n\n    <div class=\"col-sm\">\n      <img *ngIf=\"bookId?.thumbnail\" src=\"{{bookId?.thumbnail}}\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_book_service__ = __webpack_require__("./src/app/service/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_list_service__ = __webpack_require__("./src/app/service/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookComponent = /** @class */ (function () {
    function BookComponent(userServ, listServ, resBdetails, reqBdetails, apiBdetails) {
        this.userServ = userServ;
        this.listServ = listServ;
        this.resBdetails = resBdetails;
        this.reqBdetails = reqBdetails;
        this.apiBdetails = apiBdetails;
        this.bookId = [];
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reqBdetails.paramMap.subscribe(function (myParams) {
            _this.bookId = myParams.get('bookId');
            _this.fetchBookData();
        });
    };
    BookComponent.prototype.fetchBookData = function () {
        var _this = this;
        this.apiBdetails
            .getBookDetails(this.bookId)
            .then(function (result) {
            _this.bookId = result[0];
            // console.log(this.bookId);
        })
            .catch(function (err) {
            console.log('lesbooks détails ne marchent pas', err);
        });
    };
    BookComponent.prototype.addListClick = function () {
        console.log('je suis là', this.bookId);
        var isOk = confirm("Are you sure you wanna add this to your list ? ");
        if (!isOk) {
            return;
        }
        else {
            this.listServ.currentList.allItems.push(this.bookId);
            this.apiBdetails
                .addSomething(this.bookId, 'book')
                .then(function (result) { })
                .catch(function (err) {
                console.log(err);
            });
            this.resBdetails.navigateByUrl('/');
        }
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__service_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__service_book_service__["a" /* BookService */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p> Here is the edit page of {{userServ.currentUser.username}}</p> -->\n\n\n\n<form (ngSubmit)=\"update()\">\n  <div class=\"form-group\">\n    <div>\n      <h4>❤️ Please pick your interests so we can show you a selection that is 100% made for you 👍</h4>\n      <br>\n      <p>I like\n        <b>TV shows</b> that :</p>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInSerie.includes(35)\" (change)=\"updateProfileSerie(35)\" name=\"interestedInSerie[0]\"\n          id=\"comedyTvShows\" value=\"comedyTvShows\"> Make me laugh my ass off\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInSerie.includes(18)\" (change)=\"updateProfileSerie(18)\" name=\"interestedInSerie[1]\"\n          id=\"dramaTvShows\" value=\"dramaTvShows\"> Make me cry like a river\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInSerie.includes(53)\" (change)=\"updateProfileSerie(53)\" name=\"interestedInSerie[10]\"\n          id=\"thrillerTvShows\" value=\"thrillerTvShows\"> Have an exciting plot (involving crime or espionage)\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInSerie.includes(27)\" (change)=\"updateProfileSerie(27)\" name=\"interestedInSerie[11]\"\n          id=\"scaryTvShows\" value=\"scaryTvShows\"> Make me scared\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInSerie.includes(28)\" (change)=\"updateProfileSerie(28)\" name=\"interestedInSerie[12]\"\n          id=\"actionTvShows\" value=\"actionTvShows\"> Have a huge amount of fireshots and/or spectacular car chases\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInSerie.includes(878)\" (change)=\"updateProfileSerie(878)\" name=\"interestedInSerie[15]\"\n          id=\"fantasyTvShows\" value=\"fantasyTvShows\"> Where we can see weird stuff happening like magic trolls or supernatural events\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInSerie.includes(37)\" (change)=\"updateProfileSerie(37)\" name=\"interestedInSerie[16]\"\n          id=\"westernTvShows\" value=\"westernTvShows\"> Includes cowboys and lots of cactus\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInSerie.includes(10749)\" (change)=\"updateProfileSerie(10749)\" name=\"interestedInSerie[18]\"\n          id=\"loveTvShows\" value=\"loveTvShows\"> All I need is love\n      </label>\n\n\n\n      <br>\n\n      <p>I like\n        <b>movies</b> that :</p>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedIn.includes(35)\" (change)=\"updateProfile(35)\" name=\"interestedIn[2]\" id=\"comedyMovies\"\n          value=\"comedyMovies\"> Make me laugh my ass off\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedIn.includes(18)\" (change)=\"updateProfile(18)\" name=\"interestedIn[3]\" id=\"dramaMovies\"\n          value=\"dramaMovies\"> Make me cry like a river\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedIn.includes(53)\" (change)=\"updateProfile(53)\" name=\"interestedIn[8]\" id=\"thrillerMovies\"\n          value=\"thrillerMovies\"> Have an exciting plot (involving crime or espionage)\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedIn.includes(27)\" (change)=\"updateProfile(27)\" name=\"interestedIn[9]\" id=\"scaryMovies\"\n          value=\"scaryMovies\"> Make me scared\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedIn.includes(28)\" (change)=\"updateProfile(28)\" name=\"interestedIn[13]\" id=\"actionMovies\"\n          value=\"actionMovies\"> Have a huge amount of fireshots and/or spectacular car chases\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedIn.includes(878)\" (change)=\"updateProfile(878)\" name=\"interestedIn[14]\"\n          id=\"fantasyMovies\" value=\"fantasyMovies\"> Where we can see weird stuff happening like magic trolls or supernatural events\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedIn.includes(37)\" (change)=\"updateProfile(37)\" name=\"interestedIn[17]\" id=\"westernMovies\"\n          value=\"westernMovies\"> Includes cowboys and lots of cactus\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedIn.includes(10749)\" (change)=\"updateProfile(10749)\" name=\"interestedIn[19]\"\n          id=\"loveMovies\" value=\"loveMovies\"> All I need is love\n      </label>\n      <br>\n\n      <p>I like\n        <b>events</b> in Paris such as :</p>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInEvent.includes(1)\" (change)=\"updateProfileEvent(1)\" name=\"interestedInEvent[4]\"\n          id=\"festivEvents\" value=\"festivEvents\"> Going to a festival, flea-market or exhibition\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInEvent.includes(3)\" (change)=\"updateProfileEvent(3)\" name=\"interestedInEvent[5]\"\n          id=\"spectacleEvents\" value=\"spectacleEvents\"> Seeing a show (theater, dance, stand-up..)\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInEvent.includes(4)\" (change)=\"updateProfileEvent(4)\" name=\"interestedInEvent[6]\"\n          id=\"musicEvents\" value=\"musicEvents\"> Listening to live music and sometimes even dance\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInEvent.includes(2)\" (change)=\"updateProfileEvent(2)\" name=\"interestedInEvent[7]\"\n          id=\"expoEvents\" value=\"expoEvents\"> Enjoying a good museum\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInEvent.includes(5)\" (change)=\"updateProfileEvent(5)\" name=\"interestedInEventSerie[20]\"\n          id=\"animationEvents\" value=\"animationEvents\"> Participate to a conference, lecture, meeting, visit..\n      </label>\n\n      <br>\n\n\n      <p>I enjoy\n        <b>books</b> like :</p>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInBook.includes('drama')\" (change)=\"updateProfileBook('drama')\" name=\"interestedInBook[16]\"\n          id=\"sadBook\" value=\"sadBook\"> The one that tell sad stories\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInBook.includes('thrillers')\" (change)=\"updateProfileBook('thrillers')\"\n          name=\"interestedInBook[17]\" id=\"policeBook\" value=\"policeBook\"> The one where someone is muredered and we have to find who did it\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInBook.includes('love')\" (change)=\"updateProfileBook('love')\" name=\"interestedInBook[18]\"\n          id=\"loveBook\" value=\"loveBook\"> The one that finish happily ever after\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" [checked]=\"creds.interestedInBook.includes('biography')\" (change)=\"updateProfileBook('biography')\"\n          name=\"interestedInBook[19]\" id=\"bioBook\" value=\"bioBook\"> The one that tell true story about someone\n      </label>\n\n\n      <button class=\"btn btn-success\">Update my Profile</button>\n    </div>\n  </div>\n</form>\n\n<br>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(userServ, resTruc) {
        this.userServ = userServ;
        this.resTruc = resTruc;
        this.creds = new __WEBPACK_IMPORTED_MODULE_1__service_user_service__["b" /* SignupCredentials */]();
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userServ
            .check()
            .then(function () {
            _this.creds.interestedIn = _this.userServ.currentUser.interestedIn;
            _this.creds.interestedInEvent = _this.userServ.currentUser.interestedInEvent;
            _this.creds.interestedInSerie = _this.userServ.currentUser.interestedInSerie;
            _this.creds.interestedInBook = _this.userServ.currentUser.interestedInBook;
        })
            .catch(function (err) {
            console.log('app login error', err);
        });
    };
    EditComponent.prototype.update = function () {
        var _this = this;
        this.userServ
            .postEdit(this.creds)
            .then(function (result) {
            _this.userServ.currentUser.interestedIn = _this.creds.interestedIn;
            _this.resTruc.navigateByUrl('/');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    EditComponent.prototype.updateProfile = function (interest) {
        var index = this.creds.interestedIn.indexOf(interest);
        if (index === -1) {
            this.creds.interestedIn.push(interest);
        }
        else {
            this.creds.interestedIn.splice(index, 1);
        }
    };
    EditComponent.prototype.updateProfileSerie = function (interest) {
        var index = this.creds.interestedInSerie.indexOf(interest);
        console.log(this.userServ.currentUser.interestedInSerie);
        if (index === -1) {
            this.creds.interestedInSerie.push(interest);
        }
        else {
            this.creds.interestedInSerie.splice(index, 1);
        }
    };
    EditComponent.prototype.updateProfileEvent = function (interest) {
        var index = this.creds.interestedInEvent.indexOf(interest);
        // console.log(this.userServ.currentUser.interestedIn);
        if (index === -1) {
            this.creds.interestedInEvent.push(interest);
        }
        else {
            this.creds.interestedInEvent.splice(index, 1);
        }
    };
    EditComponent.prototype.updateProfileBook = function (interest) {
        var index = this.creds.interestedInBook.indexOf(interest);
        // console.log(this.userServ.currentUser.interestedIn);
        if (index === -1) {
            this.creds.interestedInBook.push(interest);
        }
        else {
            this.creds.interestedInBook.splice(index, 1);
        }
    };
    EditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit',
            template: __webpack_require__("./src/app/edit/edit.component.html"),
            styles: [__webpack_require__("./src/app/edit/edit.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["c" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/event-detail/event-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 30px;\n  text-align: justify;\n  background: rgba(0,0,0,.4);\n}\n\n.container {\n  text-align: justify;\n  background: rgba(0,0,0,.4);\n}\n\n.row {\n  padding: 2%;\n}"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-sm\">\n      <h1> <b> {{event?.nom}} </b> </h1>\n      <br>\n      <h4>\n        <b>Event date :</b> {{event?.dateStartEvenement | date}}</h4>\n        <br>\n      <h4>\n        <b>Description :</b>\n      </h4>\n        <span [innerHTML]=\"event?.small_description\"></span>\n      <p>\n        <b>Adress :</b> {{event?.adresse}}</p>\n\n      <span *ngIf=\"userService.currentUser\">\n        <button class=\"btn btn-primary\" (click)=\"addListClick()\">Add to my list</button>\n        <br>\n        <br>\n      </span>\n\n    </div>\n  </div>\n</div>\n\n<script></script>"

/***/ }),

/***/ "./src/app/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_event_service__ = __webpack_require__("./src/app/service/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_list_service__ = __webpack_require__("./src/app/service/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventDetailComponent = /** @class */ (function () {
    function EventDetailComponent(reqEdetails, apiEdetails, resEdetails, userService, listServ) {
        this.reqEdetails = reqEdetails;
        this.apiEdetails = apiEdetails;
        this.resEdetails = resEdetails;
        this.userService = userService;
        this.listServ = listServ;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reqEdetails.paramMap.subscribe(function (myParams) {
            _this.eventId = myParams.get('eventId');
            _this.fetchEventData();
        });
    };
    EventDetailComponent.prototype.fetchEventData = function () {
        var _this = this;
        this.apiEdetails
            .getEventDetails(this.eventId)
            .then(function (result) {
            _this.event = result.data[0];
            // console.log(this.event);
        })
            .catch(function (err) {
            console.log('Event details does not work', err);
        });
    };
    EventDetailComponent.prototype.addListClick = function () {
        var nom = this.event.nom;
        console.log(this.event);
        var isOk = confirm("Are you sure you wanna add " + nom + " to your list ? ");
        if (!isOk) {
            return;
        }
        else {
            this.listServ.currentList.allItems.push(this.event);
            this.apiEdetails
                .addSomething(this.event, 'event')
                .then(function (result) { })
                .catch(function (err) {
                console.log(err);
            });
            this.resEdetails.navigateByUrl('/');
        }
    };
    EventDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event-detail',
            template: __webpack_require__("./src/app/event-detail/event-detail.component.html"),
            styles: [__webpack_require__("./src/app/event-detail/event-detail.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__service_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__service_list_service__["a" /* ListService */]])
    ], EventDetailComponent);
    return EventDetailComponent;
}());



/***/ }),

/***/ "./src/app/favorite/favorite.component.css":
/***/ (function(module, exports) {

module.exports = "li {\n  list-style-type: none;\n  margin-left: 10px;\n  padding: 10px 30px;\n  text-align: center;\n}\n\nul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.scroll {\n  overflow: scroll;\n}\n"

/***/ }),

/***/ "./src/app/favorite/favorite.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"scroll\">\n  <div *ngIf=\"userServ.currentUser\">\n\n\n\n    <ul>\n      <li *ngFor=\"let oneList of list\">\n        <span *ngIf=\"oneList.user == userServ.currentUser._id\">\n          <!-- <p>{{oneList.category}}</p> -->\n\n          <span *ngIf=\"oneList.category == 'movie'\">\n            <h2>{{oneList.details.name}}</h2>\n            <h2>{{oneList.details.title}}</h2>\n            <p>{{oneList.category | uppercase}}</p>\n            <img *ngIf=\"oneList.details?.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{oneList.details.poster_path}}\">\n            <p>Added to my list on : {{oneList.createdAt | date }}</p>\n          </span>\n\n          <span *ngIf=\"oneList.category == 'book'\">\n            <h2>{{oneList.details.title}}</h2>\n            <p>{{oneList.category | uppercase}}</p>\n            <img *ngIf=\"oneList.details?.thumbnail\" src=\"{{oneList.details.thumbnail}}\">\n            <p>Added to my list on : {{oneList.createdAt | date }}</p>\n          </span>\n\n          <span *ngIf=\"oneList.category == 'tv-show'\">\n            <h2>{{oneList.details.name}}</h2>\n            <h2>{{oneList.details.title}}</h2>\n            <p>{{oneList.category | uppercase}}</p>\n            <img *ngIf=\"oneList.details?.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{oneList.details.poster_path}}\">\n            <p>Added to my list on : {{oneList.createdAt | date }}</p>\n          </span>\n\n\n          <span *ngIf=\"oneList.category == 'event'\">\n            <h2>{{oneList.details.nom}}</h2>\n            <p>{{oneList.category | uppercase }}</p>\n\n            <!-- <img *ngIf=\"oneList.details?.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{oneList.details.poster_path}}\"> -->\n            <p>Added to my list on : {{oneList.createdAt | date }}</p>\n          </span>\n\n          <button (click)=\"deleteClick(oneList)\" class=\"btn btn-danger\">Delete from my list</button>\n        </span>\n      </li>\n    </ul>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/favorite/favorite.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_list_service__ = __webpack_require__("./src/app/service/list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent(dbList, userServ) {
        this.dbList = dbList;
        this.userServ = userServ;
        this.list = [];
        this.creds = new __WEBPACK_IMPORTED_MODULE_2__service_user_service__["b" /* SignupCredentials */]();
        this.userList = [];
    }
    FavoriteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dbList.getList().then(function (response) {
            _this.list = response;
        });
    };
    FavoriteComponent.prototype.deleteClick = function (oneList) {
        var _this = this;
        console.log(oneList);
        var isOkay = confirm('Are you sure you want to delete it from your list?');
        if (!isOkay) {
            return;
        }
        this.dbList
            .delete(oneList)
            .then(function (result) {
            var index = _this.list.indexOf(oneList);
            result = _this.list.splice(index, 1);
        })
            .catch(function (err) {
            console.log('Fav delete error');
            console.log(err);
        });
    };
    FavoriteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-favorite',
            template: __webpack_require__("./src/app/favorite/favorite.component.html"),
            styles: [__webpack_require__("./src/app/favorite/favorite.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_list_service__["a" /* ListService */], __WEBPACK_IMPORTED_MODULE_2__service_user_service__["c" /* UserService */]])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nli {\n  list-style-type: none;\n}\n\n.card-header2 {\n  padding: 10px 10px;\n  margin: 10px 10px;\n  overflow: scroll;\n}\n\n.card-header3 {\n  padding: 10px 10px;\n  margin: 10px 10px;\n  overflow: scroll;\n}\n\n.card-header4 {\n  padding: 10px 10px;\n  margin: 10px 10px;\n  overflow: scroll;\n}\n\n.card-header {\n  padding: 10px 10px;\n  margin: 10px 10px;\n  overflow: scroll;\n  border: none;\n  background-color: transparent;\n}\n\n.card-text {\n  text-align: justify;\n}\n\n.content {\n  text-align: center;\n}\n\n.card-event {\n  width: auto;\n  height: 60vh;\n  margin-left: 10px;\n}\n\n.card-movie {\n  margin-left: 10px;\n}\n\nul img {\n  width: auto;\n  height: 35vh;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  background-color: rgba(100, 29, 94, 0.9);\n}\n\n.bloc:hover .overlay {\n  opacity: 1;\n}\n\n.textuh {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n\nul li p {\n  font-size: 15px;\n}\n\nsection {\n  overflow: hidden;\n}\n\n::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n\n.containerMovie,\n.containerSerie,\n.containerEvent,\n.containerBooks {\n  border: 2px solid black;\n}\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<section class=\"all\">\n  <div class=\"content\">\n    <h2>You get bored ?</h2>\n    <h2>Let’s find something to do ! </h2>\n    <br>\n  </div>\n\n\n\n\n  <div *ngIf=\"userServ.currentUser\" onload=\"load()\">\n    <br>\n    <br>\n\n    <div class=\"containerMovie\">\n      <br>\n      <h2 align=\"center\">Trending movies you could like</h2>\n      <div class=\"card-header2\">\n        <div class=\"title\">\n        </div>\n        <ul>\n          <li *ngFor=\"let oneMovie of moviesReco\">\n            <br>\n            <br>\n            <div class=\"card card-movie bloc\">\n              <img class=\"card-img-top \" src=\"http://image.tmdb.org/t/p/w185/{{oneMovie.poster_path}}\">\n              <div class=\"card-body overlay\">\n                <div class=\"card-title textuh\">\n                  <p>{{oneMovie.title}}</p>\n                  <!-- <p>\n                    <b>Release date :</b> {{oneMovie.release_date}}</p> -->\n                  <a routerLink=\"/movie-detail/{{oneMovie.id}}\" class=\"btn btn-success\">See Details</a>\n                </div>\n              </div>\n            </div>\n          </li>\n          <!-- </span> -->\n        </ul>\n      </div>\n    </div>\n\n    <br>\n    <br>\n\n    <div class=\"containerSerie\">\n      <br>\n      <h2 align=\"center\">Trending Tv Shows you could like</h2>\n      <div class=\"card-header3\">\n        <div class=\"title\">\n        </div>\n\n        <ul>\n          <li *ngFor=\"let oneSerie of seriesReco\">\n            <br>\n            <br>\n            <div class=\"card card-movie bloc\">\n              <img class=\"card-img-top\" src=\"http://image.tmdb.org/t/p/w185/{{oneSerie.poster_path}}\">\n              <div class=\"card-body overlay\">\n                <div class=\"card-title textuh\">\n                  <p>{{oneSerie.name}}</p>\n                  <!-- <br>\n                      <b>Release date :</b> {{oneSerie.first_air_date}} -->\n                  <a routerLink=\"/serie-detail/{{oneSerie.id}}\" class=\"btn btn-success\">See Details</a>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <br>\n    <br>\n\n    <div class=\"containerEvent\">\n      <br>\n      <h2 align=\"center\">Incoming Events you could like</h2>\n      <br>\n      <br>\n      <div class=\"card-header\">\n        <div class=\"title\">\n        </div>\n\n        <ul>\n          <li *ngFor=\"let oneEvent of eventsReco\">\n\n            <div class=\"card card-event bloc\">\n              <img class=\"card-img-top\" src=\"{{oneEvent.image.url}}\">\n              <div class=\"card-body overlay\">\n                <div class=\"card-title textuh\">\n                  <strong>{{oneEvent.title}}</strong>\n                  <!-- <b>Description :</b>\n                        <span [innerHTML]=\"oneEvent.html\"></span> -->\n                  <br>\n                  <p> Event date:\n                    <br>\n                    <b>{{oneEvent.evenements.realDateStart | date}}</b>\n                  </p>\n                  <a routerLink=\"/event-detail/{{oneEvent.id}}\" class=\"btn btn-success\">See Details</a>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <br>\n    <br>\n    <div class=\"containerBooks\">\n      <br>\n      <h1 align=\"center\">Latest books you could like </h1>\n      <div class=\"card-header4\">\n        <div class=\"title\">\n        </div>\n\n        <ul>\n\n          <li *ngFor=\"let oneBook of booksReco\">\n            <br>\n            <br>\n            <div class=\"card card-movie bloc\">\n              <img class=\"card-img-top \" src=\"{{oneBook.thumbnail}}\">\n              <div class=\"card-body overlay\">\n                <div class=\"card-title textuh\">\n                  <p>{{oneBook.title}}</p>\n                  <a routerLink=\"/book-detail/{{oneBook.industryIdentifiers[1].identifier}}\" class=\"btn btn-success\">See Details</a>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n\n  <div *ngIf=\"!userServ.currentUser\" onload=\"load()\">\n    <div class=\"containerMovie\">\n      <br>\n      <h2 align=\"center\">Trending movies</h2>\n      <div class=\"card-header2\">\n        <div class=\"title\">\n        </div>\n\n        <ul>\n\n          <li *ngFor=\"let oneMovie of movies\">\n            <br>\n            <br>\n            <div class=\"card card-movie bloc\">\n              <img class=\"card-img-top \" src=\"http://image.tmdb.org/t/p/w185/{{oneMovie.poster_path}}\">\n              <div class=\"card-body overlay\">\n                <div class=\"card-title textuh\">\n                  <p>{{oneMovie.title}}</p>\n                  <a routerLink=\"/movie-detail/{{oneMovie.id}}\" class=\"btn btn-success\">See Details</a>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"containerSerie\">\n      <br>\n      <h2 align=\"center\">Trending Tv Shows</h2>\n      <div class=\"card-header3\">\n        <div class=\"title\">\n        </div>\n        <ul>\n          <li *ngFor=\"let oneSerie of series\">\n            <br>\n            <br>\n            <div class=\"card card-movie bloc\">\n              <img class=\"card-img-top\" src=\"http://image.tmdb.org/t/p/w185/{{oneSerie.poster_path}}\">\n              <div class=\"card-body overlay\">\n                <div class=\"card-title textuh\">\n                  <p>{{oneSerie.name}}</p>\n                  <!-- <br>\n                    <b>Release date :</b> {{oneSerie.first_air_date}} -->\n                  <a routerLink=\"/serie-detail/{{oneSerie.id}}\" class=\"btn btn-success\">See Details</a>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"containerEvent\">\n      <br>\n      <h2 align=\"center\">Incoming Events</h2>\n      <div class=\"card-header\">\n        <div class=\"title\">\n        </div>\n        <ul>\n          <li *ngFor=\"let oneEvent of events\">\n            <br>\n            <br>\n            <div class=\"card card-event bloc\">\n              <img class=\"card-img-top\" src=\"{{oneEvent.image.url}}\">\n              <div class=\"card-body overlay\">\n                <div class=\"card-title textuh\">\n                  <strong>{{oneEvent.title}}</strong>\n                  <!-- <b>Description :</b>\n                      <span [innerHTML]=\"oneEvent.html\"></span> -->\n                  <br>\n                  <p> Event date:\n                    <br>\n                    <b>{{oneEvent.evenements.realDateStart | date}}</b>\n                  </p>\n                  <a routerLink=\"/event-detail/{{oneEvent.id}}\" class=\"btn btn-success\">See Details</a>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"containerBooks\">\n      <br>\n      <h1 align=\"center\">Latest books</h1>\n      <div class=\"card-header4\">\n        <div class=\"title\">\n        </div>\n\n        <ul>\n\n          <li *ngFor=\"let oneBook of books\">\n            <br>\n            <br>\n            <div class=\"card card-movie bloc\">\n              <img class=\"card-img-top \" src=\"{{oneBook.thumbnail}}\">\n              <div class=\"card-body overlay\">\n                <div class=\"card-title textuh\">\n                  <p>{{oneBook.title}}</p>\n                  <a routerLink=\"/book-detail/{{oneBook.industryIdentifiers[1].identifier}}\" class=\"btn btn-success\">See Details</a>\n                </div>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <br>\n  <br>\n\n\n</section>\n<br>\n<br>\n\n<!-- <meta http-equiv=\"refresh\" content=\"300\"> -->"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_movie_tv_service__ = __webpack_require__("./src/app/service/movie-tv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_event_service__ = __webpack_require__("./src/app/service/event.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_book_service__ = __webpack_require__("./src/app/service/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(apiTruc, userServ, apiTrac, apiTric) {
        this.apiTruc = apiTruc;
        this.userServ = userServ;
        this.apiTrac = apiTrac;
        this.apiTric = apiTric;
        this.movies = [];
        this.events = [];
        this.series = [];
        this.books = [];
        this.moviesReco = [];
        this.seriesReco = [];
        this.eventsReco = [];
        this.booksReco = [];
        this.creds = new __WEBPACK_IMPORTED_MODULE_3__service_user_service__["b" /* SignupCredentials */]();
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userServ
            .check()
            .then(function () {
            _this.creds.interestedIn = _this.userServ.currentUser.interestedIn;
            _this.creds.interestedInEvent = _this.userServ.currentUser.interestedInEvent;
            _this.creds.interestedInSerie = _this.userServ.currentUser.interestedInSerie;
            _this.creds.interestedInBook = _this.userServ.currentUser.interestedInBook;
            _this.getMRecos();
            _this.getSRecos();
            _this.getERecos();
            _this.getBRecos();
        })
            .catch(function (err) {
            console.log('app login error', err);
        });
        // Display home page movies / seies / events / books
        this.apiTruc
            .getListMovie()
            .then(function (response) {
            _this.movies = response.results;
        })
            .catch(function (err) {
            console.log('pas de db ?? ', err);
        });
        this.apiTrac
            .getListEvent()
            .then(function (response) {
            _this.events = response.data;
        })
            .catch(function (err) {
            console.log('pas de db ?? ', err);
        });
        this.apiTruc
            .getListSerie()
            .then(function (response) {
            _this.series = response.results;
        })
            .catch(function (err) {
            console.log('pas de db ?? ', err);
        });
        this.apiTric
            .getListBook()
            .then(function (response) {
            _this.books = response;
        })
            .catch(function (err) {
            console.log('pas de db ?? ', err);
        });
    };
    // Display home page movies filtered / seies filtered / events filtered / books filtered
    HomepageComponent.prototype.getMRecos = function () {
        var _this = this;
        this.apiTruc
            .getMovieReco()
            .then(function (response) {
            _this.moviesReco = response.results;
        })
            .catch(function (err) {
            console.log('marchpo reco M', err);
        });
    };
    HomepageComponent.prototype.getSRecos = function () {
        var _this = this;
        this.apiTruc
            .getSerieReco()
            .then(function (response) {
            _this.seriesReco = response.results;
        })
            .catch(function (err) {
            console.log('marchpo reco S', err);
        });
    };
    HomepageComponent.prototype.getERecos = function () {
        var _this = this;
        this.apiTrac
            .getEventReco()
            .then(function (response) {
            _this.eventsReco = response.data;
        })
            .catch(function (err) {
            console.log('marchpo reco E', err);
        });
    };
    HomepageComponent.prototype.getBRecos = function () {
        var _this = this;
        this.apiTric
            .getBookReco()
            .then(function (response) {
            _this.booksReco = response;
        })
            .catch(function (err) {
            console.log('marchpo reco B', err);
        });
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/homepage/homepage.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_movie_tv_service__["a" /* MovieTvService */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__service_event_service__["a" /* EventService */],
            __WEBPACK_IMPORTED_MODULE_4__service_book_service__["a" /* BookService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Welcome back !</h3>\n\n<form (ngSubmit)=\"loginSubmit()\">\n  <label>\n    Email :\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"formCreds.email\" name=\"email\" placeholder=\"imbored@billise.com\">\n\n  </label>\n  <br>\n\n  <label>\n    Password :\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"formCreds.password\" name=\"password\" placeholder=\"*******\">\n\n  </label>\n  <br>\n\n  <button class=\"btn btn-success\" (click)=\"loginSubmit()\">Log in</button>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userTruc, resTruc) {
        this.userTruc = userTruc;
        this.resTruc = resTruc;
        this.formCreds = new __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* LoginCredentials */]();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.userTruc
            .postLogin(this.formCreds)
            .then(function (result) {
            _this.resTruc.navigateByUrl('/');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["c" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/movie-details/movie-details.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.container {\n  margin-top: 30px;\n  text-align: justify;\n  background: rgba(0,0,0,.4);\n}\n\n.row {\n  padding: 3%;\n}\n\nli button {\n  margin: 10px;\n  padding: 5px;\n}\n\nli {\n  display: inline-block;\n}"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-sm\">\n      <h1><b> {{movie?.title}} </b></h1>\n      <h5>\n        <b>Release date :</b> {{movie?.release_date | date}}\n      </h5>\n      <br>\n       <h5> <b>Synopsis :</b></h5> {{movie?.overview}}\n\n\n      <ul>\n        <h5>\n          <br>\n          <b>Genre(s) :</b>\n        </h5>\n        <li *ngFor=\"let oneGenre of movie.genres\" align=\"center\">\n          <button class=\"btn\">{{oneGenre.name}}</button>\n        </li>\n      </ul>\n\n      <p>{{movie?.runtime}} min</p>\n\n      \n        <h5> <b>Vote average :</b> {{movie?.vote_average}}</h5> \n\n      <span *ngIf=\"movie?.belongs_to_collection\">\n        <p>\n          <i>{{movie.title}}</i> belongs to\n          <i>{{movie.belongs_to_collection.name}}</i>\n        </p>\n      </span>\n\n      <span *ngIf=\"userService.currentUser\">\n        <button class=\"btn btn-primary\" (click)=\"addListClick()\">Add to my list</button>\n        <br>\n        <br>\n      </span>\n\n    </div>\n\n    <div class=\"col-sm\">\n      <img *ngIf=\"movie?.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{movie.poster_path}}\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/movie-details/movie-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_movie_tv_service__ = __webpack_require__("./src/app/service/movie-tv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_list_service__ = __webpack_require__("./src/app/service/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieDetailsComponent = /** @class */ (function () {
    function MovieDetailsComponent(reqMdetails, apiMdetails, resMdetails, userService, listServ) {
        this.reqMdetails = reqMdetails;
        this.apiMdetails = apiMdetails;
        this.resMdetails = resMdetails;
        this.userService = userService;
        this.listServ = listServ;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reqMdetails.paramMap.subscribe(function (myParams) {
            _this.movieId = myParams.get('movieId');
            _this.fetchMovieData();
        });
    };
    MovieDetailsComponent.prototype.fetchMovieData = function () {
        var _this = this;
        this.apiMdetails
            .getDetails(this.movieId)
            .then(function (result) {
            _this.movie = result;
            //  console.log(result);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MovieDetailsComponent.prototype.addListClick = function () {
        var title = this.movie.title;
        var isOk = confirm("Are you sure you wanna add " + title + " to your list ? ");
        if (!isOk) {
            return;
        }
        else {
            this.listServ.currentList.allItems.push(this.movie);
            this.apiMdetails
                .addSomething(this.movie, 'movie')
                .then(function (result) { })
                .catch(function (err) {
                console.log(err);
            });
            this.resMdetails.navigateByUrl('/');
        }
    };
    MovieDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-movie-details',
            template: __webpack_require__("./src/app/movie-details/movie-details.component.html"),
            styles: [__webpack_require__("./src/app/movie-details/movie-details.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__service_movie_tv_service__["a" /* MovieTvService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__service_list_service__["a" /* ListService */]])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ".content {\n  text-align: center;\n}\n\n.overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  /* height: 100%; */\n  width: 300px;\n  opacity: 0;\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  background-color: rgba(247, 219, 74, 0.9);\n}\n\n.bloc1:hover .overlay {\n  opacity: 1;\n}\n\n.bloc2:hover .overlay {\n  opacity: 1;\n}\n\n.bloc3:hover .overlay {\n  opacity: 1;\n}\n\n.textuh {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <h1>What are you looking for ?</h1>\n</div>\n<br>\n\n\n<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-sm bloc1 \">\n      <img src=\"../../assets/event.jpg\" width=\"300px\">\n      <div class=\"overlay\" (click)=\"openFormEvent()\">\n        <div class=\"textuh\">Events</div>\n      </div>\n    </div>\n    <br>\n    <div *ngIf=\"searchFormEvent\">\n      <label>\n        <input type=\"checkbox\" (change)=\"updateEvent('Concert')\" name=\"searchEvent[0]\" value=\"Concert\"> Concert\n      </label>\n      <label>\n        <input type=\"checkbox\" (change)=\"updateEvent('Promenade')\" name=\"SearchEvent[1]\" value=\"Promenade\"> Promenade\n      </label>\n      <button>Search</button>\n    </div>\n\n\n\n    <div class=\"col-sm bloc2\">\n      <img src=\"../../assets/cine.jpg\" width=\"300px\">\n      <div class=\"overlay\" (click)=\"openFormMovie()\">\n        <div class=\"textuh\">Movies</div>\n      </div>\n    </div>\n\n    <div *ngIf=\"searchFormMovie\">\n      <label>\n        What type of movie are you looking for ?\n        <input [(ngModel)]=\"searchMovie\" type=\"text\" placeholder=\"Drama, Thrillers\">\n        <button (click)=\"searchTermMovie()\">Search</button>\n\n      </label>\n    </div>\n\n\n\n\n    <div class=\"col-sm bloc3\">\n      <img src=\"../../assets/serie.jpg\" width=\"300px\">\n      <div class=\"overlay\" (click)=\"openFormSerie()\">\n        <div class=\"textuh\">Tv Shows</div>\n      </div>\n    </div>\n\n    <div *ngIf=\"searchFormSerie\">\n      <label>\n        What type of TV show are you looking for ?\n        <input [(ngModel)]=\"searchSerie\" type=\"text\" placeholder=\"Comedy\">\n        <button (click)=\"searchTermSerie()\">Search</button>\n\n      </label>\n    </div>\n\n  </div>\n</div>\n\n<!-- <label>\n  Search events\n  <input [(ngModel)]=\"userInput\" type=\"search\" placeholder=\"1\">\n</label>\n\n<ul>\n  <li *ngFor=\"let oneFood of (foods | foodFilter:userInput)\">\n    <h3>{{oneFood.name}}</h3>\n    <h4>{{oneFood.calories}}</h4>\n    <img src=\"{{oneFood.image}}\">\n  </li>\n</ul> -->"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_movie_tv_service__ = __webpack_require__("./src/app/service/movie-tv.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(apiMovie) {
        this.apiMovie = apiMovie;
        this.movies = [];
        this.searchEvent = [];
        this.searchFormEvent = false;
        this.searchFormMovie = false;
        this.searchFormSerie = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    // Search event and form
    SearchComponent.prototype.openFormEvent = function () {
        this.searchFormEvent = !this.searchFormEvent;
    };
    SearchComponent.prototype.updateEvent = function (event) {
        var index = this.searchEvent.indexOf(event);
        console.log(index);
        if (index === -1) {
            this.searchEvent.push(event);
        }
        else {
            this.searchEvent.splice(index, 1);
        }
    };
    SearchComponent.prototype.compare = function (searchEvent) { };
    // Search movie and form
    SearchComponent.prototype.openFormMovie = function () {
        this.searchFormMovie = !this.searchFormMovie;
    };
    SearchComponent.prototype.searchTermMovie = function () { };
    // Search Serie and form
    SearchComponent.prototype.openFormSerie = function () {
        this.searchFormSerie = !this.searchFormSerie;
    };
    SearchComponent.prototype.searchTermSerie = function () { };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_movie_tv_service__["a" /* MovieTvService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/serie-details/serie-details.component.css":
/***/ (function(module, exports) {

module.exports = "img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.container {\n  margin-top: 30px;\n  text-align: justify;\n  background: rgba(0,0,0,.4);\n  margin-bottom: 30px;\n}\n\n.row {\n  padding: 2%;\n}\n\nli button {\n  margin: 10px;\n  padding: 5px;\n}\n\nli {\n  display: inline-block;\n}"

/***/ }),

/***/ "./src/app/serie-details/serie-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-sm\">\n      <h1> <b> {{serie?.name}} </b> </h1>\n      <h5>\n        <b>Release date :</b> {{serie?.first_air_date | date}}\n      </h5>\n<br>\n      <p *ngIf=\"serie.in_production == true\">\n\n        <i>{{serie.name}}</i>\n        <b>is still in production</b>\n      </p>\n      <h5>\n        <b>Description :</b></h5> {{serie?.overview}}\n\n      <ul>\n        <h5>\n          <br>\n          <b>Genre(s) :</b>\n        </h5>\n        <li *ngFor=\"let oneGenre of serie.genres\">\n          <button class=\"btn\">{{oneGenre.name}}</button>\n        </li>\n      </ul>\n      <h5>\n        <b>Vote average :</b> {{serie?.vote_average}}</h5>\n      <p>{{serie?.number_of_seasons}} seasons - {{serie?.number_of_episodes}} episodes</p>\n      <p>\n        <b>Runtime : </b>{{serie?.episode_run_time}} min</p>\n\n\n\n      <span *ngIf=\"userService.currentUser\">\n        <button class=\"btn btn-primary\" (click)=\"addListClickS()\">Add to my list</button>\n        <br>\n        <br>\n      </span>\n\n    </div>\n\n    <div class=\"col-sm\">\n      <img *ngIf=\"serie?.poster_path\" src=\"http://image.tmdb.org/t/p/w185/{{serie.poster_path}}\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/serie-details/serie-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerieDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_movie_tv_service__ = __webpack_require__("./src/app/service/movie-tv.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_list_service__ = __webpack_require__("./src/app/service/list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SerieDetailsComponent = /** @class */ (function () {
    function SerieDetailsComponent(reqSdetails, resSdetails, userService, listServ, apiSdetails) {
        this.reqSdetails = reqSdetails;
        this.resSdetails = resSdetails;
        this.userService = userService;
        this.listServ = listServ;
        this.apiSdetails = apiSdetails;
    }
    SerieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reqSdetails.paramMap.subscribe(function (myParams) {
            _this.serieId = myParams.get('serieId');
            _this.fetchSerieData();
        });
    };
    SerieDetailsComponent.prototype.fetchSerieData = function () {
        var _this = this;
        this.apiSdetails
            .getDetailsSerie(this.serieId)
            .then(function (result) {
            _this.serie = result;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SerieDetailsComponent.prototype.addListClickS = function () {
        var name = this.serie.name;
        var isOk = confirm("Are you sure you wanna add " + name + " to your list ? ");
        if (!isOk) {
            return;
        }
        else {
            this.listServ.currentList.allItems.push(this.serie);
            this.apiSdetails
                .addSomethingS(this.serie, 'tv-show')
                .then(function (result) { })
                .catch(function (err) {
                console.log(err);
            });
            this.resSdetails.navigateByUrl('');
        }
    };
    SerieDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-serie-details',
            template: __webpack_require__("./src/app/serie-details/serie-details.component.html"),
            styles: [__webpack_require__("./src/app/serie-details/serie-details.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_user_service__["c" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__service_list_service__["a" /* ListService */],
            __WEBPACK_IMPORTED_MODULE_1__service_movie_tv_service__["a" /* MovieTvService */]])
    ], SerieDetailsComponent);
    return SerieDetailsComponent;
}());



/***/ }),

/***/ "./src/app/service/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* unused harmony export Book */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { environment } from '../../environments/environment.prod';
var BookService = /** @class */ (function () {
    function BookService(apiBook, UserServ) {
        this.apiBook = apiBook;
        this.UserServ = UserServ;
    }
    BookService.prototype.getListBook = function () {
        return this.apiBook.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/books").toPromise();
    };
    BookService.prototype.getBookReco = function () {
        return this.apiBook
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/reco/books", { withCredentials: true })
            .toPromise();
    };
    BookService.prototype.getBookDetails = function (bookId) {
        return this.apiBook
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/book-detail/" + bookId)
            .toPromise();
    };
    // Add this book to my list
    BookService.prototype.addSomething = function (bookInfo, category) {
        return this.apiBook
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/favorite-event/" + category, bookInfo, {
            withCredentials: true,
        })
            .toPromise()
            .then(function (apiResponse) {
            return apiResponse;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__user_service__["c" /* UserService */]])
    ], BookService);
    return BookService;
}());

var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/service/event.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* unused harmony export Event */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { environment } from '../../environments/environment.prod';

var EventService = /** @class */ (function () {
    function EventService(apiEvent) {
        this.apiEvent = apiEvent;
    }
    EventService.prototype.getListEvent = function () {
        return this.apiEvent.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/events").toPromise();
    };
    // get events reco
    EventService.prototype.getEventReco = function () {
        return this.apiEvent
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/reco/events", { withCredentials: true })
            .toPromise();
    };
    EventService.prototype.getEventDetails = function (eventId) {
        return this.apiEvent
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/event-detail/" + eventId)
            .toPromise();
    };
    // Add this event to my list
    EventService.prototype.addSomething = function (eventInfo, category) {
        return this.apiEvent
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/favorite-event/" + category, eventInfo, {
            withCredentials: true,
        })
            .toPromise()
            .then(function (apiResponse) {
            return apiResponse;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EventService);
    return EventService;
}());

var Event = /** @class */ (function () {
    function Event() {
    }
    return Event;
}());



/***/ }),

/***/ "./src/app/service/list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListService; });
/* unused harmony export List */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { environment } from '../../environments/environment.prod';

var ListService = /** @class */ (function () {
    function ListService(userThing, billise) {
        this.userThing = userThing;
        this.billise = billise;
        this.currentList = new List();
    }
    ListService.prototype.getList = function () {
        return this.billise
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/favorite-event/event/billise")
            .toPromise();
    };
    ListService.prototype.delete = function (itemId) {
        return this.billise
            .delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/favorite-event/" + itemId.category + "/billise/" + itemId._id)
            .toPromise();
    };
    ListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["c" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ListService);
    return ListService;
}());

var List = /** @class */ (function () {
    function List() {
        this.allItems = [];
        // currentUserId: number;
        // movieTitle: string;
        // movieRelease_date: string;
        // movieOverview: string;
        // moviePoster_path: string;
    }
    return List;
}());



/***/ }),

/***/ "./src/app/service/movie-tv.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieTvService; });
/* unused harmony export Movie */
/* unused harmony export Serie */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { environment } from '../../environments/environment.prod';

var MovieTvService = /** @class */ (function () {
    function MovieTvService(apiMovieTv, userThing) {
        this.apiMovieTv = apiMovieTv;
        this.userThing = userThing;
    }
    MovieTvService.prototype.getListMovie = function () {
        return this.apiMovieTv.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/movies").toPromise();
    };
    // get movies reco
    MovieTvService.prototype.getMovieReco = function () {
        return this.apiMovieTv
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/reco/movies", { withCredentials: true })
            .toPromise();
    };
    MovieTvService.prototype.getListSerie = function () {
        return this.apiMovieTv.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/series").toPromise();
    };
    // get serie reco
    MovieTvService.prototype.getSerieReco = function () {
        return this.apiMovieTv
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/reco/series", { withCredentials: true })
            .toPromise();
    };
    // Get movies details
    MovieTvService.prototype.getDetails = function (movieId) {
        return this.apiMovieTv
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/movie-detail/" + movieId)
            .toPromise();
    };
    // Get movies details
    MovieTvService.prototype.getDetailsSerie = function (serieId) {
        return this.apiMovieTv
            .get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/serie-detail/" + serieId)
            .toPromise();
    };
    // Add this movie or serie to my list
    MovieTvService.prototype.addSomething = function (movieInfo, category) {
        return this.apiMovieTv
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/favorite-event/movie", movieInfo, {
            withCredentials: true,
        })
            .toPromise()
            .then(function (apiResponse) {
            return apiResponse;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MovieTvService.prototype.addSomethingS = function (serieInfo, category) {
        return this.apiMovieTv
            .post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].backUrl + "/favorite-event/tv-show", serieInfo, {
            withCredentials: true,
        })
            .toPromise()
            .then(function (apiResponse) {
            return apiResponse;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MovieTvService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__user_service__["c" /* UserService */]])
    ], MovieTvService);
    return MovieTvService;
}());

var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());

var Serie = /** @class */ (function () {
    function Serie() {
    }
    return Serie;
}());



/***/ }),

/***/ "./src/app/service/music.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MusicService = /** @class */ (function () {
    function MusicService() {
    }
    MusicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MusicService);
    return MusicService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UserService; });
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignupCredentials; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { environment } from '../../environments/environment.prod';

var UserService = /** @class */ (function () {
    function UserService(ajaxTruc) {
        this.ajaxTruc = ajaxTruc;
    }
    // GET /checklogin
    UserService.prototype.check = function () {
        var _this = this;
        return this.ajaxTruc
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/checklogin", { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    // POST /signup
    UserService.prototype.postSignup = function (credsSign) {
        var _this = this;
        return this.ajaxTruc
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/signup", credsSign, {
            withCredentials: true,
        })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    // POST /login
    UserService.prototype.postLogin = function (creds) {
        var _this = this;
        return this.ajaxTruc
            .post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/login", creds, { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    // GET /logout
    UserService.prototype.logout = function () {
        var _this = this;
        return this.ajaxTruc
            .get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/logout", { withCredentials: true })
            .toPromise()
            .then(function (apiResponse) {
            _this.currentUser = apiResponse.userInfo;
            return apiResponse;
        });
    };
    //  EDIT PROFILE
    UserService.prototype.postEdit = function (creds) {
        var _this = this;
        return this.ajaxTruc
            .put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].backUrl + "/api/edit", creds, {
            withCredentials: true,
        })
            .toPromise()
            .then(function (apiResponse) {
            apiResponse =
                _this.currentUser.interestedIn ||
                    _this.currentUser.interestedInEvent ||
                    _this.currentUser.interestedInSerie ||
                    _this.currentUser.interestedInBook;
            return apiResponse;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());

var User = /** @class */ (function () {
    function User() {
        this.interestedIn = [];
        this.interestedInSerie = [];
        this.interestedInEvent = [];
        this.interestedInBook = [];
    }
    return User;
}());

var LoginCredentials = /** @class */ (function () {
    function LoginCredentials() {
    }
    return LoginCredentials;
}());

var SignupCredentials = /** @class */ (function () {
    function SignupCredentials() {
        this.interestedIn = [];
        this.interestedInSerie = [];
        this.interestedInEvent = [];
        this.interestedInBook = [];
    }
    return SignupCredentials;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-info:hover {\n  background-color: #212529;\n  border-color: #212529;\n}\n.btn-info {\n  background-color: gray;\n  border-color: grey;\n  font-family: Arial, Helvetica, sans-serif;\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Sign up</h3>\n\n<form (ngSubmit)=\"signinSubmit()\">\n  <div class=\"form-group\">\n    <label>\n      Email :\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"formCreds.email\" name=\"email\" placeholder=\"imbored@billise.com\">\n      <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\n    </label>\n    <br>\n\n    <label>\n      Password :\n      <input type=\"password\" class=\"form-control col-8\" [(ngModel)]=\"formCreds.password\" name=\"password\" placeholder=\"*******\">\n\n    </label>\n    <br>\n\n    <label>\n      Username :\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"formCreds.username\" name=\"username\" placeholder=\"Username\">\n\n    </label>\n    <br>\n\n    <div>\n      <h4>❤️ Please pick your interests so we can show you a selection that is 100% made for you 👍</h4>\n      <br>\n      <p>I enjoy\n        <b>TV shows</b> that :</p>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsSerie(35)\" name=\"interestedInSerie[0]\" id=\"comedyTvShows\" value=\"comedyTvShows\"> Make me laugh my ass off\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsSerie(18)\" name=\"interestedInSerie[1]\" id=\"dramaTvShows\" value=\"dramaTvShows\"> Make me cry like a river\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsSerie(53)\" name=\"interestedInSerie[2]\" id=\"thrillerTvShows\" value=\"thrillerTvShows\"> Have an exciting plot (involving crime or espionage)\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsSerie(27)\" name=\"interestedInSerie[3]\" id=\"scaryTvShows\" value=\"scaryTvShows\"> Make me scared\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsSerie(28)\" name=\"interestedInSerie[4]\" id=\"actionTvShows\" value=\"actionTvShows\"> Have a huge amount of fireshots and/or spectacular car chases\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsSerie(878)\" name=\"interestedInSerie[5]\" id=\"fantasyTvShows\" value=\"fantasyTvShows\"> Have weird stuff happening like magic trolls or supernatural events\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsSerie(37)\" name=\"interestedInSerie[6]\" id=\"westernTvShows\" value=\"westernTvShows\"> Includes cowboys and lots of cactus\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsSerie(10749)\" name=\"interestedInSerie[7]\" id=\"loveTvShows\" value=\"loveTvShows\"> All I need is love\n      </label>\n\n\n      <br>\n\n      <p>I enjoy\n        <b>movies</b> that :</p>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterests(35)\" name=\"interestedIn[8]\" id=\"comedyMovies\" value=\"comedyMovies\"> Make me laugh my ass off\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterests(18)\" name=\"interestedIn[9]\" id=\"dramaMovies\" value=\"dramaMovies\"> Make me cry like a river\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterests(53)\" name=\"interestedIn[10]\" id=\"thrillerMovies\" value=\"thrillerMovies\"> Have an exciting plot (involving crime or espionage)\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterests(27)\" name=\"interestedIn[11]\" id=\"scaryMovies\" value=\"scaryMovies\"> Make me scared\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterests(28)\" name=\"interestedIn[12]\" id=\"actionMovies\" value=\"actionMovies\"> Have a huge amount of fireshots and/or spectacular car chases\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterests(878)\" name=\"interestedIn[13]\" id=\"fantasyMovies\" value=\"fantasyMovies\"> Have weird stuff happening like magic trolls or supernatural events\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterests(37)\" name=\"interestedIn[14]\" id=\"westernMovies\" value=\"westernMovies\"> Includes cowboys and lots of cactus\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterests(10749)\" name=\"interestedIn[15]\" id=\"loveMovies\" value=\"loveMovies\"> All I need is love\n      </label>\n\n\n      <br>\n\n      <p>I enjoy\n        <b>books</b> like :</p>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsBook('drama')\" name=\"interestedInBook[16]\" id=\"sadBook\" value=\"sadBook\"> The one that tell sad stories\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsBook('thrillers')\" name=\"interestedInBook[17]\" id=\"policeBook\" value=\"policeBook\"> The one where someone is muredered and we have to find who did it\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsBook('love')\" name=\"interestedInBook[18]\" id=\"loveBook\" value=\"loveBook\"> The one that finish happily ever after\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsBook('biography')\" name=\"interestedInBook[19]\" id=\"bioBook\" value=\"bioBook\"> The one that tell true story about someone\n      </label>\n\n\n      <br>\n\n\n\n      <br>\n\n      <p>I like\n        <b>events</b> in Paris such as :</p>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsEvent(1)\" name=\"interestedInEvent[21]\" id=\"festivEvents\" value=\"festivEvents\"> Going to a festival, flea-market or exhibition\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsEvent(3)\" name=\"interestedInEvent[22]\" id=\"spectacleEvents\" value=\"spectacleEvents\"> Seeing a show (theater, dance, stand-up..)\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsEvent(4)\" name=\"interestedInEvent[23]\" id=\"musicEvents\" value=\"musicEvents\"> Listening to live music and sometimes even dance\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsEvent(2)\" name=\"interestedInEvent[24]\" id=\"expoEvents\" value=\"expoEvents\"> Enjoying a good museum\n      </label>\n\n      <label class=\"btn btn-info\">\n        <input type=\"checkbox\" (change)=\"updateInterestsEvent(5)\" name=\"interestedInEvent[25]\" id=\"animationEvents\" value=\"animationEvents\"> Participate to a conference, lecture, meeting, visit..\n      </label>\n\n      <br>\n\n    </div>\n    <button class=\"btn btn-success\">Sign in</button>\n  </div>\n</form>\n\n<br>\n<br>\n<br>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(userTruc, resTruc) {
        this.userTruc = userTruc;
        this.resTruc = resTruc;
        this.formCreds = new __WEBPACK_IMPORTED_MODULE_1__service_user_service__["b" /* SignupCredentials */]();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.signinSubmit = function () {
        var _this = this;
        this.userTruc
            .postSignup(this.formCreds)
            .then(function (result) {
            _this.resTruc.navigateByUrl('/');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SignupComponent.prototype.updateInterests = function (interest) {
        var index = this.formCreds.interestedIn.indexOf(interest);
        if (index === -1) {
            this.formCreds.interestedIn.push(interest);
        }
        else {
            this.formCreds.interestedIn.splice(index, 1);
        }
    };
    SignupComponent.prototype.updateInterestsSerie = function (interest) {
        var index = this.formCreds.interestedInSerie.indexOf(interest);
        if (index === -1) {
            this.formCreds.interestedInSerie.push(interest);
        }
        else {
            this.formCreds.interestedInSerie.splice(index, 1);
        }
    };
    SignupComponent.prototype.updateInterestsEvent = function (interest) {
        var index = this.formCreds.interestedInEvent.indexOf(interest);
        if (index === -1) {
            this.formCreds.interestedInEvent.push(interest);
        }
        else {
            this.formCreds.interestedInEvent.splice(index, 1);
        }
    };
    SignupComponent.prototype.updateInterestsBook = function (interest) {
        var index = this.formCreds.interestedInBook.indexOf(interest);
        if (index === -1) {
            this.formCreds.interestedInBook.push(interest);
        }
        else {
            this.formCreds.interestedInBook.splice(index, 1);
        }
        // console.log(index);
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["c" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    backUrl: "http://localhost:3000"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map