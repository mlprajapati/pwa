import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable()
export class HeaderService {
    private _headerTitle = new Subject<any>();
    constructor(){
        
    }
    headerTitle() {
        return this._headerTitle.asObservable();
    }
    setHeaderTitle(title) {

          this._headerTitle.next(title);
       
      }
}