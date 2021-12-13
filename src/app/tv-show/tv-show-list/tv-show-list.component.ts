import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TVShowListComponent implements OnInit {
  @Input() tvShows: any;


  constructor() {
  }

  ngOnInit() {
    console.log("We are in TV Show List Component");
  }
}
