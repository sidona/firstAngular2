import {EventDetailComponent} from "./events/event-detail/event-details.component";
import {EventsListComponent} from "./events/events-list.component";
import {Routes} from "@angular/router";
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-detail/event-route-activator.service";
import {EventListResolver} from "./events/events-list-resolver.service";
import {CreateSessionComponent} from "./events/event-detail/create-session.component";


export const appRoutes:Routes=[
    {path:'events/new',component:CreateEventComponent,canDeactivate:['canDeactivateCreateEvent']},
    {path:'events',component:EventsListComponent,resolve:{events:EventListResolver}},
    {path:'events/:id',component:EventDetailComponent, canActivate:[EventRouteActivator]},
    {path:'events/session/new',component:CreateSessionComponent},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/events',pathMatch:'full'},
    {path:'user',loadChildren:'app/user/user.modules#UserModule'}

];