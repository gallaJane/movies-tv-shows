import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SafePipe } from './../shared/safe.pipe';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    MovieRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [
    MovieComponent, 
    MovieListComponent,
    MovieDetailComponent,
    SafePipe
  ],
  exports:[ MovieComponent ]
})
export class MovieModule {}
