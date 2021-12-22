import { Component, OnInit } from '@angular/core';
import {DeleteService} from './deleteservice';
import { FormGroup,FormControl,Validators } from "@angular/forms";
import {ITask} from "./task"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-deletetaskcase',
  templateUrl: './deletetaskcase.component.html',
  styleUrls: ['./deletetaskcase.component.css']
})
export class DeletetaskcaseComponent implements OnInit {

   public tasks!:ITask[];
   form!:any;
  task_id!:number;

  constructor(private deleteService:DeleteService,private router:Router) { }

  ngOnInit() {this.form=new FormGroup({ 
      task_id:new FormControl("",Validators.compose([Validators.required]))
  });
  }
onSubmit(user1:any)  {
        console.log(user1);
     this.deleteService.delete(user1.task_id).subscribe(data=>this.tasks=data)
}
home(){
  this.router.navigate(['./home'])
}
}
