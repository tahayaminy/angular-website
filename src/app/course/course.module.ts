import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './course.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    CourseComponent,
    TabbarComponent
  ],
  exports: [
    HeaderComponent,
    CourseComponent,
    TabbarComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class CourseModule { }
