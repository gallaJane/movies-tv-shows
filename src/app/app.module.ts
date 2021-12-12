import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabNavigationComponent } from './tab-navigation/tab-navigation.component';

import { MovieModule } from './movie/movie.module';
import { TVShowModule } from './tv-show/tv-show.module';
import { SearchModule } from './shared/search/search.module';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    MovieModule,
    TVShowModule,
    SearchModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TabNavigationComponent,
    FooterComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}


