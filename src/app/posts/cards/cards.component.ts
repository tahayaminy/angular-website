import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../recommend/card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() card!:Card;

  bookmark=false;
    
}
