import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-listaindustriais',
  templateUrl: 'listaindustriais.html'
})

export class ListaIndustriaisPage {

    private items;

    constructor(public viewCtrl: ViewController) {
        this.items = [
        ];
    }
}