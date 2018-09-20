import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SharedService {
    private _searchStatus = new Subject<any>();
    constructor(){
        
    }
    getSearchStatus() {
        return this._searchStatus.asObservable();
    }
    setSearchStatus(title) {

          this._searchStatus.next(title);
       
      }
}