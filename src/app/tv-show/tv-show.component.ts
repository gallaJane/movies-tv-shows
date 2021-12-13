
import { Component, OnInit } from '@angular/core';

import { TVShowService } from './tv-show.service';
import { TVShow } from './../shared/tv-show';
import { Subscription } from 'rxjs';  
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  providers: [TVShowService]
})
export class TVShowComponent implements OnInit {
  topRatedTVShows!: Array<TVShow>;

  constructor(private tvShowService: TVShowService) {}

  ngOnInit() {
    this.getTopTVShows();
  }

  getTopTVShows() {
    this.tvShowService.getTopTVShows().subscribe((data: any) => {
      this.topRatedTVShows = data;
      this.topRatedTVShows = data.slice(0, 10);
    });
  }
}
