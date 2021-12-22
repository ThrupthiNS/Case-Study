import { Component, OnInit } from '@angular/core';
import {DataService} from "./Data-Service";
import {postData,respData} from "./postdataObj";
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-example',
  templateUrl: './post-example.component.html',
  styleUrls: ['./post-example.component.css']
})
export class PostExampleComponent implements OnInit {

form:any;
  task_id!:number;
    owner_id!:number;
    creator_id!:number;
    name!:string;
    description!:string;
    status!:string;
    priority!:string;
    notes!:string;
    isBookmarked!:boolean;
    created_on!:Date;
    status_changed_on!:Date;


  data!:string;
  posData!:postData;
  resultData!:respData;
  public users:any =[];
  constructor(private dataService:DataService,private router:Router) { }

 ngOnInit() {
        this.form=new FormGroup({
            task_id:new FormControl("",Validators.compose([Validators.required])),
            owner_id:new FormControl("",Validators.compose([Validators.required])),
            creator_id:new FormControl("",Validators.compose([Validators.required])),
            name:new FormControl("",Validators.compose([Validators.required,Validators.minLength(5)])),
            description:new FormControl("",Validators.compose([Validators.required,,Validators.minLength(5)])),
            status:new FormControl("",Validators.compose([Validators.required])),
            priority:new FormControl("",Validators.compose([Validators.required])),
            notes:new FormControl("",Validators.compose([Validators.required])),
            isBookmarked:new FormControl("",Validators.compose([Validators.required])),
            created_on:new FormControl("",Validators.compose([Validators.required])),
            status_changed_on:new FormControl("",Validators.compose([Validators.required]))

        });
    }
    onSubmit(user:any){
        console.log(user);
        this.posData=new postData();

    this.posData.task_id=user.task_id;
    this.posData.owner_id=user.owner_id;
    this.posData.creator_id=user.creator_id;
    this.posData.name=user.name;
    this.posData.description=user.description;
    this.posData.status=user.status;
    this.posData.priority=user.priority;
    this.posData.notes=user.notes;
    this.posData.isBookmarked=user.isBookmarked;
    this.posData.created_on=user.created_on;
    this.posData.status_changed_on=user.status_changed_on;
    console.log(this.posData);
    this.dataService.addPost(this.posData).subscribe(data=>console.log(data))
    

    }
    home(){
      this.router.navigate(['./home'])
    }



  /* ngOnInit(){
  }
   sendData(){
      this.posData=new postData();
      //this.posData.body="test data2";
      //this.posData.title="Some Title";
      //this.posData.userId=13;
      this.posData.tid=101;
       this.posData.oid=11;
        this.posData.cid=100;
         this.posData.tname="Dancing";
          this.posData.des="Lets Dance";
           this.posData.stat="Complete";
            this.posData.pri="Low";
             this.posData.not="ABCD";
              this.posData.isbok=True;
               this.posData.crea="10-12-2021";
                this.posData.stacrea="12-12-2021";

      this.dataService.addPost(this.posData)
      console.log(this.posData);*/
      //.subscribe(res:respData)=>{
        //this.resultData=res;
        //console.log(this.resultData.id);
        //this.data=this.resultData.id+"-"+this.resultData.title;
        
      //});
    //}
}
