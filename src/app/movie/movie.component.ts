
import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';
import { Movie } from './../shared/movie';
import { Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

  topRatedMovies!: Array<Movie>;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getTopMovies();
  }

  getTopMovies() {
    this.movieService.getTopMovies().subscribe((data: any) => {
      console.log(data);
      this.topRatedMovies = data;
      this.topRatedMovies = data.slice(0, 10);
      console.log(this.topRatedMovies);
    });
  }
  
}
