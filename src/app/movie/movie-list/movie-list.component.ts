import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  @Input() movies:any;

  constructor() {
  }

  ngOnInit() {
    console.log("We are in Movie List Component");
  }
}
