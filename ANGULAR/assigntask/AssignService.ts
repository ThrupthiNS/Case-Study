import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { IAssign } from "./task";

@Injectable({ providedIn: 'root' })

export class AssignService {


    constructor(private http:HttpClient) { }

    
    notes(a:number,b:number):Observable<IAssign[]>{
      
        return this.http.get<IAssign[]>("http://localhost:8080/task_id/"+a+"/owner_id/"+b);
    }
}