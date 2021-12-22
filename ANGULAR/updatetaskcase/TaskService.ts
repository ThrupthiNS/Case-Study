import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { ITask } from "./TaskInterface";

@Injectable({ providedIn: 'root' })

export class TaskService {

    //baseurl:string="http://localhost:8080/task_id/99"

    constructor(private http:HttpClient) { }

   // getTasks(): Observable<ITask[]> {

      //  return this.http.get<ITask[]>(this.baseurl);

  //  }
    setPriority(a:number,b:string):Observable<ITask[]>{
      
        return this.http.get<ITask[]>("http://localhost:8080/task_id/"+a+"/priority/"+b);
        
    }
}