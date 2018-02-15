import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-listaurbanos',
  templateUrl: 'listaurbanos.html'
})

export class ListaUrbanosPage {

 private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
    ];
  }

}