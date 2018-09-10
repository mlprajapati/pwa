import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    this.headerService.setHeaderTitle('Notes');
  }
}
