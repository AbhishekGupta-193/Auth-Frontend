import { Component } from '@angular/core';
import { HttpService } from './sharedData/http.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SignInService } from './sharedData/sign-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInForm!: FormGroup;
  mobile_no: string = '';
  password: string = '';

  constructor(private formbuilder: FormBuilder, private http: HttpService, private signinService:SignInService,private router:Router) {
    this.signInForm = formbuilder.group({
      mobile_no: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onsignInFormSubmit() {
    console.log(this.signInForm.value);
    this.mobile_no = this.signInForm.get('mobile_no')?.value;
    this.password = this.signInForm.get('password')?.value;
    const credentials:any = {
      "mobileNo":this.mobile_no,
      "password":this.password
    }
    this.http.signIn("/loginUser",credentials).subscribe({
      next:(res:any)=>{
        console.log("login successful : ",res);
        this.signinService.updateUser(res);
        this.router.navigate(['/dashboard']);
        
      },
      error:(err:string)=>{
        console.log("error in login : ",err);
      }
    })
  }
}
