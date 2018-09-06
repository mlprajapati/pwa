import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from '../pages-routing.module';
import { NotesComponent } from './notes/notes.component';
import { MediaComponent } from './media/media.component';
import { ReportComponent } from './report/report.component';
import { LoginComponent } from './login/login.component';
import { AssessmentChecklistComponent } from './components/assessment-checklist/assessment-checklist.component';
import { OngoingAssessmentComponent } from './components/ongoing-assessment/ongoing-assessment.component';
import { StudentComponent } from './student/student.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { MediaDetailsComponent } from './components/media-details/media-details.component';
import { ObservationComponent } from './report/components/observation/observation.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesDetailComponent } from './components/notes-detail/notes-detail.component';
import { ContactInfoComponent } from './student/contact-info/contact-info.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [PagesComponent, NotesComponent, MediaComponent, ReportComponent, LoginComponent, AssessmentChecklistComponent, OngoingAssessmentComponent, StudentComponent, RecentActivityComponent, ToDoComponent, MediaDetailsComponent, ObservationComponent, MediaListComponent, NotesListComponent, NotesDetailComponent, ContactInfoComponent]
})
export class PagesModule { }
