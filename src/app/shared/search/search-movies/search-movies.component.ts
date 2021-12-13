import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './../search.service';
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
  movies!: any;

  subscription!: Subscription;

  message!: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    localStorage.getItem('movies');
    var moviesArray  = localStorage.getItem('movies');
    if (moviesArray !== null && typeof moviesArray === "string") {
      this.movies = JSON.parse(moviesArray);   // deserializing here
  }
    // this.subscription =this.searchService.receievedMessage().subscribe(
    //   (some: any) => {
    //     console.log('Value is ' + some);
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );

    this.route.params.subscribe(
      (params: any) => {
        this.query = params['query'];
        this.page = 1;
      });



  }





  onSelect(movie: Movie) {
    this.router.navigate(['./../movie', movie.id]);
  }

}
