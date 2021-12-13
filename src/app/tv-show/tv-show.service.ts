import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

import { TVShow } from './../shared/tv-show';


@Injectable({
  providedIn: 'root',
})
export class TVShowService {
  private apiKey: string = "4297c64a33343fef95d06afcefbf8590";
  private urlTVShowDB: string = "https://api.themoviedb.org/3/tv";

  constructor(private http: HttpClient) { }

  getTopTVShows(): Observable<TVShow[]> {
    let tvShowsUrl = `${this.urlTVShowDB}/top_rated?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(tvShowsUrl).pipe(map((res: any) => {
      return res.results;
    }));
  }

  getDetails(id : number) {
    let detailsUrl = `${this.urlTVShowDB}/${id}?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(detailsUrl).pipe(map((res: any) => {
      return res;
    }));
  }

  getVideo(id : number): Observable<any> {
    let videoUrl = `${this.urlTVShowDB}/${id}/videos?api_key=${this.apiKey}&language=en-US`;
    return this.http.get(videoUrl).pipe(map((res: any) => {
      return res;
    }));
  }
 
}
