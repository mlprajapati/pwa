import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor(private headerService:HeaderService) { }

  ngOnInit() {
    this.headerService.setHeaderTitle('Media');
  }

}
