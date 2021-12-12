import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/tv-shows' },
  {
    path: 'tv-shows',
    loadChildren: () => import('./tv-show/tv-show.module').then(mod => mod.TVShowModule)
  },

  {
    path: 'movies',
    loadChildren: () => import('./movie/movie.module').then(mod => mod.MovieModule)
  },

  {
    path: 'search',
    loadChildren: () => import ('./shared/search/search.module').then(mod => mod.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
