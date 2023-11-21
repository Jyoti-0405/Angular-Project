import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './teacher/dashboard/dashboard.component';
import { LoginComponent } from './teacher/login/login.component';
import { SignupComponent } from './teacher/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
const routes: Routes = [
  {path:'',redirectTo:'homepage',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'homepage',component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }