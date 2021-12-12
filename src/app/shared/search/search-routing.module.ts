import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchMoviesComponent } from './search-movies/search-movies.component';


const searchRoutes: Routes = [
  { path: ':query', component: SearchMoviesComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(searchRoutes) ],
  exports: [ RouterModule ]
})
export class SearchRoutingModule {}
