import { Component, ViewChild } from '@angular/core';
import {Http} from '@angular/http';
import {NavController, AlertController, Platform} from 'ionic-angular';
import {Global} from '../Global/gbal';
import {Day} from '../day/day';
import {Shake, CallNumber, DBMeter} from 'ionic-native';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage extends Global {
  @ViewChild('camVid') cam;
  streamLink: any;
  meterValue: any;
  constructor(public platform: Platform, public http: Http, public navCtrl: NavController, private alertCtrl: AlertController) {
   super(http);
   this.meterValue = 0;
   platform.ready().then(() => {
      /*Shake.startWatch(60).subscribe(() => {
        this.showPrompt();
      });
      DBMeter.start().subscribe(data => {
        this.meterValue = Math.floor(data) * 0.8;
        if(this.meterValue > 75){
          DBMeter.stop().then(()=>{
            this.showCallAlert();
            setTimeout(()=>{
              CallNumber.callNumber('9377653096', true).then(()=>{ });
            },1500);
          })
        }
      });*/
    });
  }

  goToDay(){
    this.navCtrl.push(Day, {
      data: 'DSYKSE DIS DAT DOE'
    });
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  showCallAlert() {
    let alert = this.alertCtrl.create({
      title: 'Calling Babe..',
      
      buttons: ['OK']
    });
    alert.present();
  }
  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Enter admin password.',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Go',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

  ngAfterViewInit(){
    
  }
}
