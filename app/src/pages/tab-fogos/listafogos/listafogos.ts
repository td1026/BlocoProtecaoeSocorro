import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { ListaUrbanosPage } from '../listaurbanos/listaurbanos';
import { ListaNocoesPage } from '../listanocoes/listanocoes';
import { ListaIndustriaisPage } from '../listaindustriais/listaindustriais';
import { ListaFlorestaisPage } from '../listaflorestais/listaflorestais';
 
@Component({
  selector: 'page-listafogos',
  templateUrl: 'listafogos.html'
})

export class ListaFogosPage {

 private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
        {
            title: 'Noçoes Basicas de Fogo',
            component: ListaNocoesPage,
            icon: 'assets/img/logos/fogos.gif'
        },
        {
            title: 'Fogos Florestais',
            component: ListaFlorestaisPage,
            icon: 'assets/img/logos/fogos.png'
        },
        {
            title: 'Fogos Urbanos',
            component: ListaUrbanosPage,
            icon: 'assets/img/logos/fogos.png'
        },
        {
            title: 'Fogos Industriais',
            component: ListaIndustriaisPage,
            icon: 'assets/img/logos/fogos.png'
        }
    ];
  }

}