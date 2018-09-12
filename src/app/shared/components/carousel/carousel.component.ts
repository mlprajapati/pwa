import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() {
   
   }

  ngOnInit() {

  }
  slides = [1,2,3,4,5];
  slideConfig = {  autoplay: true,"slidesToShow": 4, "slidesToScroll": 1,
  infinite: true,
  respondTo: 'slider',
  centerMode: true,
  autoplaySpeed: 1000,
  variableWidth: true,
  speed: 600};


}
