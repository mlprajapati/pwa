import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    this.headerService.setHeaderTitle('Students');
  }
}
