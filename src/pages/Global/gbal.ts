import { ViewChild } from '@angular/core';
import {Http} from '@angular/http';
export class Global {
  constructor(public http: Http) {
   console.log('Slowleyyyy');
  }
}
