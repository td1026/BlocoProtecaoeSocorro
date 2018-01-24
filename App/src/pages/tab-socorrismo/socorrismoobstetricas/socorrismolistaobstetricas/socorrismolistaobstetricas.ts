import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { SocorrismoObstetricasPerguntasPage }         from '../socorrismoobstetricasperguntas/socorrismoobstetricasperguntas';
import { SocorrismoObstetricasPartoPage }             from '../socorrismoobstetricasparto/socorrismoobstetricasparto';

@Component({
  selector: 'page-socorrismolistaobstetricas',
  templateUrl: 'socorrismolistaobstetricas.html'
})

export class SocorrismoListaObstetricasPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Perguntas à Gravida',
        'class': SocorrismoObstetricasPerguntasPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Parto',
        'class': SocorrismoObstetricasPartoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }
    ];
  }
}