import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions,Navigation,Autoplay } from 'swiper';
SwiperCore.use([Navigation,Autoplay]);
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecommendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  config: SwiperOptions = {
    spaceBetween: 20,
    navigation: {
    nextEl: '.custom-button-next',
    prevEl: '.custom-button-prev',
  },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  
  onSwiper(swiper:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
