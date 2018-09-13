import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from '../components/search/search.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', component: DashboardComponent }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent,SearchComponent]
})
export class DashboardModule { }
