import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { SocorrismoPsicologicasAnsiedadePage }         from '../socorrismopsicologicasansiedade/socorrismopsicologicasansiedade';
import { SocorrismoPsicologicasDepressaoPage }         from '../socorrismopsicologicasdepressao/socorrismopsicologicasdepressao';
import { SocorrismoPsicologicasSuicidaPage }           from '../socorrismopsicologicassuicida/socorrismopsicologicassuicida';
import { SocorrismoPsicologicasSurtoPage }             from '../socorrismopsicologicassurto/socorrismopsicologicassurto';
import { SocorrismoPsicologicasCatatoniaPage }         from '../socorrismopsicologicascatatonia/socorrismopsicologicascatatonia';
import { SocorrismoPsicologicasAgressividadePage }     from '../socorrismopsicologicasagressividade/socorrismopsicologicasagressividade';
import { SocorrismoPsicologicasDomesticaPage }         from '../socorrismopsicologicasdomestica/socorrismopsicologicasdomestica';
import { SocorrismoPsicologicasTratosPage }            from '../socorrismopsicologicastratos/socorrismopsicologicastratos';
import { SocorrismoPsicologicasViolacaoPage }          from '../socorrismopsicologicasviolacao/socorrismopsicologicasviolacao';




@Component({
  selector: 'page-socorrismolistapsicologicas',
  templateUrl: 'socorrismolistapsicologicas.html'
})

export class SocorrismoListaPsicologicasPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Ansiedade',
        'class': SocorrismoPsicologicasAnsiedadePage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Depressão',
        'class': SocorrismoPsicologicasDepressaoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Ideação Suicida',
        'class': SocorrismoPsicologicasSuicidaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Surto Psicótico',
        'class': SocorrismoPsicologicasSurtoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Catatonia',
        'class': SocorrismoPsicologicasCatatoniaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Agressividade',
        'class': SocorrismoPsicologicasAgressividadePage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Violência Domestica',
        'class': SocorrismoPsicologicasDomesticaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Maus Tratos',
        'class': SocorrismoPsicologicasTratosPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Violação / Abuso Sexual',
        'class': SocorrismoPsicologicasViolacaoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }
    ];
  }
}