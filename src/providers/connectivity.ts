import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Network } from '@ionic-native/network';
import { Platform } from 'ionic-angular';
 
declare var Connection;
/*
  Generated class for the Connectivity provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Connectivity {

  onDevice: boolean;

  constructor(public platform: Platform,
              private network: Network) {
    this.onDevice = this.platform.is('cordova');
  }
  
  isOnline(): boolean {
    if(this.onDevice && this.network.onConnect){
      return this.network.onConnect !== Connection.NONE;
    } else {
      return navigator.onLine; 
    }
  }
 
  isOffline(): boolean {
    if(this.onDevice && this.network.onConnect){
      return this.network.onConnect === Connection.NONE;
    } else {
      return !navigator.onLine;   
    }
  }
}
