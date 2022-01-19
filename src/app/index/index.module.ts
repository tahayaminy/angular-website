import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './header/header.component';
import { PostsModule } from '../posts/posts.module';


@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    PostsModule
  ]
})
export class IndexModule { }
