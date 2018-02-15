import { Injectable } from '@angular/core';

import { ListaProtecaoCivilPage }                           from '../pages/tab-protecaocivil/listaprotecaocivil/listaprotecaocivil';
import { ListaSocorrismoPage }                              from '../pages/tab-socorrismo/listasocorrismo/listasocorrismo';
import { ListaFogosPage }                                   from '../pages/tab-fogos/listafogos/listafogos';
import { ListaResgatePage }                                 from '../pages/tab-resgate/listaresgate/listaresgate';
import { ListaComunicacoesPage }                            from '../pages/tab-comunicacoes/listacomunicacoes/listacomunicacoes';
import { ListaUtilidadesPage }                              from '../pages/tab-utilidades/listautilidades/listautilidades';

@Injectable()
export class MenuService {

    private items;
    
    constructor() {
        this.items = [
            {
                title: 'Proteção Civil',
                component: ListaProtecaoCivilPage,
                icon: 'assets/img/logos/app.gif'
            },
            {
                title: 'Socorrismo',
                component: ListaSocorrismoPage,
                icon: 'assets/img/logos/socorrismo.png'
            },
            {
                title: 'Fogos',
                component: ListaFogosPage,
                icon: 'assets/img/logos/fogos.png'
            },
            {
                title: 'Resgate',
                component: ListaResgatePage,
                icon: 'assets/img/logos/resgate.png'
            },
            {
                title: 'Comunicações',
                component: ListaComunicacoesPage,
                icon: 'assets/img/logos/comunicacoes.png'
            },
            {
                title: "Utilidades",
                component: ListaUtilidadesPage,
                icon: 'assets/img/logos/utilidades.png'
            }
        ];
    }

    getItems() {
        return this.items;
    }
}