import { Injectable } from '@angular/core';


@Injectable()
export class UserService {
    private users: any;
    constructor() {
        this.users = JSON.parse(localStorage.getItem('currentUser')) || undefined;
     }

    getCurrentUser() {
        return this.users;
    }
}