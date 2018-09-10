import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    this.headerService.setHeaderTitle('Reports');
  }

}
