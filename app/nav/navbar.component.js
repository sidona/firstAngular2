"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var auth_service_1 = require("../user/auth.service");
var event_service_1 = require("../events/shared/event.service");
var NavBarComponent = (function () {
    function NavBarComponent(auth, eventService) {
        this.auth = auth;
        this.eventService = eventService;
        this.searchTerm = "";
    }
    NavBarComponent.prototype.searchSession = function (searchTerm) {
        var _this = this;
        this.eventService.searchSession(searchTerm).subscribe(function (sessions) {
            _this.foundSessions = sessions;
        });
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: 'app/nav/navbar.component.html',
            styles: ['.nav.navbar-nav {font-size: 15px}' +
                    '#searchForm{margin-right:100px} ' +
                    'li > a.active{color:#F97924;}']
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, event_service_1.EventService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=navbar.component.js.map