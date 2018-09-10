import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggleMenu = false;
  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    this.headerService.setHeaderTitle('Dashboard');
  }



// toggle side menu bar
toggleSideBar() {
  this.toggleMenu = !this.toggleMenu;
}


}
