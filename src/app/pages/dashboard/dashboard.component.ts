import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { TelemetryService } from '../../services/telemetry.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggleMenu = false;
  itCategory: TreeviewItem[];
  sidebarConfig;
  constructor(private headerService: HeaderService, private telemetryService:TelemetryService) { }

  ngOnInit() {
    this.headerService.setHeaderTitle('Dashboard');
    this.sidebarConfig = TreeviewConfig.create({
      hasAllCheckBox: false,
      hasFilter: false,
      hasCollapseExpand: false,
      decoupleChildFromParent: false
    });

    this.itCategory = this.telemetryService.getBooks();

    console.log('itCategory', this.itCategory);
  }

  /**
   * side menu
   */


  /**
   * sidebar menu dummy data. had to remove one get actual data
   */


  // toggle side menu bar
  toggleSideBar() {
    this.toggleMenu = !this.toggleMenu;
  }
  onFilterChange(event) {

  }

  onSelectedChange(event) {

  }

}
