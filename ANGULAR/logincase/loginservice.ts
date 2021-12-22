import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient} from '@angular/common/http';
import {ILogin} from "./user";


@Injectable({
    providedIn: "root"
    })

    export class LoginService{
         

        constructor(private http:HttpClient){}

          login(a:string,b:string):Observable<any>{

        return this.http.get<boolean[]>("http://localhost:8080/username/"+a+"/pwd/"+b);

    }

}