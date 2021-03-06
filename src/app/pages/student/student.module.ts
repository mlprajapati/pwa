import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
const routes: Routes = [
  { path: '',component: StudentComponent},
  { path: '**', component: StudentComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentComponent]
})
export class StudentModule { }
