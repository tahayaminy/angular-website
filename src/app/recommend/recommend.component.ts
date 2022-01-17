import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Autoplay]);
export interface MockCards {
  img: string;
  title: string;
  time: string;
  level: number;
  people: string;
  teacherName: string;
  teacherImg: string;
}
@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecommendComponent implements OnInit {
  cards: MockCards[] = [
    {
      img: '../../assets/course-angular.jpg',
      title: 'Angular - the complete guide for beginner',
      time: '1h 30m',
      level: 1,
      people: '(13,453)',
      teacherName: 'Morris Mccoy',
      teacherImg: '../../assets/avatar-1.jpg',
    },
    {
      img: '../../assets/course-wordpress.jpg',
      title: 'Wordpress: complete WordPress theme & plugin development',
      time: '2h 30m',
      level: 2,
      people: '(9,453)',
      teacherName: 'Ted Hawkings',
      teacherImg: '../../assets/avatar-2.jpg',
    },
    {
      img: '../../assets/course-gatsby.jpg',
      title: 'Gatsby JS: build blog with GraphQL and React',
      time: '3h 15m',
      level: 3,
      people: '(13,000)',
      teacherName: 'Juanita Bell',
      teacherImg: '../../assets/avatar-3.jpg',
    },
    {
      img: '../../assets/course-graphql.jpg',
      title: 'GraphQL: introduction to graphQL for beginners',
      time: '2h 15m',
      level: 2,
      people: '(11,453)',
      teacherName: 'Claire Robertson',
      teacherImg: '../../assets/avatar-4.jpg',
    },
    {
      img: '../../assets/course-python.jpg',
      title: 'The Python Course: build web application',
      time: '1h 30m',
      level: 1,
      people: '(4,453)',
      teacherName: 'Morris Mccoy',
      teacherImg: '../../assets/avatar-1.jpg',
    },
    {
      img: '../../assets/course-react.jpg',
      title: 'How to easily create a website with React',
      time: '4h 15m',
      level: 3,
      people: '(7,453)',
      teacherName: 'Juanita Bell',
      teacherImg: '../../assets/avatar-3.jpg',
    },
  ];
  constructor() {}

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
