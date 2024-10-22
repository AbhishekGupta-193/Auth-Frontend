import { Component } from '@angular/core';
import { FormGroup,FormBuilder,FormControl, Validators } from '@angular/forms';
import { HttpService } from './sharedData/http.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
    signUpForm!:FormGroup;
    name:string='';
    mobile_no: string = '';
    password: string = '';

    constructor (private http:HttpService,private formbuilder:FormBuilder){
      this.signUpForm = formbuilder.group({
        name:['',Validators.required],
        mobile_no:['',Validators.required],
        password:['',Validators.required],
      })
    }

    onsignUpFormSubmit(){
      
    }
}
