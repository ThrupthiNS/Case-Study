import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { INotes } from "./task";

@Injectable({ providedIn: 'root' })

export class notesservice {


    constructor(private http:HttpClient) { }

    
    notes(a:number,b:string):Observable<INotes[]>{
      
        return this.http.get<INotes[]>("http://localhost:8080/task_id/"+a+"/notes/"+b);
    }
}
 