import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    active = 1;
    public isCollapsed1 = false;
    public isCollapsed2 = true;
    public isCollapsed3 = true;
    isCollapsed=false;
    handleToggle(el:boolean){
      this.isCollapsed1 = false;
      this.isCollapsed2 = false;
      this.isCollapsed3 = false;
      el=true;
    }
}
