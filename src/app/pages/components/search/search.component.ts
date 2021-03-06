import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../../../shared/shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit,OnDestroy {
  headerSubscription: Subscription;
  public searchKeyword:string='';
  public toggleSearch:boolean=false;
  constructor(private sharedService:SharedService) { }

  ngOnInit() {
    this.headerSubscription = this.sharedService.getSearchStatus().subscribe((res)=>{
     this.openSearchSidebar();
    });
  }
  clearSearchkeyword()
  {
    this.searchKeyword='';
  }
  toggleSearchSideBar() {
    this.toggleSearch = !this.toggleSearch;
  }
  openSearchSidebar(){
    this.clearSearchkeyword();
    this.toggleSearch = true;
  }
  closeSearchSidebar(){
    this.clearSearchkeyword();
    this.toggleSearch = false;
  }
  ngOnDestroy(){
    this.headerSubscription.unsubscribe();
  }

}
