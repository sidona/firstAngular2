
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormControl, Validators, FormGroup} from "@angular/forms";
import {ISession} from "../shared/event.model";

@Component({
    selector:'create-session',
    templateUrl:'app/events/event-detail/create-session.component.html',
    styles:['em{float:right;color:#E05C65;padding-left: 10px} .error input, .error select, .error textarea{background-color: #bd362f}']
})

export class CreateSessionComponent implements OnInit{

    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession=new EventEmitter();

    newSessionForm:FormGroup;
    name:FormControl;
    presenter:FormControl;
    duration:FormControl;
    level:FormControl;
    abstract:FormControl;

    ngOnInit(){
        this.name=new FormControl('',Validators.required);
        this.presenter=new FormControl('',Validators.required);
        this.duration=new FormControl('',Validators.required);
        this.level=new FormControl('',Validators.required);
        this.abstract=new FormControl('',[Validators.required,Validators.maxLength(400),this.restrictedWords]);

        this.newSessionForm=new FormGroup({
            name:this.name,
            presenter:this.presenter,
            duration:this.duration,
            level:this.level,
            abstract:this.abstract
        })
    }

    private restrictedWords(control:FormControl):{[key:string]:any}
    {
        return control.value.includes('foo')?
            {'restrictedWords':'foo'}
            :null
    }

    saveSession(formValue){
        let session:ISession={
            id:undefined,
            name:formValue.name,
            duration:+formValue.duration,
            level:formValue.level,
            presenter:formValue.presenter,
            abstract:formValue.abstract,
            voters:[]
        };
      this.saveNewSession.emit(session)

    }
    cancel(){
        this.cancelAddSession.emit()
    }

}