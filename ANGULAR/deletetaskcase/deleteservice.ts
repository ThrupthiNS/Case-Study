import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { ITask } from "./task"; 

@Injectable({
    providedIn: "root"
    })

    export class DeleteService{
 
        constructor(private http:HttpClient){}

          delete(a:number):Observable<ITask[]>{

        return this.http.get<ITask[]>("http://localhost:8080/task_del/"+a);
        }

    }