import {ModuleWithProviders, NgModule} from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProgressCardComponent } from './components/progress-card/progress-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    CarouselComponent,
    ProgressCardComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AvatarComponent,
    CarouselComponent,
    ProgressCardComponent
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        
      ]
    };
  }
}