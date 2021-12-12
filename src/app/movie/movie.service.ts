import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

import { Movie } from './../shared/movie';


@Injectable({
  providedIn: 'root',
})
export class MovieService {

  private apiKey: string = "4297c64a33343fef95d06afcefbf8590";
  private urlMovieDB: string = "https://api.themoviedb.org/3/movie";
  private searchUrl: string = "https://api.themoviedb.org/3/search/movie";

  constructor(private http: HttpClient) { }

  getTopMovies(): Observable<Movie[]> {
    let moviesUrl = `${this.urlMovieDB}/top_rated?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(moviesUrl).pipe(map((res: any) => {
      console.log(res);
      return res.results;
    }));
  }


  getDetails(id : number): Observable<any> {
    let detailsUrl = `${this.urlMovieDB}/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(detailsUrl).pipe(map((res: any) => {
      console.log(res);
      return res;
    }));
  }

  getVideo(id : number): Observable<any> {
    let videoUrl = `${this.urlMovieDB}/${id}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(videoUrl).pipe(map((res: any) => {
      console.log(res);
      return res;
    }));
  }
  
}
