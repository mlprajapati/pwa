import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  toggleAssessment = false;
  toggleSearch = false;
  toggleAssessmentModal= false;
  toggleMenu = false;
  sidebarConfig;
  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.setHeaderTitle('Dashboard');

  }

  // toggle side menu bar
  toggleAssessSideBar() {
    this.toggleSearch = false;
    this.toggleAssessment = !this.toggleAssessment;
  }

  openEditCommentModal(){
    this.toggleAssessmentModal=!this.toggleAssessmentModal;
  }

  assessmentList = ['Quick Images (drawing shapes)', 'Shapes on the Geoboard', 'Shapes on Dot Paper', ''];

  /**
   * sidebar menu dummy data. had to remove one get actual data
   */
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
