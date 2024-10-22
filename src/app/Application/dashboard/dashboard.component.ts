import { Component } from '@angular/core';
import { SignInService } from 'src/app/Authentication/sign-in/sharedData/sign-in.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user:any;
  constructor(private signinService:SignInService){}

  ngOnInit():void{
    this.signinService.userDetails.subscribe((user: any) => {
      this.user = user;
      console.log("User data in dashboard: ", this.user);
    });
  }

}
