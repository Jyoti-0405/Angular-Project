import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { SearchrecordComponent } from './searchrecord/searchrecord.component';

const routes: Routes = [
  {
    path: 'searchrecord',
    component: SearchrecordComponent
  },
  {
    path:'resultpage/:rollno',
    component:ResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
