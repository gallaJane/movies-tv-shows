import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { SearchService } from './search.service';

import { of } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Movie } from './../../shared/movie';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})

export class SearchComponent implements OnInit {

  @ViewChild('searchTerm', { static: true }) searchTerm!: ElementRef;

  message!: string;
  subscription!: Subscription;


  searches!: any;
  movies!: Movie[];
  total_results!: number;
  total_pages!: number;
  page!: 1;
  query!: string;
  sort!: number;
  

  constructor(private router: Router,
    private http: HttpClient,
    private searchService: SearchService,
    private location: Location) {
    console.log(this.searchTerm);
  }

  ngOnInit() {
    fromEvent(this.searchTerm.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter((res: any) => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {

      this.searchMovies(text, this.page);

    });
  }


  searchMovies(query: string, page: number) {
    this.searchService.searchMovies(query, page)
      .subscribe(
        (res: any) => {
          debugger;
          this.searches = res;
          this.movies = res['results'];
          this.total_results = res['total_results'];
          this.total_pages = res['total_pages'];
          this.page = res['page'];
          // this.searchService.sendMessage(this.movies);
          this.search(query);
      
        },
        (error:any) => console.error(error)
      );
  }

  search(query: string) {
    if (/\S/.test(query)) {
      // this.location.replaceState(`/saarch/${query}`);

     this.router.navigate(['/search', query]);
    }
  }

  back() {
    this.location.back();
  }

}