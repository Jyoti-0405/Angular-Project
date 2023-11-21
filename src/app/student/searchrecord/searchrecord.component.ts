import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-searchrecord',
  templateUrl: './searchrecord.component.html',
  styleUrls: ['./searchrecord.component.css']
})
export class SearchrecordComponent {

  constructor(private service:ApiService,private router: Router) { }

  findRecord(record: any) {
    this.service.getstudent().subscribe((responsed)=>{
      const isMatched = responsed.find((response:any)=>{
        return response.name === record.name && response.rollno === record.rollno
      });
      
      if (isMatched) {
        this.router.navigate(['resultpage', record.rollno]);
      }
      else
      {
        alert("records not found");
      }
    })
  }

  // isAuth():boolean{
  //   return this.service.studentAuth();
  // }

  // homepagerouting(){
  //   this.service.homepagerouting();
  // }
}
