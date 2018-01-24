import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';
import { SocorrismoExcecaoMagnitudePage }     from '../socorrismoexcecaomagnitude/socorrismoexcecaomagnitude';
import { SocorrismoExcecaoPrimariaPage }       from '../socorrismoexcecaoprimaria/socorrismoexcecaoprimaria';
import { SocorrismoExcecaoSecundariaPage }    from '../socorrismoexcecaosecundaria/socorrismoexcecaosecundaria';

@Component({
  selector: 'page-socorrismolistaexcecao',
  templateUrl: 'socorrismolistaexcecao.html'
})
export class SocorrismoListaExcecaoPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Magnitude dos eventos',
        'class': SocorrismoExcecaoMagnitudePage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Triagem Primaria',
        'class': SocorrismoExcecaoPrimariaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Triagem Secundaria',
        'class': SocorrismoExcecaoSecundariaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }
    ];
  }

}
