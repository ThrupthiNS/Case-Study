import { Component, OnInit } from '@angular/core';
import {LoginService} from './loginservice';
import {ILogin} from "./user";
import { FormGroup,FormControl,Validators } from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-logincase',
  templateUrl: './logincase.component.html',
  styleUrls: ['./logincase.component.css']
})
export class LogincaseComponent implements OnInit {


    public users!:ILogin[];

  form:any;
  username!:string;
  pwd!:string;
    

    constructor(private ts:LoginService,private router:Router){}



    ngOnInit(){this.form=new FormGroup({
            username:new FormControl("",Validators.compose([Validators.required])),
            pwd:new FormControl("",Validators.compose([Validators.required])),
        });
        }

    onSubmit(user1:any)  {
        console.log(user1);
     this.ts.login(user1.username,user1.pwd).subscribe(data=>{
            if(data==true)
            {
              console.log(data);
              this.router.navigate(['/home']);
            }
            else{
              alert("Please check your username or password. USER NOT FOUND!!!");
            }

     });
    }

}