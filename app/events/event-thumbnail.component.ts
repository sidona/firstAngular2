import {Component, Input, Output,EventEmitter} from "@angular/core";
import {IEvent} from "./shared/event.model";

@Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/event-thumbnail.component.html',
    styles:['.pad-left{margin-left: 120px}' +
    '.well div{color: #bbb' +
    '.thumbnail {min-height:210px}' +
    '.green {color:red !important;}'


    ]
})

export class EventThumbnailComponent {
    @Input() event: IEvent
    someProperty:any="some value";
    @Output() eventClick=new EventEmitter();


    handleClickMe(){
      this.eventClick.emit(this.event.name);
    }
    // logFoo(){
    //     console.log('foo')
    // }
    getStartTimeClass(){
        if(this.event && this.event.time === '8:00 am')
            return {color:'#003300','font-weight':'bold'}

    }
}