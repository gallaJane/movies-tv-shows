import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TVShowRoutingModule } from './tv-show-routing.module';
import { TVShowComponent } from './tv-show.component';
import { TVShowListComponent } from './tv-show-list/tv-show-list.component';
import { TVShowDetailComponent } from './tv-show-detail/tv-show-detail.component';
import { SafePipee } from './../shared/safee.pipe';


@NgModule({
  imports: [
    CommonModule, 
    FormsModule, 
    TVShowRoutingModule, 
    ReactiveFormsModule
  ],
  declarations: [
    TVShowComponent, 
    TVShowListComponent,
    TVShowDetailComponent,
    SafePipee
  ],
  exports:[ TVShowComponent ]
})
export class TVShowModule {}
