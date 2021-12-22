import { Component, OnInit } from '@angular/core';
import {notesservice} from './NotesService';
import {INotes} from './task';
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  public tasks!:INotes[];
  form!:any;
  notes!:string;
  task_id!:number;


  constructor(private ns:notesservice, private router:Router) { }

   ngOnInit(){
    this.form=new FormGroup({
      
        task_id:new FormControl("",Validators.compose([Validators.required])),
        notes:new FormControl("",Validators.compose([Validators.required]))
        
       
    });
}
onSubmitnotes(user1:any)  {
  console.log(user1);
this.ns.notes(user1.task_id,user1.notes).subscribe(data=> this.tasks =data)
   
  
}
home(){
  this.router.navigate(['./home'])
}

}