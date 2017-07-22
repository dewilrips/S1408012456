"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Games of Thrones';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \n  <header role=\"banner\">\n  \n\t\t\t<nav class=\"navbar\">\n\t\t\t<div class=\"container\">\n  <a href=\"#\" class=\"sitename\">Game of thrones</a>\n  \t\t\t\t<ul class=\"nav\">\n    \t\t\t\t\t<li><a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a></li>\n    \t\t\t\t\t<li><a routerLink=\"/heroes\" routerLinkActive=\"active\">Celebrities</a></li>\n    \t\t\t\t\t\n    \t\t\t\t\n  \t\t\t\t</ul>\n\t\t\t</div>\n      </nav>\n      \n    <router-outlet></router-outlet>\n    \n  ",
        styleUrls: ['./app.component.css']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map