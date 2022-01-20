import { Component, OnInit } from '@angular/core';

interface MockSeasons{
  season:string;
  lessons:Array<{name:string,time:string}>
}

var mockSeasons:MockSeasons[]=[
  {season:'Introduction to JavaScript',lessons:[{name:'Introduction',time:'1m 7s'},{name:'Installing Development Software',time:'3m 11s'},{name:'Hello World Project from GitHub',time:'2m 33s'},{name:'Our Sample Website',time:'2m 15s'}]},
  {season:'JavaScript Beginning',lessons:[{name:'Introduction',time:'1m 7s'},{name:'Installing Development Software',time:'3m 11s'},{name:'Hello World Project from GitHub',time:'2m 33s'},{name:'Our Sample Website',time:'2m 15s'}]},
  {season:'Variables and Constants',lessons:[{name:'Introduction',time:'1m 7s'},{name:'Installing Development Software',time:'3m 11s'},{name:'Hello World Project from GitHub',time:'2m 33s'},{name:'Our Sample Website',time:'2m 15s'}]},
];
var collapse:Array<boolean>=[];
var collapseFlag=false;
for(let season of mockSeasons){
  if(collapseFlag){
    collapse.push(false);
    collapseFlag=false;
  }else{
    collapse.push(true);
  }
}



@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  constructor() { }
  mockSeasons=mockSeasons;
  collapse=collapse;
  ngOnInit(): void {
  }
    active = 1;
    last=0;
    handleToggle(el:number){
      if(el==this.last){
        this.collapse[this.last]=!this.collapse[this.last];
      }else{
        this.collapse[el]=false;
        this.collapse[this.last]=true;
        this.last=el;
      }
    }
}
