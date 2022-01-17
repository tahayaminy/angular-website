import { Component, OnInit } from '@angular/core';

interface MenuStatus {
  state: boolean,
  el: any
}
interface SubMenu{
  name:any,
  hasSubMenu:boolean
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

  mockItems:SubMenu[]=[
    {name:'Browse',hasSubMenu:true},
    {name:'Design',hasSubMenu:true},
    {name:'Mobile App',hasSubMenu:false},
    {name:'IT Software',hasSubMenu:false},
    {name:'Marketing',hasSubMenu:false},
    {name:'Music',hasSubMenu:false},
    {name:'Life Style',hasSubMenu:false},
    {name:'Business',hasSubMenu:false},
    {name:'Photography',hasSubMenu:false}
  ]

  public isCollapsed = true;
  menuStatus: MenuStatus = { state: false, el:''};
  openSubMenu(el: any) {
    if (!this.menuStatus.state) {
      el.style = 'display:block';
      this.menuStatus.state = true;
      this.menuStatus.el = el;
    } else {
      if (this.menuStatus.el == el) {
        this.menuStatus.state = false;
        el.style="display:none;";
      } else {
        this.menuStatus.el.style = 'display:none;';
        el.style = 'display:block';
        this.menuStatus.el = el;
      }
    }
  }
  menu=false;
  SubMenu(bar1:any,bar2:any,bar3:any){
    if(!this.menu){
      this.menu=true;
      bar2.style="opacity:0;";
      bar1.style="transform: rotate(-45deg) translate(-3px,3px);";
      bar3.style="transform: rotate(45deg) translate(-3px,-3px);";
    }else{
      bar2.style="opacity:1;";
      bar1.style="transform: rotate(0deg) translate(0px,0px);";
      bar3.style="transform: rotate(0deg) translate(0px,0px);";
      this.menu=false;
    }
  }
}
