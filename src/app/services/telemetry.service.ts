import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { TreeviewItem } from 'ngx-treeview';
@Injectable()
export class TelemetryService {

    constructor(private http: HttpClient) { }
    url = 'http://localhost:4000';
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
    getBooks(): TreeviewItem[] {
        const childrenCategory = new TreeviewItem({
            text: 'Unit 2: Comparing and Combining Shapes', value: 1, collapsed: true, children: [
                { text: 'Investigation 1: Composing and Decomposing 2-D Shapes', value: 11 },
                { text: 'Investigation 2: Describing and Sorting Shapes', value: 12 },
                {
                    text: 'Investigation 3: Describing and Sorting Shapes', value: 13, children: [
                        { text: 'Session 2.1: Sorting Shapes and Making a Shape Poster', value: 9121 },
                        { text: 'Session 2.2: Describing Trangles', value: 9122 },
                        { text: 'Session 2.3: Describing Quadrilaterals', value: 9123 },
                        { text: 'Session 2.4: What is Trangle?', value: 9123 },
                        { text: 'Session 2.5: Describing and Identifying Attributes of Shapes', value: 9123 },
                        { text: 'Session 2.6: Describing Quadrilaterals', value: 9123 }
                    ]
                }
            ]
        });
        const itCategory = new TreeviewItem({
            text: 'Unit 2: Comparing and Combining Shapes', value: 1, collapsed: true, children: [
                { text: 'Investigation 1: Composing and Decomposing 2-D Shapes', value: 11 },
                { text: 'Investigation 2: Describing and Sorting Shapes', value: 12 },
                {
                    text: 'Investigation 3: Describing and Sorting Shapes', value: 13, children: [
                        { text: 'Session 2.1: Sorting Shapes and Making a Shape Poster', value: 9121 },
                        { text: 'Session 2.2: Describing Trangles', value: 9122 },
                        { text: 'Session 2.3: Describing Quadrilaterals', value: 9123 },
                        { text: 'Session 2.4: What is Trangle?', value: 9123 },
                        { text: 'Session 2.5: Describing and Identifying Attributes of Shapes', value: 9123 },
                        { text: 'Session 2.6: Describing Quadrilaterals', value: 9123 }
                    ]
                }
            ]
        });
        const teenCategory = new TreeviewItem({
            text: 'Unit 2: Comparing and Combining Shapes', value: 1, collapsed: true, children: [
                { text: 'Investigation 1: Composing and Decomposing 2-D Shapes', value: 11 },
                { text: 'Investigation 2: Describing and Sorting Shapes', value: 12 },
                {
                    text: 'Investigation 3: Describing and Sorting Shapes', value: 13, children: [
                        { text: 'Session 2.1: Sorting Shapes and Making a Shape Poster', value: 9121 },
                        { text: 'Session 2.2: Describing Trangles', value: 9122 },
                        { text: 'Session 2.3: Describing Quadrilaterals', value: 9123 },
                        { text: 'Session 2.4: What is Trangle?', value: 9123 },
                        { text: 'Session 2.5: Describing and Identifying Attributes of Shapes', value: 9123 },
                        { text: 'Session 2.6: Describing Quadrilaterals', value: 9123 }
                    ]
                }
            ]
        });
        const othersCategory = new TreeviewItem({ text: 'Others', value: 3, collapsed: true });
        return [childrenCategory, itCategory, teenCategory, othersCategory];
    }
}