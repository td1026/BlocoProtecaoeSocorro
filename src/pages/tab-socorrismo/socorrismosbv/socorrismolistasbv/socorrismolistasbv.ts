import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { SocorrismoSBVAdultoPage }            from '../socorrismosbvadulto/socorrismosbvadulto';
import { SocorrismoSBVPediatricoPage }        from '../socorrismosbvpediatrico/socorrismosbvpediatrico';
import { SocorrismoSBVNeonatalPage }          from '../socorrismosbvneonatal/socorrismosbvneonatal';
import { SocorrismoSBVAPGARPage }          from '../socorrismosbvapgar/socorrismosbvapgar';




@Component({
  selector: 'page-socorrismolistasbv',
  templateUrl: 'socorrismolistasbv.html'
})

export class SocorrismoListaSBVPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'SBV Abulto',
        'class': SocorrismoSBVAdultoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'SBV Pediatrico',
        'class': SocorrismoSBVPediatricoPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'SBV Neonatal',
        'class': SocorrismoSBVNeonatalPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'APGAR',
        'class': SocorrismoSBVAPGARPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }
    ];
  }
}