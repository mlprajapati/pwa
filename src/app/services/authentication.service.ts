import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Headers} from "@angular/http"


@Injectable()
export class AuthenticationService {
    newHeaders:any
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        this.newHeaders= new HttpHeaders();
       this.newHeaders.set("Content-Type", "application/json"); 
         return this.http.post<any>('https://etext2dev.pearson.com/sapi/account/login', { username: email, password: password }, {headers:this.newHeaders})
             .pipe(map(user => {
                 if (user && user.token) {
                     localStorage.setItem('currentUser', JSON.stringify(user));
                 }
                 return user;
             }));
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}