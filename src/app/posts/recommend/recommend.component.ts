import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
import { CARDS } from './mock-cards';
SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecommendComponent implements OnInit {
  @Input() title!:string;
  constructor() {}
  cards=CARDS;
  ngOnInit(): void {}
  config: SwiperOptions = {
    spaceBetween: 20,
    navigation: {
      nextEl: '.custom-button-next',
      prevEl: '.custom-button-prev',
    },
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
}
