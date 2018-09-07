import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule,RouterOutlet}  from '@angular/router';
import { PagesComponent } from './pages.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {path:'pages',component:PagesComponent,canActivate: [AuthGuard],children:[
  {path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'dashboard', loadChildren:'./dashboard/dashboard.module#DashboardModule'},
  {path: 'notes', loadChildren:'./notes/notes.module#NotesModule'},
  {path: 'media', loadChildren:'./media/media.module#MediaModule'},
  {path: 'student', loadChildren:'./student/student.module#StudentModule'},
  {path: 'report', loadChildren:'./report/report.module#ReportModule'},
  {path: '**',redirectTo:'dashboard'}
  ]}
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class PagesRoutingModule { }
