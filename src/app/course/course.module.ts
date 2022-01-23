import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { CourseComponent } from './course.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    CourseComponent,
    TabbarComponent,
    FilterPipe
  ],
  exports: [
    HeaderComponent,
    CourseComponent,
    TabbarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ]
})
export class CourseModule { }
