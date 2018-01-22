import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { SocorrismoTraumaAbdominalPage }         from '../socorrismotraumaabdominal/socorrismotraumaabdominal';
import { SocorrismoTraumaAmbientePage }          from '../socorrismotraumaambiente/socorrismotraumaambiente';
import { SocorrismoTraumaAquaticoPage }          from '../socorrismotraumaaquatico/socorrismotraumaaquatico';
import { SocorrismoTraumaCinematicaPage }        from '../socorrismotraumacinematica/socorrismotraumacinematica';
import { SocorrismoTraumaExtremidadesPage }      from '../socorrismotraumaextremidades/socorrismotraumaextremidades';
import { SocorrismoTraumaHemorragiasPage }       from '../socorrismotraumahemorragias/socorrismotraumahemorragias';
import { SocorrismoTraumaQueimadurasPage }       from '../socorrismotraumaqueimaduras/socorrismotraumaqueimaduras';
import { SocorrismoTraumaTCEPage }               from '../socorrismotraumatce/socorrismotraumatce';
import { SocorrismoTraumaToracicoPage }          from '../socorrismotraumatoracico/socorrismotraumatoracico';
import { SocorrismoTraumaTVMPage }               from '../socorrismotraumatvm/socorrismotraumatvm';



@Component({
  selector: 'page-socorrismolistatrauma',
  templateUrl: 'socorrismolistatrauma.html'
})

export class SocorrismoListaTraumaPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Cinemática do Trauma',
        'class': SocorrismoTraumaCinematicaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Trauma Crânio-Encefálico (TCE)',
        'class': SocorrismoTraumaTCEPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Trauma Vertebro-Medular (TVM)',
        'class': SocorrismoTraumaTVMPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Trauma Torácico',
        'class': SocorrismoTraumaToracicoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Trauma Abdominal e da Bacia',
        'class': SocorrismoTraumaAbdominalPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Trauma das Extremidades e Tecidos Moles',
        'class': SocorrismoTraumaExtremidadesPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Trauma Ambiental',
        'class': SocorrismoTraumaAmbientePage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Queimaduras',
        'class': SocorrismoTraumaQueimadurasPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Hemorragias',
        'class': SocorrismoTraumaHemorragiasPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Acidente em meio Aquático',
        'class': SocorrismoTraumaAquaticoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
    ];
  }
}