import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieComponent } from './movie.component';

const movieRoutes: Routes = [
  { path: '',  component: MovieComponent },
  { path: ':id', component: MovieDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(movieRoutes) ],
  exports: [ RouterModule ]
})
export class MovieRoutingModule {}
