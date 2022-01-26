import { Component, OnInit,Input } from '@angular/core';
import { CARDS } from 'src/app/posts/recommend/mock-cards';
interface MockSeasons {
  season: string;
  detail?:string;
  lessons?: Array<{ name: string; time: string }>;
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
      { name: 'Introduction', time: '1m 41s' },
      { name: 'Adding JavaScript Code to a Web Page', time: '3m 39s' },
      { name: 'Working with JavaScript Files', time: '6m 18s' },
      { name: 'Formatting Code', time: '2m 18s' },
      { name: 'Detecting and Fixing Errors', time: '3m 14s' },
      { name: 'Case Sensitivity', time: '1m 48s' },
      { name: 'Commenting Code', time: '2m 24s' },
      { name: 'Summary', time: '2m 14s' },
    ],
  },
  {
    season: 'Variables and Constants',
    lessons: [
      { name: 'Introduction', time: '1m 19s' },
      { name: 'What Is a Variable', time: '2m 11s' },
      { name: 'Declaring Variables', time: '2m 30s' },
      { name: 'Using let to Declare Variables', time: '3m 28s' },
      { name: 'Naming Variables', time: '3m 14s' },
      { name: 'Common Errors Using Variables', time: '3m 30s' },
      { name: 'Changing Variable Values', time: '2m 4s' },
      { name: 'Constants', time: '3m 15s' },
      { name: 'The var Keyword', time: '2m 20s' },
      { name: 'Summary', time: '1m 49s' },
    ],
  },
  {
    season: 'Types and Operators',
    lessons: [
      { name: 'Introduction', time: '1m 55s' },
      { name: 'Numbers', time: '6m 14s' },
      { name: 'Operator Precedence', time: '2m 58s' },
      { name: 'Number Precision', time: '1m 22s' },
      { name: 'Negative Numbers', time: '1m 35s' },
      { name: 'Strings', time: '4m 7s' },
      { name: 'Manipulating Strings', time: '5m 8s' },
      { name: 'Converting Strings and Numbers', time: '2m 55s' },
      { name: 'Boolean Variables', time: '1m 39s' },
    ],
  },
  {
    season: 'Program Flow',
    lessons: [
      { name: 'Introduction', time: '1m 7s' },
      { name: 'Clip Watched', time: '4m 27s' },
      { name: 'Coditionals Using if()', time: '4m 25s' },
      { name: 'Truthy and Falsy', time: '3m 30s' },
      { name: 'if ... else', time: '3m 30s' },
      { name: 'Comparing === and ==', time: '1m 52s' },
      { name: 'The Ternary Operator', time: '2m 47s' },
      { name: 'Block Scope Using let', time: '2m 21s' },
      { name: 'Looping With for()', time: '5m 30s' },
      { name: 'Looping with do ... while()', time: '1m 58s' },
      { name: 'Summary', time: '2m 21s' },
    ],
  },
  {
    season: 'Functions',
    lessons: [
      { name: 'Introduction', time: '1m 7s' },
      { name: 'Function Basics', time: '2m 46s' },
      { name: 'Function Expressions', time: '2m 32s' },
      { name: 'Passing Information to Functions', time: '3m 19s' },
      { name: 'Function Return Values', time: '3m 13s' },
      { name: 'Function Scope', time: '4m 20s' },
      { name: 'Using Functions to Modify Web Pages', time: '3m 42s' },
      { name: 'Summary', time: '2m 3s' },
    ],
  },
  {
    season: 'Objects and the DOM',
    lessons: [
      { name: 'Introduction', time: '1m 7s' },
      { name: 'Object Properties', time: '4m 28s' },
      { name: 'Object Methods', time: '3m 3s' },
      { name: 'Passing Objects to Functions', time: '3m 27s' },
      { name: 'Standard Built-in Objects', time: '6m 55s' },
      { name: 'The Document Object Model (DOM)', time: '3m 29s' },
      { name: 'Styling DOM Elements', time: '2m 42s' },
      { name: 'Detecting Button Clicks', time: '2m 3s' },
      { name: 'Showing and Hiding DOM Elements', time: '4m 37s' },
      { name: 'Summary', time: '2m 47s' },
    ],
  },
  {
    season: 'Arrays',
    lessons: [
      { name: 'Introduction', time: '1m 7s' },
      { name: 'Creating and Initializing Arrays', time: '4m 7s' },
      { name: 'Accessing Array Items', time: '2m 4s' },
      { name: 'Manipulating Arrays', time: '4m 3s' },
      { name: 'slice() and splice()', time: '5m 54s' },
      { name: 'Array Searching and Looping', time: '7m 32s' },
      { name: 'Arrays in the DOM', time: '4m 11s' },
      { name: 'Summary', time: '2m 28s' },
    ],
  },
  {
    season: 'Scope and Hoisting',
    lessons: [
      { name: 'Introduction', time: '1m 7s' },
      { name: 'Global Scope', time: '4m 7s' },
      { name: 'Clip Watched', time: '3m 14s' },
      { name: 'Functions Scope', time: '3m 45s' },
      { name: 'Var and Hoisting', time: '2m 21s' },
      { name: 'Undeclared Variables and Strict Mode', time: '2m 16s' },
      { name: 'Summary', time: '1m 33s' },
    ],
  },
  {
    season: 'Summary',
    detail:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae esse velit eos sunt ab inventore est tenetur blanditiis? Voluptas eius molestiae ad itaque tempora nobis minima eveniet aperiam molestias, maiores natus expedita dolores ea non possimus magnam corrupt i quas rem unde quo enim porro culpa! Quaerat veritatis veniam corrupti iusto.'
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
var collapseFlag = true;
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
  @Input() index!:number;
  cards=CARDS;
  searchString!:string;
  constructor() {}
  mockSeasons = mockSeasons;
  mockReviews = mockReviews;
  collapse = collapse;
  ngOnInit(): void {}
  active = 1;
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
