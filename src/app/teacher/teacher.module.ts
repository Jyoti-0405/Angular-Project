import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import{HttpClientModule} from '@angular/common/http'
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    SignupComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class TeacherModule { }
