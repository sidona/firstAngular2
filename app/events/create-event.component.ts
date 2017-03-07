

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {EventService} from "./shared/event.service";

@Component({
    templateUrl:'app/events/create-event.component.html',
    styles:['em{float:right;color:#E05C65;padding-left: 10px} .error input{background-color: #bd362f}']
})

export class CreateEventComponent{
    isDirty:boolean=true
    // event:any

    constructor(private router:Router, private eventService:EventService){

    }

    // ngOnInit(){
    //     this.event={
    //         name:'Ng example',
    //         date:'10/10/2050',
    //         time:'8 am',
    //         price:10.69,
    //         location:{
    //             address:'garii 45',
    //             city:'ceva',
    //             country:'ceva'
    //         },
    //         onlineUrl:'http://localhost:8808/events',
    //         imageUrl:'http://ngSpectacular.com/logo.png'
    //     }
    // }

    saveEvent(formValue){
        this.eventService.saveEvent(formValue);
        this.isDirty=false;
        this.router.navigate(['/events'])
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}