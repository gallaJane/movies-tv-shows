import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    SearchRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [
    SearchComponent, 
    SearchMoviesComponent
  ],
  exports:[ SearchComponent ]
})
export class SearchModule {}
