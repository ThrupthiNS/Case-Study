import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { IBook } from "./task";

@Injectable({ providedIn: 'root' })

export class bookmarkservice {


    constructor(private http:HttpClient) { }

    
    bookmark(a:number,b:boolean):Observable<IBook[]>{
      
        return this.http.get<IBook[]>("http://localhost:8080/task_id/"+a+"/isBookmarked/"+b);
    }
}
 