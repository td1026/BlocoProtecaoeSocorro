import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { UtilidadesListaInsigniasPage } from '../utilidadesinsignias/utilidadeslistainsignias/utilidadeslistainsignias';
import { UtilidadesPerigosasPage } from '../utilidadesperigosas/utilidadesperigosas';
import { UtilidadesColapsadasPage } from '../utilidadescolapsadas/utilidadescolapsadas';
import { UtilidadesMedidasPage } from '../utilidadesmedidas/utilidadesmedidas';
import { UtilidadesConversoresPage } from '../utilidadesconversores/utilidadesconversores';




@Component({
  selector: 'page-listautilidades',
  templateUrl: 'listautilidades.html'
})

export class ListaUtilidadesPage {

  private items;

    constructor(public viewCtrl: ViewController) {
        this.items = [
            {
                'title': 'Insígnias',
                'class': UtilidadesListaInsigniasPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'Materias Perigosas',
                'class': UtilidadesPerigosasPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'Estruturas Colapsadas',
                'class': UtilidadesColapsadasPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'Medidas Universais',
                'class': UtilidadesMedidasPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
            {
                'title': 'Conversores',
                'class': UtilidadesConversoresPage,
                'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
                'icon': '#E63135'
            },
        ];
    }

}