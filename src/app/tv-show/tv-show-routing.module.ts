import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TVShowListComponent } from './tv-show-list/tv-show-list.component';
import { TVShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { TVShowComponent } from './tv-show.component';

const tvShowRoutes: Routes = [
  { path: '', component: TVShowComponent },
  { path: ':id', component: TVShowDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(tvShowRoutes) ],
  exports: [ RouterModule ]
})
export class TVShowRoutingModule {}
