import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { SocorrismoOxigenioDosagemPage }         from '../socorrismooxigeniodosagem/socorrismooxigeniodosagem';
import { SocorrismoOxigenioReferenciaPage }      from '../socorrismooxigenioreferencia/socorrismooxigenioreferencia';
import { SocorrismoOxigenioMetodosPage }         from '../socorrismooxigeniometodos/socorrismooxigeniometodos';
import { SocorrismoOxigenioBotijasPage }         from '../socorrismooxigeniobotijas/socorrismooxigeniobotijas';



@Component({
  selector: 'page-socorrismolistaoxigenio',
  templateUrl: 'socorrismolistaoxigenio.html'
})

export class SocorrismoListaOxigenioPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Dosagem',
        'class': SocorrismoOxigenioDosagemPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Saturação Referencia',
        'class': SocorrismoOxigenioReferenciaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Métodos',
        'class': SocorrismoOxigenioMetodosPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Capacidade das Botijas de Oxigénio',
        'class': SocorrismoOxigenioBotijasPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }
    ];
  }
}