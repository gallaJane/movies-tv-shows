import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { Movie } from './../../shared/movie';
import { MovieService } from './../movie.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: any = {};
  errorMessage!: string;
  isReady=false;
  videoInfo!: any;
  srcUrl!:any;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:any) => {
        this.movieService.getDetails(params.id).subscribe((movie:any)=>{
          this.selectedMovie=movie;
          this.movieService.getVideo(params.id).subscribe((video:any) =>{
            this.videoInfo = video.results[0];
            this.srcUrl= `https://www.youtube.com/embed/${this.videoInfo.key}`;
            console.log(this.videoInfo)
          })
          console.log(this.selectedMovie);
          this.isReady=true;
        })
      });
  }

  getDetails(id: number) {
    debugger;
    this.movieService.getDetails(id)
      .subscribe((res:any) =>{ 
          this.selectedMovie = res
        },
        (err:any) => this.errorMessage = <any>err);
  }

  back() {
    this.location.back();
  }
}
