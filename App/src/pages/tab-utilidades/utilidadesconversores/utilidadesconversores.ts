import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-utilidadesconversores',
  templateUrl: 'utilidadesconversores.html'
})
export class UtilidadesConversoresPage {

  private celsius: number;
  private fahrenheit: number;
  private celsiusres: number;
  private fahrenheitres: number;

  constructor(public navCtrl: NavController) {
      this.celsius = 0;
      this.fahrenheit = 0;
      this.celsiusres = 0;
      this.fahrenheitres = 0;
  }

    converter(i:number){
        switch(i){
            case 1:
                this.celsiusres = this.celsius * 1.8000 + 32;
                break;
            case 2:
                this.fahrenheitres = (this.fahrenheit - 32 ) / 1.8000;
                break;
        }
    }
}
