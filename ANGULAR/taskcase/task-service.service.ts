import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { ITask } from "./task";

@Injectable({
    providedIn: "root"
    })

    export class TaskService{
         baseurl:string="http://localhost:8080/task";

        constructor(private http:HttpClient){}

        getTasks():Observable<ITask[]>{
            return this.http.get<ITask[]>(this.baseurl);
        }

    }