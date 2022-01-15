import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions,Navigation,Autoplay } from 'swiper';
SwiperCore.use([Navigation,Autoplay]);
interface MockCards{
  img:string,
  title:string,
}
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecommendComponent implements OnInit {
  cards:MockCards[]=[
    {img:'../../assets/course-angular.jpg',title:'Angular - the complete guide for beginner'},
    {img:'../../assets/course-wordpress.jpg',title:'Wordpress: complete WordPress theme & plugin development'},
    {img:'../../assets/course-gatsby.jpg',title:'Gatsby JS: build blog with GraphQL and React'},
    {img:'../../assets/course-graphql.jpg',title:'GraphQL: introduction to graphQL for beginners'},
    {img:'../../assets/course-python.jpg',title:'The Python Course: build web application'},
    {img:'../../assets/course-react.jpg',title:'How to easily create a website with React'}
  ]
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
}
