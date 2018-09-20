import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from './header.service';
import { Subscription } from 'rxjs';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy  {
  headerSubscription: Subscription;
  headerTitle:string = '';
  constructor(private headerService:HeaderService,private sharedService:SharedService) { 
    this.headerSubscription = this.headerService.headerTitle().subscribe(title=>this.headerTitle=title);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.headerSubscription.unsubscribe();
  }
  openSearch(){
    this.sharedService.setSearchStatus(true);
  }
}
