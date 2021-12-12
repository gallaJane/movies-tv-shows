import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Movie } from './../movie';
import { Subject } from 'rxjs';




@Injectable()
export class SearchService {
  private searchMovieUrl = 'https://api.themoviedb.org/3/search/movie';
  private searchTVShowUrl = 'https://api.themoviedb.org/3/search/tv';
  private apiKey = '4297c64a33343fef95d06afcefbf8590';

private subject = new Subject<any>();

  constructor (private http: HttpClient) {
    
  }

  sendMessage(message:any) {
    this.subject.next(message)
  }

  receievedMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  searchMovies(query: string, page: number) { 
    let searchUrl = `${this.searchMovieUrl}?api_key=${this.apiKey}&language=en-US&query=${query}&page=${page}`;
    return this.http.get(searchUrl).pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  searchTVShows(query: string, page: number) {
    let searchUrl = `${this.searchTVShowUrl}?api_key=${this.apiKey}&language=en-US&query=${query}&page=${page}`;
    return this.http.get(searchUrl).pipe(map((res: any) => {
        console.log(res);
        return res.results;
      }));
  }


}
