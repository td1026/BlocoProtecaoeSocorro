import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-listaresgate',
  templateUrl: 'listaresgate.html'
})

export class ListaResgatePage {

 private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
     
    ];
  }

}