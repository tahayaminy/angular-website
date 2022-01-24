import { Component, OnInit,Input } from '@angular/core';
import { CARDS } from 'src/app/posts/recommend/mock-cards';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() index!:number;
  constructor() { }
  cards=CARDS;
  ngOnInit(): void {
  }

}
