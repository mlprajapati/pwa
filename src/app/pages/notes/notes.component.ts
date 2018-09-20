import { Component, OnInit, ElementRef } from '@angular/core';
import { HeaderService } from '../../shared/components/header/header.service';
import { DatepickerComponent } from '../../shared/components/datepicker/datepicker.component';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  plainText:string='This is a note with no students, no to-do flag and no due date.';
  toggleAssessment = false;
  toggleSearch = false;
  students:any=['ABC','Dhoni','Survey','Kalia'];
  enableCheckboxes = false;
  ngOnInit() {
    this.headerService.setHeaderTitle('Notes');
  }
  enableEdit(){
    this.enableCheckboxes = !this.enableCheckboxes;
  }
  toggleAssessSideBar(option1:HTMLInputElement, option2:HTMLInputElement) {
   if(option1 && option2){
    option1.className = 'btn btn-light labelRadio active';
    option2.className = 'btn btn-light labelRadio';
   }
    this.toggleSearch = false;
    this.toggleAssessment = !this.toggleAssessment;
  }
  checked(checkedData:HTMLInputElement){
    console.log(checkedData.textContent);
  }
}
