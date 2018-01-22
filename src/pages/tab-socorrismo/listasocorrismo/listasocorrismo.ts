import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { SocorrismoValoresPage } from '../socorrismovalores/socorrismovalores';
import { SocorrismoAvaliacaoVitimaPage } from '../socorrismoavaliacaovitima/socorrismoavaliacaovitima';
import { SocorrismoListaAnatomiaPage } from '../socorrismoanatomia/socorrismolistaanatomia/socorrismolistaanatomia';
import { SocorrismoListaExcecaoPage } from '../socorrismoexcecao/socorrismolistaexcecao/socorrismolistaexcecao';
import { SocorrismoListaMedicasPage } from '../socorrismomedicas/socorrismolistamedicas/socorrismolistamedicas';
import { SocorrismoListaTraumaPage } from '../socorrismotrauma/socorrismolistatrauma/socorrismolistatrauma';
import { SocorrismoListaPediatricasPage } from '../socorrismopediatricas/socorrismolistapediatricas/socorrismolistapediatricas';
import { SocorrismoListaSBVPage } from '../socorrismosbv/socorrismolistasbv/socorrismolistasbv';
import { SocorrismoListaObstetricasPage } from '../socorrismoobstetricas/socorrismolistaobstetricas/socorrismolistaobstetricas';
import { SocorrismoListaOxigenioPage }  from '../socorrismooxigenio/socorrismolistaoxigenio/socorrismolistaoxigenio';
import { SocorrismoListaPsicologicasPage }  from '../socorrismopsicologicas/socorrismolistapsicologicas/socorrismolistapsicologicas';


@Component({
  selector: 'page-listasocorrismo',
  templateUrl: 'listasocorrismo.html'
})
export class ListaSocorrismoPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Valores Referência',
        'class': SocorrismoValoresPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Avaliação da Vitima',
        'class': SocorrismoAvaliacaoVitimaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Anatomia e Fisiologia',
        'class': SocorrismoListaAnatomiaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Suporte Básico de Vida',
        'class': SocorrismoListaSBVPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Emergências Obstétricas',
        'class': SocorrismoListaObstetricasPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Emergências Pediátricas',
        'class': SocorrismoListaPediatricasPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Emergências Medicas',
        'class': SocorrismoListaMedicasPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Emergências Trauma',
        'class': SocorrismoListaTraumaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Emergências Psicológicas',
        'class': SocorrismoListaPsicologicasPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Situações de Exceção',
        'class': SocorrismoListaExcecaoPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Oxigenoterapia',
        'class': SocorrismoListaOxigenioPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }

      
    ];
  }

}
