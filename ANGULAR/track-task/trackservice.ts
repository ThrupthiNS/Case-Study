import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http'
import { ITrack } from "./task";

@Injectable({ providedIn: 'root' })

export class trackservice {


    constructor(private http:HttpClient) { }

    
    track(a:string):Observable<ITrack[]>{
      
        return this.http.get<ITrack[]>("http://localhost:8080/status/"+a);
    }
}