
import {Component, OnInit,Inject} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {TOASTR_TOKEN,Toastr} from "../common/toastr.service";

@Component({
    templateUrl:'app/user/profile.component.html',
    styles:['em{float:right;color:#E05C65;padding-left: 10px} .error input{background-color: #bd362f}']
})
export class ProfileComponent implements OnInit{

    profileForm:FormGroup;
    private firstName:FormControl;
    private lastName:FormControl;

    constructor(private authService:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr:Toastr){

    }

    ngOnInit(){
        this.firstName=new FormControl(this.authService.currentUser.firstName, Validators.required);
        this.lastName= new FormControl(this.authService.currentUser.lastName, [Validators.required,Validators.pattern('[a-zA-Z].*')]);
        this.profileForm=new FormGroup({
            firstName:this.firstName,
            lastName:this.lastName
        })
    }
    validatelastName(){
       return this.lastName.valid || this.lastName.untouched
    }

    saveProfile(formValue){
        if(this.profileForm.valid){
            this.authService.updateCurrentUser(formValue.firstName, formValue.lastName);
            //this.router.navigate(['events']);
           this.toastr.success('Profile saved')
        }

    }

    cancel(){
       this.router.navigate(['events']);
    }
}