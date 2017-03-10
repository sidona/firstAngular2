import {NgModule} from '@angular/core'
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./events-app.component";
import {EventsListComponent} from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component";
import {EventService} from "./events/shared/event.service";
import {JQ_TOKEN,TOASTR_TOKEN,Toastr,CollapsibleWellComponent,SimpleModalComponent,ModalTriggerDirective} from "./common/index";
import {EventDetailComponent} from "./events/event-detail/event-details.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./routes";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-detail/event-route-activator.service";
import {EventListResolver} from "./events/events-list-resolver.service";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateSessionComponent} from "./events/event-detail/create-session.component";
import {SessionListComponent} from "./events/event-detail/session-list.component";




declare let toastr:Toastr
declare let jQuery: Object

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective
    ],
    bootstrap:[EventsAppComponent],
    providers:[
        EventService,
        {provide:TOASTR_TOKEN, useValue:toastr},
        {provide:JQ_TOKEN, useValue:jQuery},
        EventRouteActivator,
        EventListResolver,
        AuthService,
        {provide:'canDeactivateCreateEvent', useValue:checkDirtyState}
    ]
})
export class AppModule {

}

function checkDirtyState(component:CreateEventComponent){
   if(component.isDirty)
       return window.confirm('you have not saved this event, do you really want to cancel?');
    return true
}