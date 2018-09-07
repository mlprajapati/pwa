import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

import { AssessmentChecklistComponent } from './components/assessment-checklist/assessment-checklist.component';
import { OngoingAssessmentComponent } from './components/ongoing-assessment/ongoing-assessment.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { MediaDetailsComponent } from './components/media-details/media-details.component';
import { ObservationComponent } from './report/components/observation/observation.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NotesDetailComponent } from './components/notes-detail/notes-detail.component';
import { ContactInfoComponent } from './student/contact-info/contact-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule.forRoot(),
  ],
  declarations: [PagesComponent, AssessmentChecklistComponent, OngoingAssessmentComponent, RecentActivityComponent, ToDoComponent, MediaDetailsComponent, ObservationComponent, MediaListComponent, NotesListComponent, NotesDetailComponent, ContactInfoComponent]
})
export class PagesModule { }
