import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentChecklistComponent } from './assessment-checklist/assessment-checklist.component';
import { OngoingAssessmentComponent } from './ongoing-assessment/ongoing-assessment.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { ToDoComponent } from './to-do/to-do.component';
import { MediaDetailsComponent } from './media-details/media-details.component';
import { MediaListComponent } from './media-list/media-list.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesDetailComponent } from './notes-detail/notes-detail.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SearchComponent, AssessmentChecklistComponent, OngoingAssessmentComponent, RecentActivityComponent, ToDoComponent, MediaDetailsComponent, MediaListComponent, NotesListComponent, NotesDetailComponent],
  declarations: [SearchComponent, AssessmentChecklistComponent, OngoingAssessmentComponent, RecentActivityComponent, ToDoComponent, MediaDetailsComponent, MediaListComponent, NotesListComponent, NotesDetailComponent]
})
export class ComponentsModule { }
