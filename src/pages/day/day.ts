import {Component} from '@angular/core';
import {Global} from '../Global/gbal';
import {Http} from '@angular/http';
import {NavParams} from 'ionic-angular';

@Component({
    templateUrl: 'day.html'
})

export class Day extends Global{
    date: any;
    data: any;
    constructor(public http: Http, private navParams: NavParams){
        super(http);
        this.date = new Date();
        let day = this.date.getDay();
        this.data = this.navParams.get('data');
        this.date = this.parseDay(day);
    }
}

