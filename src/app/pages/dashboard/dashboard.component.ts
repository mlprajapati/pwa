import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
//import { TelemetryService } from '../../services/telemetry.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggleMenu = false;
  itCategory: TreeviewItem[];
  sidebarConfig;
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setHeaderTitle('Dashboard');
    this.sidebarConfig = TreeviewConfig.create({
      hasAllCheckBox: false,
      hasFilter: false,
      hasCollapseExpand: false,
      decoupleChildFromParent: false
    });

    // this.itCategory = this.telemetryService.getBooks();

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

  sideMenuData = [
    {
      text: 'Unit 1: Comparing and Combining Shapes', children: [
        { text: 'Investigation 1: Composing and Decomposing 2-D Shapes' }]
    }, {
      text: 'Unit 2: Comparing and Combining Shapes', children: [
        { text: 'Investigation 1: Composing and Decomposing 2-D Shapes' },
        { text: 'Investigation 2: Describing and Sorting Shapes' },
        {
          text: 'Investigation 3: Describing and Sorting Shapes', children: [
            { text: 'Session 2.1: Sorting Shapes and Making a Shape Poster' },
            { text: 'Session 2.2: Describing Trangles' },
            { text: 'Session 2.3: Describing Quadrilaterals' },
            { text: 'Session 2.4: What is Trangle?' },
            { text: 'Session 2.5: Describing and Identifying Attributes of Shapes' },
            { text: 'Session 2.6: Describing Quadrilaterals' }
          ]
        }
      ]
    },
    {
      text: 'Unit 3: Comparing and Combining Shapes', children: [
        { text: 'Investigation 1: Composing and Decomposing 2-D Shapes' }]
    }
  ]




}
