import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '',component: StudentComponent},
  { path: '**', component: StudentComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentComponent]
})
export class StudentModule { }
