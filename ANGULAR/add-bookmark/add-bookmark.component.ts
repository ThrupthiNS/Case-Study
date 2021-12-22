import { Component, OnInit } from '@angular/core';
import {bookmarkservice} from './BookmarkService';
import {IBook} from './task';
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {

   public tasks!:IBook[];
  form!:any;
  isBookmarked!:boolean;
  task_id!:number;


  constructor(private bs:bookmarkservice, private router:Router) { }

   ngOnInit(){
    this.form=new FormGroup({
      
        task_id:new FormControl("",Validators.compose([Validators.required])),
        isBookmarked:new FormControl("",Validators.compose([Validators.required]))
        
       
    });
}
onSubmit(user1:any)  {
  console.log(user1);
this.bs.bookmark(user1.task_id,user1.isBookmarked).subscribe(data=> this.tasks =data)
   
  
}
home(){
  this.router.navigate(['./home'])
}

}