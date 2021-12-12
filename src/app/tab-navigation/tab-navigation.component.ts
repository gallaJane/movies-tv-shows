import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab-navigation',
    templateUrl: './tab-navigation.component.html',
    styleUrls: ['./tab-navigation.component.css']
})

export class TabNavigationComponent implements OnInit {
    tabChecked!: boolean;

    constructor () {}

    ngOnInit() {
        this.tabChecked = true;
    }
}