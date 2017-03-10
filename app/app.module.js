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
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
var events_app_component_1 = require("./events-app.component");
var events_list_component_1 = require("./events/events-list.component");
var event_thumbnail_component_1 = require("./events/event-thumbnail.component");
var navbar_component_1 = require("./nav/navbar.component");
var event_service_1 = require("./events/shared/event.service");
var index_1 = require("./common/index");
var event_details_component_1 = require("./events/event-detail/event-details.component");
var router_1 = require("@angular/router");
var routes_1 = require("./routes");
var create_event_component_1 = require("./events/create-event.component");
var _404_component_1 = require("./errors/404.component");
var event_route_activator_service_1 = require("./events/event-detail/event-route-activator.service");
var events_list_resolver_service_1 = require("./events/events-list-resolver.service");
var auth_service_1 = require("./user/auth.service");
var forms_1 = require("@angular/forms");
var create_session_component_1 = require("./events/event-detail/create-session.component");
var session_list_component_1 = require("./events/event-detail/session-list.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes),
            ],
            declarations: [
                events_app_component_1.EventsAppComponent,
                events_list_component_1.EventsListComponent,
                event_thumbnail_component_1.EventThumbnailComponent,
                navbar_component_1.NavBarComponent,
                event_details_component_1.EventDetailComponent,
                create_event_component_1.CreateEventComponent,
                _404_component_1.Error404Component,
                create_session_component_1.CreateSessionComponent,
                session_list_component_1.SessionListComponent,
                index_1.CollapsibleWellComponent,
                index_1.SimpleModalComponent,
                index_1.ModalTriggerDirective
            ],
            bootstrap: [events_app_component_1.EventsAppComponent],
            providers: [
                event_service_1.EventService,
                { provide: index_1.TOASTR_TOKEN, useValue: toastr },
                { provide: index_1.JQ_TOKEN, useValue: jQuery },
                event_route_activator_service_1.EventRouteActivator,
                events_list_resolver_service_1.EventListResolver,
                auth_service_1.AuthService,
                { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function checkDirtyState(component) {
    if (component.isDirty)
        return window.confirm('you have not saved this event, do you really want to cancel?');
    return true;
}
//# sourceMappingURL=app.module.js.map