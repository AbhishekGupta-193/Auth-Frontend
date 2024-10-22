import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { DashboardComponent } from './Application/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component:SignInComponent
  },
  {
    path:"register",
    component:SignUpComponent
  },
  {
    path:"dashboard",
    component:DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
