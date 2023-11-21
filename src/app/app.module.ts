import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherModule } from "./teacher/teacher.module";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component'
import { StudentModule } from './student/student.module';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        TeacherModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StudentModule
        
    ]
})
export class AppModule { }

