import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SearchrecordComponent } from './searchrecord/searchrecord.component';

import {FormsModule} from '@angular/forms';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    SearchrecordComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule
  ]
})
export class StudentModule { }
