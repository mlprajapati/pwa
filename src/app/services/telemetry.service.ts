import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
@Injectable()
export class TelemetryService {

    constructor(private http: HttpClient) { }
    url = 'http://localhost:4000';

    getSectionList() {
        return this.http.get('/api/section');
    }

    getUsersDetails(ids){
        return this.http.get('/ups/api/v1/users/attributes');
    }

    getUsers() {
        return this
            .http
            .get('../assets/data/db.json');
    }
    getAll() {
        return this.http.get<User[]>('/api/users');
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('/api/users', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}