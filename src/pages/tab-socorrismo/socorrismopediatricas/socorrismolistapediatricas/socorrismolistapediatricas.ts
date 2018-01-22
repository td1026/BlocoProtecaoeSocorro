import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { SocorrismoPediatricasTAPPage }                   from '../socorrismopediatricastap/socorrismopediatricastap';
import { SocorrismoPediatricasAsmaPage }                  from '../socorrismopediatricasasma/socorrismopediatricasasma';
import { SocorrismoPediatricasConvulsoesPage }            from '../socorrismopediatricasconvulsoes/socorrismopediatricasconvulsoes';
import { SocorrismoPediatricasDiarreiaPage }              from '../socorrismopediatricasdiarreia/socorrismopediatricasdiarreia';
import { SocorrismoPediatricasDesidratacaoPage }          from '../socorrismopediatricasdesidratação/socorrismopediatricasdesidratação';
import { SocorrismoPediatricasEstridorPage }              from '../socorrismopediatricasestridor/socorrismopediatricasestridor';
import { SocorrismoPediatricasFebrePage }                 from '../socorrismopediatricasfebre/socorrismopediatricasfebre';
import { SocorrismoPediatricasIntoxicacaoPage }           from '../socorrismopediatricasintoxicacao/socorrismopediatricasintoxicacao';
import { SocorrismoPediatricasOVAPage }                   from '../socorrismopediatricasova/socorrismopediatricasova';

@Component({
  selector: 'page-socorrismolistapediatricas',
  templateUrl: 'socorrismolistapediatricas.html'
})

export class SocorrismoListaPediatricasPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'TAP',
        'class': SocorrismoPediatricasTAPPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Asma e Bronquite',
        'class': SocorrismoPediatricasAsmaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Convulsões',
        'class': SocorrismoPediatricasConvulsoesPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Diarreia',
        'class': SocorrismoPediatricasDiarreiaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Desidratação',
        'class': SocorrismoPediatricasDesidratacaoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Estridor laríngeo',
        'class': SocorrismoPediatricasEstridorPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Febre',
        'class': SocorrismoPediatricasFebrePage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Intoxicação',
        'class': SocorrismoPediatricasIntoxicacaoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'OVA',
        'class': SocorrismoPediatricasOVAPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
     
    ];
  }
}