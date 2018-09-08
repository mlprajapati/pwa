import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggleMenu = false;
  constructor() { }

  ngOnInit() {
  }



// toggle side menu bar
toggleSideBar() {
  this.toggleMenu = !this.toggleMenu;
}


}
