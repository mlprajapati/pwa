import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
const routes: Routes = [
  { path: '',component: ReportComponent},
  { path: '**', component: ReportComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
