import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  record: any = {
    rollno: 4,
    name: 'raj',
    dob: "",
    score: 0
  };

  constructor(private service:ApiService,private route: ActivatedRoute) {
    const rollno = this.route.snapshot.paramMap.get("rollno");
    this.updaterecord(rollno);
  }

  async updaterecord(rollno:any){
    const request = await this.service.getstudent();
    request.subscribe((response) => {
      const allRecords = response;
      this.record = <unknown> allRecords.filter((response: any)=>{
        return response.rollno == rollno;
      })[0];
    })
  }

  // isAuth():boolean{
  //   return this.service.studentAuth();
  // }

  // homepagerouting(){
  //   this.service.homepagerouting();
  // }
  
}

