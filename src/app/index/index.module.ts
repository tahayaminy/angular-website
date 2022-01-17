import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './header/header.component';
import { RecommendComponent } from '../recommend/recommend.component';


@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
  ],
  exports: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
