import { Component, OnInit } from '@angular/core';
interface MockSeasons {
  season: string;
  lessons: Array<{ name: string; time: string }>;
}
var mockSeasons: MockSeasons[] = [
  {
    season: 'Introduction to JavaScript',
    lessons: [
      { name: 'Introduction', time: '1m 7s' },
      { name: 'Installing Development Software', time: '3m 11s' },
      { name: 'Hello World Project from GitHub', time: '2m 33s' },
      { name: 'Our Sample Website', time: '2m 15s' },
    ],
  },
  {
    season: 'JavaScript Beginning',
    lessons: [
      { name: 'Introduction', time: '1m 7s' },
      { name: 'Installing Development Software', time: '3m 11s' },
      { name: 'Hello World Project from GitHub', time: '2m 33s' },
      { name: 'Our Sample Website', time: '2m 15s' },
    ],
  },
  {
    season: 'Variables and Constants',
    lessons: [
      { name: 'Introduction', time: '1m 7s' },
      { name: 'Installing Development Software', time: '3m 11s' },
      { name: 'Hello World Project from GitHub', time: '2m 33s' },
      { name: 'Our Sample Website', time: '2m 15s' },
    ],
  },
];
export interface MockReviews {
  img: string;
  name: string;
  date: number;
  comment: string;
}
export var mockReviews: MockReviews[] = [
  {
    img: '../../../assets/avatar-2.jpg',
    name: 'Max Hawkins',
    date: 2,
    comment:
      'Lectures were at a really good pace and I never felt lost. The instructor was well informed and allowed me to learn and navigate Figma easily.',
  },
  {
    img: '../../../assets/avatar-3.jpg',
    name: 'Arthur Williamson',
    date: 3,
    comment:
      'Its pretty good.Just a reminder that there are also students with Windows, meaning Figma its a bit different of yours. Thank you!',
  },
  {
    img: '../../../assets/avatar-4.jpg',
    name: 'Claire Jones',
    date: 4,
    comment:
      'Great course for learning Figma, the only bad detail would be that some icons are not included in the assets. But 90% of the icons needed are included, and the voice of the instructor was very clear and easy to understood.',
  },
  {
    img: '../../../assets/avatar-1.jpg',
    name: 'Bessie Pena',
    date: 5,
    comment:
      'I have really enjoyed this class and learned a lot, found it very inspiring and helpful, thank you!',
  },
];

var collapse: Array<boolean> = [];
var collapseFlag = false;
for (let season of mockSeasons) {
  if (collapseFlag) {
    collapse.push(false);
    collapseFlag = false;
  } else {
    collapse.push(true);
  }
}

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss'],
})
export class TabbarComponent implements OnInit {
  searchString!:string;
  constructor() {}
  mockSeasons = mockSeasons;
  mockReviews = mockReviews;
  collapse = collapse;
  ngOnInit(): void {}
  active = 3;
  last = 0;
  handleToggle(el: number) {
    if (el == this.last) {
      this.collapse[this.last] = !this.collapse[this.last];
    } else {
      this.collapse[el] = false;
      this.collapse[this.last] = true;
      this.last = el;
    }
  }
}
