import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment-checklist',
  templateUrl: './assessment-checklist.component.html',
  styleUrls: ['./assessment-checklist.component.scss']
})
export class AssessmentChecklistComponent implements OnInit {
  toggleAssessmentModal= false;
  assessmentList = ['Quick Images (drawing shapes)', 'Shapes on the Geoboard', 'Shapes on Dot Paper', ''];

  constructor() { }

  ngOnInit() {
  }
  openEditCommentModal(){
    this.toggleAssessmentModal=!this.toggleAssessmentModal;
  }

}
