import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  constructor() {}
  tst:any='sss';
  ngOnInit(): void {}
  @Input() img='';
  @Input()  title='';
  
  bookmark(product: any) {
    if (product.children[1].classList.contains('d-none')) {
      product.children[0].classList.add('d-none');
      product.children[1].classList.remove('d-none');
    } else {
      product.children[1].classList.add('d-none');
      product.children[0].classList.remove('d-none');
    }
  }  
}
