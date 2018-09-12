import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable()
export class HeaderService {
    private _headerTitle = new Subject<any>();
    private _searchStatus = new Subject<any>();
    constructor(){
        
    }
    headerTitle() {
        return this._headerTitle.asObservable();
    }
    setHeaderTitle(title) {

          this._headerTitle.next(title);
       
      }
    getSearchStatus() {
        return this._searchStatus.asObservable();
    }
    setSearchStatus(title) {

          this._searchStatus.next(title);
       
      }
}