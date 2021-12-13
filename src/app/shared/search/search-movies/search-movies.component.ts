import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './../search.service';
import { MovieService } from '../../../movie/movie.service';
import { Movie } from '../../../shared/movie';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-movies',
  templateUrl: 'search-movies.component.html',
  styleUrls: ['search-movies.component.css'],
  providers: [SearchService]
})
export class SearchMoviesComponent implements OnInit {
  page!: number;
  query!: string;
  movies!: Movie[];

  subscription!: Subscription;

  message!: any;


  constructor(
    private searchService: SearchService,
    private moviesService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.subscription =this.searchService.receievedMessage()
    .subscribe(
      (some: any) => {
        this.movies = some;
        console.log('Value is ' + this.movies);
         this.route.params.subscribe(
           (params: any) => {
             this.query = params['query'];
             this.page = 1;
           });
      },
      (error: any) => {
        console.log(error);
      }
    );



  }





  onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }

}
