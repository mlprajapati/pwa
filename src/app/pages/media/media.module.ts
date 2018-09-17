import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
const routes: Routes = [
  { path: '', component: MediaComponent},
  { path: '**', component: MediaComponent }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MediaComponent]
})
export class MediaModule { }
