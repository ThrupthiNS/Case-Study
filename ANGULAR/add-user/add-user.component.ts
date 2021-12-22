import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from "@angular/forms"; 
import { Router } from '@angular/router';
import {DataService} from "./userservice";
import { postData,respData } from './postuser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form:any;
  user_id!: number;
    username!: string;
    email!: string;
    first_name!: string;
    last_name!: string;
    contact_number!: bigint;
    role!: string;
    isactive!: boolean;
    dob!: Date;
    created_on!: Date;
    pwd!: string;

data!:string;

  posData!:postData;

  resultData!:respData;

  public users:any =[];


  constructor(private dataService:DataService,private router:Router) { }

  
  ngOnInit(){
    this.form=new FormGroup({
      user_id:new FormControl(
          "",
          Validators.compose([Validators.required])
      ),
      username:new FormControl("",Validators.compose([Validators.required])),
      email:new FormControl("",Validators.compose([Validators.required])),
      first_name:new FormControl("",Validators.compose([Validators.required])),
      last_name:new FormControl("",Validators.compose([Validators.required])),
      contact_number:new FormControl("",Validators.compose([Validators.required])),
      role:new FormControl("",Validators.compose([Validators.required])),
      isactive:new FormControl("",Validators.compose([Validators.required])),
      dob:new FormControl("",Validators.compose([Validators.required])),
      created_on:new FormControl("",Validators.compose([Validators.required])),
      pwd:new FormControl("",Validators.compose([Validators.required]))

  });
}
onSubmit(user:any){

  console.log(user);
  this.posData=new postData();

  this.posData.user_id=user.user_id;
  this.posData.username=user.username;
  this.posData.email=user.email;
  this.posData.first_name=user.first_name;
  this.posData.last_name=user.last_name;
  this.posData.contact_number=user.contact_number;
  this.posData.role=user.role;
  this.posData.isactive=user.isactive;
  this.posData.dob=user.dob;
  this.posData.created_on=user.created_on;
  this.posData.pwd=user.pwd;

  console.log(this.posData);
  this.dataService.addPost(this.posData).subscribe(
    data=>console.log(data)
  )

}
home(){
  this.router.navigate(['./home'])
}

}