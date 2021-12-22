import { Component, OnInit } from '@angular/core';
import { TaskService } from "./task-service.service";
import { ITask } from './task';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-taskcase',
  templateUrl: './taskcase.component.html',
  styleUrls:['./taskcase.component.css']
})
export class TaskcaseComponent implements OnInit {

  public tasks!:ITask[];

  constructor(private taskService:TaskService,private router:Router){}

  ngOnInit()  {
      this.taskService.getTasks().subscribe(data=>this.tasks=data)
      
  }
  home(){
    this.router.navigate(['./home'])
  }
}