
import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {IEvent} from "./shared/event.model";
@Component({

    templateUrl:'app/events/events-list.component.html'
})

export class EventsListComponent implements OnInit{
        events:IEvent[]
   constructor (private eventService:EventService, private toastr:ToastrService, private route:ActivatedRoute){

   }

   ngOnInit(){
       // this.eventService.getEvents().subscribe(events=>{
       //     this.events=events
       // })
       this.events=this.route.snapshot.data['events']
   }

    handleEventClicked(data){
        console.log('received:',data)
    }
    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
}
}