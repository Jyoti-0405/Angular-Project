import { Component,OnInit} from '@angular/core';

import {FormBuilder,FormGroup, Validators,} from '@angular/forms'

import { ApiService } from 'src/app/shared/api.service';

import { studentdata } from '../student.model';
import { Route, Router } from '@angular/router';



@Component({

  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html',

  styleUrls: ['./dashboard.component.css']

})

export class DashboardComponent implements OnInit {

  showadd!:boolean;

  showupdate!:boolean;

  studentmodelobj:studentdata=new studentdata

formValue !:FormGroup;

allstudentdata:any;



constructor (private formBuilder:FormBuilder,private api:ApiService,private router:Router,){}

  ngOnInit(): void {

    this.formValue=this.formBuilder.group({

      rollno:['',Validators.required],

      name:['',Validators.required],

      dob:['',Validators.required],

      score:['',Validators.required],

    })

    this.getdata()

  }

  add(){

    this.showadd=true;

    this.showupdate=false;

  }

  edit(data:any){

    this.showadd=false;

    this.showupdate=true;
    this.studentmodelobj.id=data.id;
    this.formValue.controls['rollno'].setValue(data.rollno)
    this.formValue.controls['name'].setValue(data.name)
    this.formValue.controls['dob'].setValue(data.dob)
    this.formValue.controls['score'].setValue(data.score)
    
  }
  update(){
    this.studentmodelobj.rollno=this.formValue.value.rollno;

    this.studentmodelobj.name=this.formValue.value.name;

    this.studentmodelobj.dob=this.formValue.value.dob;

    this.studentmodelobj.score=this.formValue.value.score;
    
    this.api.updatestudent(this.studentmodelobj,this.studentmodelobj.id).subscribe(res=>{
      this.formValue.reset();
      this.getdata();
    alert("Record Updated Succsfully...!!!");
    },
    err=>{
      alert("Something Went Wrong...!!!")
    })

  }

  addstudent(){

    this.studentmodelobj.rollno=this.formValue.value.rollno;

    this.studentmodelobj.name=this.formValue.value.name;

    this.studentmodelobj.dob=this.formValue.value.dob;

    this.studentmodelobj.score=this.formValue.value.score;




    this.api.poststudent(this.studentmodelobj).subscribe(res=>{

      //console.log(res)

      this.formValue.reset()

      this.getdata()

      alert("Record Added Succesfully");

    },

    err=>{

      alert("Somethings Went Wrong...!!!")

    })

  }

  getdata(){

    this.api.getstudent()
    .subscribe(res=>{
      this.allstudentdata=res;
    })

  }
  deletestud(data:any){
    if(confirm('Are you sure to delete.?'))
    this.api.deletestudent(data.id)
    .subscribe(res=>{
      alert("Record Deleted Succesfully..!!")
      this.getdata();
    })
  }



}