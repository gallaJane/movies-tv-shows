import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import { Movie } from './../../shared/movie';
import { TVShowService } from './../tv-show.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.css']
})
export class TVShowDetailComponent implements OnInit {
  selectedTVShow: any = {};
  errorMessage!: string;
  isReady=false;
  videoInfo!: any;
  srcUrl!:any;

  constructor(private tvShowService: TVShowService,
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params:any) => {
        this.tvShowService.getDetails(params.id).subscribe((tvShow:any)=>{
          this.selectedTVShow=tvShow;
          this.tvShowService.getVideo(params.id).subscribe((video:any) =>{
            this.videoInfo = video.results[0];
            this.srcUrl= `https://www.youtube.com/embed/${this.videoInfo.key}`;
            console.log(this.videoInfo)
          })
          console.log(this.selectedTVShow);
          this.isReady=true;
        })
      });

  }

  back() {
    this.location.back();
  }
}
