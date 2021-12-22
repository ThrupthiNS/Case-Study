import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { postData, respData } from "./postuser";
@Injectable({
    providedIn: 'root'
})
export class DataService{
     postUrl: string = "http://localhost:8080/user";

    httpOptions = {
        headers : new HttpHeaders({
            'Content-Type': 'application/json' , 'Authorization': 'my-auth-token'})
        };

        constructor(private httpClient : HttpClient) {

        }

        addPost(postD: postData) {
            return this.httpClient.post(this.postUrl, postD, this.httpOptions);

        }
    }