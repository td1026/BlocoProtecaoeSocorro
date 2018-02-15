import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-listaflorestais',
  templateUrl: 'listaflorestais.html'
})

export class ListaFlorestaisPage {

 private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
    ];
  }

}