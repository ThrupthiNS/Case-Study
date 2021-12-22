import { Component, OnInit } from '@angular/core';
import { ITask } from "./TaskInterface";
import { TaskService } from './TaskService';
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatetaskcase',
  templateUrl: './updatetaskcase.component.html',
  styleUrls: ['./updatetaskcase.component.css']
})
export class UpdatetaskcaseComponent implements OnInit {

  //public tasks!:ITask[];
    public task1!:ITask[];
    form2!:any;
    task_id!:number;
    priority!:string;
  constructor(private ts:TaskService,private router:Router) { }

  

  ngOnInit(){
    this.form2=new FormGroup({
      task_id:new FormControl("",Validators.compose([Validators.required])),

      priority:new FormControl("",Validators.compose([Validators.required]))
        
       
    });
}
onSubmitpri(user1:any)  {
  console.log(user1);
this.ts.setPriority(user1.task_id,user1.priority).subscribe(data=> this.task1 =data)
   
  
}
home(){
  this.router.navigate(['./home'])
}

}
