import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderService } from './header.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy  {
  headerSubscription: Subscription;
  headerTitle:string = '';
  constructor(private headerService:HeaderService) { 
    this.headerSubscription = this.headerService.headerTitle().subscribe(title=>this.headerTitle=title);
  }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.headerSubscription.unsubscribe();
  }
}
