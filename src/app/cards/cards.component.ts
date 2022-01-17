import { Component, OnInit, Input } from '@angular/core';
import { MockCards } from '../recommend/recommend.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() card!:MockCards;

  bookmark=false;
    
}
