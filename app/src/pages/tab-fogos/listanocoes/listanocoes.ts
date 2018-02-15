import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-listanocoes',
  templateUrl: 'listanocoes.html'
})

export class ListaNocoesPage {

 private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
    ];
  }

}