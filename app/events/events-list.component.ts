
import {Component} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";
@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})

export class EventsListComponent{
        events:any[]
   constructor (private eventService:EventService, private toastr:ToastrService){

   }

   ngOnInit(){
       this.events=this.eventService.getEvents()
   }

    handleEventClicked(data){
        console.log('received:',data)
    }
    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
}
}