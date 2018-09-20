import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { Headers } from '@angular/http';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    users = [
        { id: 1, username: 'realize.demo', email: 'demo@gmail.com', password: 'testing123$' },
        { id: 2, username: 'krishna', email: 'kri@gmail.com', password: '12345' },
        { id: 3, username: 'madan', email: 'Madan@gmail.com', password: '12345' },
        { id: 4, username: 'chittrang', email: 'chittrang@gmail.com', password: '12345' }
    ]
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
        return of(null).pipe(mergeMap(() => {
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                let filteredUsers = this.users.filter(user => {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    let user = filteredUsers[0];
                    /* let body = {
                         // id: user.id,
                         username: user.username,
                         email: user.email,
                         // firstName: user.firstName,
                         //lastName: user.lastName,
                         token: 'fake-jwt-token'
                     };*/

                    let body =
                    {
                        "token": "ST-56363-aRcRX5IbYlAUYFd3XICC-b3-rumba-int-01-06",
                        "refreshToken": null,
                        "cookies": {
                            "CASTGC": "TGT-47274-UVYDlHe2FLbRydQ3BdnkHiJcbh5Tw2tDM6wAEreBwyTbz9CtfU-b3-rumba-int-01-06",
                            "Path": "/",
                            "BIGipServerrumba-int-cluster-01": "1194399498.36895.0000",
                            "path": "/"
                        },
                        "loggedInSince": 1499787399968,
                        "identityId": "e36d8f9865e9410fa92ca6ee2190b1ba",
                        "userName": "realize.demo",
                        "firstName": "Demo11",
                        "lastName": "Realize d",
                        "locale": "en_US",
                        "timeZone": "America/New_York",
                        "permissions": [],
                        "modules": [],
                        "idpName": "RUMBA",
                        "idpResponse": {
                            "data": {
                                "assertion": {
                                    "attributes": {
                                        "UserStatus": "Active",
                                        "UserName": "realize.demo",
                                        "UserId": "e36d8f9865e9410fa92ca6ee2190b1ba",
                                        "LastName": "Realize d",
                                        "OrganizationId1": "8a9484c1306f728801309385a3dd4e20",
                                        "OrgRole1": "Teacher",
                                        "OrgName1": "PEARSON UNIVERSITY",
                                        "OrganizationId2": "8a97b1a638c9f02701393168afbf1d20",
                                        "OrgRole2": "Teacher",
                                        "OrgName2": "realize_organization",
                                        "OrganizationId3": "8a97b1a73d170a91013eefb3394d164a",
                                        "OrgRole3": "Teacher",
                                        "OrgName3": "REALIZE EDITORIAL SCHOOL",
                                        "Gender": "U",
                                        "EmailAddress": "realize.demo@pearson.com",
                                        "FirstName": "Demo11",
                                        "Language": "en",
                                        "PreferredTimeZone": "America/New_York"
                                    },
                                    "subject": {
                                        "nameId": "realize.demo"
                                    }
                                },
                                "authorizedResource": []
                            }
                        },
                        "name": "realize.demo"
                    }
                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    return throwError('Email or password is incorrect');
                }
            }

            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: this.users }));
                } else {
                    return throwError('Unauthorised');
                }
            }

            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = this.users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;
                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    return throwError('Unauthorised');
                }
            }

            if (request.url.endsWith('/api/section') && request.method === 'GET') {
                /*let newUser = request.body;

                let duplicateUser = this.users.filter(user => { return user.email === newUser.email; }).length;
                if (duplicateUser) {
                    return throwError('Email "' + newUser.email + '" is already taken');
                }
                newUser.id = this.users.length + 1;
                this.users.push(newUser);*/
                if (request.headers.get('Authorization') === 'Bearer ST-56363-aRcRX5IbYlAUYFd3XICC-b3-rumba-int-01-06') {
                  let body= {
                    "rosters": [
                        {
                            "classId": "5939c6db5f7a5e4544500d3a",
                            "className": "class-title-100000000000011",
                            "classDescription": "string",
                            "classImageUrl": "/images/class_roster_icons/class2.png",
                            "status": "ACTIVE",
                            "organizationId": "8a97b1a75c78b72e015c89afabde0cd1",
                            "teacherIds": [
                                "ffffffff593ad1e11c6dd508435628a8",
                                "ffffffff570212f6e4b0f6c186e43f62"
                            ],
                            "productIds": [
                                1881810,
                                1399090
                            ],
                            "studentIds": [
                                "ffffffff593aca47f856990dfd528fde",
                                "ffffffff593aca4c45d99179fbd09a10",
                                "ffffffff593aca4645d99179fbd09b21"
                            ],
                            "createdBy": "string",
                            "createdDate": "2017-06-13T08:15:00.000Z",
                            "lastUpdatedBy": "string",
                            "lastUpdatedDate": "2018-07-18T10:18:01.000Z",
                            "externalId": "string",
                            "externalSource": "string",
                            "firstTeacherId": "ffffffff593ad1e11c6dd508435628a8"
                        }
                    ]
                };
                   
                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    return throwError('Unauthorised');
                }

                //localStorage.setItem('users', JSON.stringify(this.users));
               // return of(new HttpResponse({ status: 200 }));
            }
            if (request.url.endsWith('/ups/api/v1/users/attributes') && request.method === 'GET') {
                /*let newUser = request.body;

                let duplicateUser = this.users.filter(user => { return user.email === newUser.email; }).length;
                if (duplicateUser) {
                    return throwError('Email "' + newUser.email + '" is already taken');
                }
                newUser.id = this.users.length + 1;
                this.users.push(newUser);*/
                if (request.headers.get('Authorization') === 'Bearer ST-56363-aRcRX5IbYlAUYFd3XICC-b3-rumba-int-01-06') {
                  let body= [
                    {
                      "ffffffff579919d0e4b038df4cf36bc2": {
                        "home.background": "teacher10",
                        "assignments.class.filters": "{\"3CDDF4DBEC7E040FE0532302140AA3B6\":{\"startDate\":null,\"endDate\":null,\"view\":\"EVERYONE\",\"graded\":\"ALL\"}}",
                        "classes.withoutPrograms": "[]",
                        "profile.isAdmin": "false",
                        "profile.announcements": "true",
                        "profile.learningExperience": "EarlyLearner",
                        "programs.defaultSort": "+subject[0]",
                        "programs.favorites": "[\"0b8b8179-7690-34aa-b8f9-abb1e81c3e30\"]",
                        "profile.grades": "[\"Grade 12\"]",
                        "profile.avatar": "17_teacher",
                        "lrsEventServiceToggleStateAttr": "true",
                        "profile.email": "brian.kubota@pearson.com",
                        "prevLoginTime": "2017-05-11T13:47:02.410Z",
                        "profile.firstName": "RTA",
                        "profile.wizard": "complete",
                        "programs.visited": "true",
                        "dataDateRange_start": "08/22/2016",
                        "currLoginTime": "2017-06-30T22:47:51.191Z",
                        "profile.termsOfUse": "true",
                        "classes.info.seen": "true",
                        "profile.lastName": "Tester",
                        "profile.gender": "Unspecified",
                        "hasCenter": "false",
                        "profile.middleName": null,
                        "data.visited": "true",
                        "programs.tocView": "list",
                        "dataDateRange": "last30Days",
                        "classes.created": "true",
                        "dataDateRange_end": "09/20/2016",
                        "profile.displayName": "RTA Tester",
                        "hasLeveledReader": "false",
                        "home.visited": "true",
                        "userIdHashCode": "4F75F780E2EC2EA3BBD6FEF51B0674EA7DB80F2E0430AE1FEB5E81FCCC24AEA0",
                        "classes.visited": "true",
                        "assignments.created": "true",
                        "created_datetime": "2017-05-07 18:50:33",
                        "updated_datetime": "2017-06-30 22:47:51",
                        "platform": "realize"
                      },
                      
                      "ffffffff593aca4645d99179fbd09b21": {
                        "home.background": "teacher10",
                        "assignments.class.filters": "{\"3CDDF4DBEC7E040FE0532302140AA3B6\":{\"startDate\":null,\"endDate\":null,\"view\":\"EVERYONE\",\"graded\":\"ALL\"}}",
                        "classes.withoutPrograms": "[]",
                        "profile.isAdmin": "false",
                        "profile.announcements": "true",
                        "profile.learningExperience": "EarlyLearner",
                        "programs.defaultSort": "+subject[0]",
                        "programs.favorites": "[\"0b8b8179-7690-34aa-b8f9-abb1e81c3e30\"]",
                        "profile.grades": "[\"Grade 12\"]",
                        "profile.avatar": "17_teacher",
                        "lrsEventServiceToggleStateAttr": "true",
                        "profile.email": "brian.kubota@pearson.com",
                        "prevLoginTime": "2017-05-11T13:47:02.410Z",
                        "profile.firstName": "RTA",
                        "profile.wizard": "complete",
                        "programs.visited": "true",
                        "dataDateRange_start": "08/22/2016",
                        "currLoginTime": "2017-06-30T22:47:51.191Z",
                        "profile.termsOfUse": "true",
                        "classes.info.seen": "true",
                        "profile.lastName": "Tester",
                        "profile.gender": "Unspecified",
                        "hasCenter": "false",
                        "profile.middleName": null,
                        "data.visited": "true",
                        "programs.tocView": "list",
                        "dataDateRange": "last30Days",
                        "classes.created": "true",
                        "dataDateRange_end": "09/20/2016",
                        "profile.displayName": "RTA Tester",
                        "hasLeveledReader": "false",
                        "home.visited": "true",
                        "userIdHashCode": "4F75F780E2EC2EA3BBD6FEF51B0674EA7DB80F2E0430AE1FEB5E81FCCC24AEA0",
                        "classes.visited": "true",
                        "assignments.created": "true",
                        "created_datetime": "2017-05-07 18:50:33",
                        "updated_datetime": "2017-06-30 22:47:51",
                        "platform": "realize"
                      },
                      
                      "ffffffff593aca4c45d99179fbd09a10": {
                        "home.background": "teacher10",
                        "assignments.class.filters": "{\"3CDDF4DBEC7E040FE0532302140AA3B6\":{\"startDate\":null,\"endDate\":null,\"view\":\"EVERYONE\",\"graded\":\"ALL\"}}",
                        "classes.withoutPrograms": "[]",
                        "profile.isAdmin": "false",
                        "profile.announcements": "true",
                        "profile.learningExperience": "EarlyLearner",
                        "programs.defaultSort": "+subject[0]",
                        "programs.favorites": "[\"0b8b8179-7690-34aa-b8f9-abb1e81c3e30\"]",
                        "profile.grades": "[\"Grade 12\"]",
                        "profile.avatar": "17_teacher",
                        "lrsEventServiceToggleStateAttr": "true",
                        "profile.email": "brian.kubota@pearson.com",
                        "prevLoginTime": "2017-05-11T13:47:02.410Z",
                        "profile.firstName": "RTA",
                        "profile.wizard": "complete",
                        "programs.visited": "true",
                        "dataDateRange_start": "08/22/2016",
                        "currLoginTime": "2017-06-30T22:47:51.191Z",
                        "profile.termsOfUse": "true",
                        "classes.info.seen": "true",
                        "profile.lastName": "Tester",
                        "profile.gender": "Unspecified",
                        "hasCenter": "false",
                        "profile.middleName": null,
                        "data.visited": "true",
                        "programs.tocView": "list",
                        "dataDateRange": "last30Days",
                        "classes.created": "true",
                        "dataDateRange_end": "09/20/2016",
                        "profile.displayName": "RTA Tester",
                        "hasLeveledReader": "false",
                        "home.visited": "true",
                        "userIdHashCode": "4F75F780E2EC2EA3BBD6FEF51B0674EA7DB80F2E0430AE1FEB5E81FCCC24AEA0",
                        "classes.visited": "true",
                        "assignments.created": "true",
                        "created_datetime": "2017-05-07 18:50:33",
                        "updated_datetime": "2017-06-30 22:47:51",
                        "platform": "realize"
                      }
                    }
                  ];
                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    return throwError('Unauthorised');
                }

                //localStorage.setItem('users', JSON.stringify(this.users));
               // return of(new HttpResponse({ status: 200 }));
            }

            

            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < this.users.length; i++) {
                        let user = this.users[i];
                        if (user.id === id) {
                            this.users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(this.users));
                            break;
                        }
                    }
                    return of(new HttpResponse({ status: 200, body: this.users }));
                } else {
                    return throwError('Unauthorised');
                }
            }
            return next.handle(request);
        }))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};