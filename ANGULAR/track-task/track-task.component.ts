import { Component, OnInit } from '@angular/core';
import {trackservice} from './trackservice';
import {ITrack} from './task';
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-task',
  templateUrl: './track-task.component.html',
  styleUrls: ['./track-task.component.css']
})
export class TrackTaskComponent implements OnInit {


  public tasks!:ITrack[];
  form2!:any;
  status!:string;
constructor(private ts:trackservice, private router:Router) { }

ngOnInit(){
  this.form2=new FormGroup({
      status:new FormControl("",Validators.compose([Validators.required]))

      });
}
onSubmittrack(user1:any)  {
  console.log(user1);
this.ts.track(user1.status).subscribe(data=> this.tasks =data)
   
  
}
home(){
  this.router.navigate(['./home'])
}
}