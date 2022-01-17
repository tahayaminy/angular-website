import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { SwiperModule } from 'swiper/angular';
import { RecommendComponent } from './recommend/recommend.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [
    PostsComponent,
    RecommendComponent,
    CardsComponent
  ],
  exports: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ]
})
export class PostsModule { }
