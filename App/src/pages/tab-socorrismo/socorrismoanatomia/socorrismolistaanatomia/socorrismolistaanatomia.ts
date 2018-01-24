import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';
import { SocorrismoAnatomiaPlanosPage }               from '../socorrismoanatomiaplanos/socorrismoanatomiaplanos';
import { SocorrismoAnatomiaCranioPage }               from '../socorrismoanatomiacranio/socorrismoanatomiacranio';
import { SocorrismoAnatomiaColunaPage }               from '../socorrismoanatomiacoluna/socorrismoanatomiacoluna';
import { SocorrismoAnatomiaToraxPage }                from '../socorrismoanatomiatorax/socorrismoanatomiatorax';
import { SocorrismoAnatomiaCinturaPage }              from '../socorrismoanatomiacintura/socorrismoanatomiacintura';
import { SocorrismoAnatomiaAbdomenPage }              from '../socorrismoanatomiaabdomen/socorrismoanatomiaabdomen';
import { SocorrismoAnatomiaMembrosInferioresPage }    from '../socorrismoanatomiamembrosinferiores/socorrismoanatomiamembrosinferiores';
import { SocorrismoAnatomiaMembrosSuperioresPage }    from '../socorrismoanatomiamembrossuperiores/socorrismoanatomiamembrossuperiores';
import { SocorrismoAnatomiaDigestivoPage }            from '../socorrismoanatomiadigestivo/socorrismoanatomiadigestivo';
import { SocorrismoAnatomiaVentilatorioPage }         from '../socorrismoanatomiaventilatorio/socorrismoanatomiaventilatorio';
import { SocorrismoAnatomiaPulsosPage }               from '../socorrismoanatomiapulsos/socorrismoanatomiapulsos';

@Component({
  selector: 'page-socorrismolistaanatomia',
  templateUrl: 'socorrismolistaanatomia.html'
})
export class SocorrismoListaAnatomiaPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Planos Anatómicos',
        'class': SocorrismoAnatomiaPlanosPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Crânio e Face',
        'class': SocorrismoAnatomiaCranioPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Coluna Vertebral',
        'class': SocorrismoAnatomiaColunaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Tórax',
        'class': SocorrismoAnatomiaToraxPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Cintura Pélvica',
        'class': SocorrismoAnatomiaCinturaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Abdómen',
        'class': SocorrismoAnatomiaAbdomenPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Membros Inferiores',
        'class': SocorrismoAnatomiaMembrosInferioresPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Membros Superiores',
        'class': SocorrismoAnatomiaMembrosSuperioresPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Sistema Digestivo',
        'class': SocorrismoAnatomiaDigestivoPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Sistema Ventilatorio',
        'class': SocorrismoAnatomiaVentilatorioPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Pulsos',
        'class': SocorrismoAnatomiaPulsosPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }
    ];
  }

}
