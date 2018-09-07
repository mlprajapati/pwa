import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: MediaComponent},
  { path: '**', component: MediaComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MediaComponent]
})
export class MediaModule { }
