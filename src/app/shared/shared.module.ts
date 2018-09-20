import {ModuleWithProviders, NgModule} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProgressCardComponent } from './components/progress-card/progress-card.component';
import { HeaderService } from './components/header/header.service';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../services/user.service';
import { SharedService } from './shared.service';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    CarouselComponent,
    ProgressCardComponent,
    DatepickerComponent
  ],

  imports:[CommonModule,FormsModule, ReactiveFormsModule, NgbModule.forRoot(),SlickCarouselModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    CarouselComponent,
    ProgressCardComponent,DatepickerComponent
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [HeaderService,UserService,SharedService
        
      ]
    };
  }
}