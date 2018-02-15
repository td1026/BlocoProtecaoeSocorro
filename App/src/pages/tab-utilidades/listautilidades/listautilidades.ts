import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import { UtilidadesListaInsigniasPage } from '../utilidadesinsignias/utilidadeslistainsignias/utilidadeslistainsignias';
import { UtilidadesPerigosasPage } from '../utilidadesperigosas/utilidadesperigosas';
import { UtilidadesColapsadasPage } from '../utilidadescolapsadas/utilidadescolapsadas';
import { UtilidadesMedidasPage } from '../utilidadesmedidas/utilidadesmedidas';
import { UtilidadesConversoresPage } from '../utilidadesconversores/utilidadesconversores';
import { UtilidadesBombeirosPage } from '../utilidadesbombeiros/utilidadesbombeiros';




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
                'icon': '#E63135'
            },
            {
                'title': 'Materias Perigosas',
                'class': UtilidadesPerigosasPage,
                'icon': '#E63135'
            },
            {
                'title': 'Estruturas Colapsadas',
                'class': UtilidadesColapsadasPage,
                'icon': '#E63135'
            },
            {
                'title': 'Medidas Universais',
                'class': UtilidadesMedidasPage,
                'icon': '#E63135'
            },
            {
                'title': 'Conversores',
                'class': UtilidadesConversoresPage,
                'icon': '#E63135'
            },
            {
                'title': 'Bombeiros',
                'class': UtilidadesBombeirosPage,
                'icon': '#E63135'
            }
        ];
    }

}