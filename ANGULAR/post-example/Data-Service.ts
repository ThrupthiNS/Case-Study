import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from "@angular/common/http";
import { postData,respData } from "./postdataObj";

@Injectable({
    providedIn:'root'
})

export class DataService{
   // postUrl:string="https://jsonplaceholder.typicode.com/posts";
   postUrl:string="http://localhost:8080/tasks";
    httpOptions={
        headers:new HttpHeaders({
            'Content-Type':'application/json','Authorization':'my-auth-token'
        })
    };

        constructor(private httpClient:HttpClient){}

        addPost(postD:postData){
          //  return this.httpClient.post(this.postUrl,postD,this.httpOptions);
          return this.httpClient.post(this.postUrl,postD);
        }
    }
