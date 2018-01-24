import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { UtilidadesInsigniasPSPPage } from '../utilidadesinsigniaspsp/utilidadesinsigniaspsp';
import { UtilidadesInsigniasGNRPage } from '../utilidadesinsigniasgnr/utilidadesinsigniasgnr';
import { UtilidadesInsigniasExercitoPage } from '../utilidadesinsigniasexercito/utilidadesinsigniasexercito';
import { UtilidadesInsigniasMarinhaPage } from '../utilidadesinsigniasmarinha/utilidadesinsigniasmarinha';
import { UtilidadesInsigniasForcaAeriaPage } from '../utilidadesinsigniasforcaaeria/utilidadesinsigniasforcaaeria';
import { UtilidadesInsigniasANPCPage } from '../utilidadesinsigniasanpc/utilidadesinsigniasanpc';
import { UtilidadesInsigniasBombeirosPage } from '../utilidadesinsigniasbombeiros/utilidadesinsigniasbombeiros';
import { UtilidadesInsigniasCVPPage } from '../utilidadesinsigniascvp/utilidadesinsigniascvp';;




@Component({
  selector: 'page-utilidadeslistainsignias',
  templateUrl: 'utilidadeslistainsignias.html'
})

export class UtilidadesListaInsigniasPage {

  private items;

    constructor(public viewCtrl: ViewController) {
        this.items = [
            {
                'title': 'CVP',
                'class': UtilidadesInsigniasCVPPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'Bombeiros',
                'class': UtilidadesInsigniasBombeirosPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'ANPC',
                'class': UtilidadesInsigniasANPCPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'PSP',
                'class': UtilidadesInsigniasPSPPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'GNR',
                'class': UtilidadesInsigniasGNRPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'Exercito',
                'class': UtilidadesInsigniasExercitoPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'Marinha',
                'class': UtilidadesInsigniasMarinhaPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'Força Aérea',
                'class': UtilidadesInsigniasForcaAeriaPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
        ];
    }

}