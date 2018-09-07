import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: NotesComponent},
  { path: '**', component: NotesComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotesComponent]
})
export class NotesModule { }
