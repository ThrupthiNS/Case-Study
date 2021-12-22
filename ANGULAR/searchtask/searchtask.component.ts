import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { Router } from '@angular/router';
import { ISearch } from "./task";
import {SearchService} from './SearchService'


@Component({
  selector: 'app-searchtask',
  templateUrl: './searchtask.component.html',
  styleUrls: ['./searchtask.component.css']
})
export class SearchtaskComponent implements OnInit {

  public tasks!:ISearch[];
  form!:any;
  task_id!:number;
 


  constructor(private ss:SearchService, private router:Router) { }

   ngOnInit(){
    this.form=new FormGroup({
      
        task_id:new FormControl("",Validators.compose([Validators.required]))
   
    });
}
onSubmitnotes(user1:any)  {
  console.log(user1);
this.ss.search(user1.task_id).subscribe(data=>this.tasks=data)

}
home(){
  this.router.navigate(['./home'])
}

}