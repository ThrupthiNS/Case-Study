import { Component, OnInit } from '@angular/core';
import { AssignService } from './AssignService';
import { IAssign } from './task';
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrls: ['./assigntask.component.css']
})
export class AssigntaskComponent implements OnInit {

  public tasks!:IAssign[];
  form!:any;
  task_id!:number;
  owner_id!:number;


  constructor(private as:AssignService, private router:Router) { }

   ngOnInit(){
    this.form=new FormGroup({
      
        task_id:new FormControl("",Validators.compose([Validators.required])),
        owner_id:new FormControl("",Validators.compose([Validators.required]))
        
       
    });
}
onSubmitnotes(user1:any)  {
  console.log(user1);
this.as.notes(user1.task_id,user1.owner_id).subscribe(data=> this.tasks =data)
   
  
}
home(){
  this.router.navigate(['./home'])
}

}
