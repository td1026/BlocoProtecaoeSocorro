import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Locations provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Locations {

  data: any;

  constructor(public http: Http) {
  }

  load(){
 
        if(this.data){
            return Promise.resolve(this.data);
        }
 
        return new Promise(resolve => {
 
            this.http.get('assets/json/repetidores.json').map(res => res.json()).subscribe(data => {
                this.data = data.locations;
                resolve(this.data);
            });
        });
    }
    load2(){
        return this.http.get('assets/json/repetidores.json').map(res => res.json());
    }
}
