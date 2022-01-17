import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './cards/cards.component';
import { SwiperModule } from 'swiper/angular';
import { RecommendComponent } from './recommend/recommend.component';

import { IndexModule } from './index/index.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,
    RecommendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SwiperModule,
    IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
