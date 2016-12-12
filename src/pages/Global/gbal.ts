import { ViewChild } from '@angular/core';
import {Http} from '@angular/http';
export class Global {
  constructor(public http: Http) {
   console.log('Slowleyyyy');
  }

  parseDay(value){
      console.log(value);
      switch(value){
        case 1:{
          return 'Monday';
        }
      }
  }
}
