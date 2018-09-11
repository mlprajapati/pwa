import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TreeviewModule } from 'ngx-treeview';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes),
    TreeviewModule.forRoot()
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
