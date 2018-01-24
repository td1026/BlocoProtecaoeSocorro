import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { SocorrismoMedicasAlergiasPage }          from '../socorrismomedicasalergias/socorrismomedicasalergias';
import { SocorrismoMedicasAnginaPage }            from '../socorrismomedicasangina/socorrismomedicasangina';
import { SocorrismoMedicasApendicitePage }        from '../socorrismomedicasapendicite/socorrismomedicasapendicite';
import { SocorrismoMedicasApoioSAVPage }          from '../socorrismomedicasapoiosav/socorrismomedicasapoiosav';
import { SocorrismoMedicasAsmaPage }              from '../socorrismomedicasasma/socorrismomedicasasma';
import { SocorrismoMedicasAVCPage }               from '../socorrismomedicasavc/socorrismomedicasavc';
import { SocorrismoMedicasChoquePage }            from '../socorrismomedicaschoque/socorrismomedicaschoque';
import { SocorrismoMedicasColicaPage }            from '../socorrismomedicascolica/socorrismomedicascolica';
import { SocorrismoMedicasConvulsaoPage }         from '../socorrismomedicasconvulsao/socorrismomedicasconvulsao';
import { SocorrismoMedicasDigestivaPage }         from '../socorrismomedicasdigestiva/socorrismomedicasdigestiva';
import { SocorrismoMedicasDissecaoPage }          from '../socorrismomedicasdissecao/socorrismomedicasdissecao';
import { SocorrismoMedicasDpocPage }              from '../socorrismomedicasdpoc/socorrismomedicasdpoc';
import { SocorrismoMedicasEdemaPage }             from '../socorrismomedicasedema/socorrismomedicasedema';
import { SocorrismoMedicasEnfartePage }           from '../socorrismomedicasenfarte/socorrismomedicasenfarte';
import { SocorrismoMedicasHiperglicemiaPage }     from '../socorrismomedicashiperglicemia/socorrismomedicashiperglicemia';
import { SocorrismoMedicasHipoglicemiaPage }      from '../socorrismomedicashipoglicemia/socorrismomedicashipoglicemia';
import { SocorrismoMedicasIntoxicacaoPage }       from '../socorrismomedicasintoxicacao/socorrismomedicasintoxicacao';
import { SocorrismoMedicasOclusaoPage }           from '../socorrismomedicasoclusao/socorrismomedicasoclusao';
import { SocorrismoMedicasPneumotoraxPage }       from '../socorrismomedicaspneumotorax/socorrismomedicaspneumotorax';

@Component({
  selector: 'page-socorrismolistamedicas',
  templateUrl: 'socorrismolistamedicas.html'
})

export class SocorrismoListaMedicasPage {

  private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Angina de Peito',
        'class': SocorrismoMedicasAnginaPage ,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Enfarte Agudo do Miocárdio',
        'class': SocorrismoMedicasEnfartePage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Dissecção da Aorta',
        'class': SocorrismoMedicasDissecaoPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Pneumotórax (Hipertensivo)',
        'class': SocorrismoMedicasPneumotoraxPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'ASMA',
        'class': SocorrismoMedicasAsmaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'DPOC',
        'class': SocorrismoMedicasDpocPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Edema Agudo do Pulmão',
        'class': SocorrismoMedicasEdemaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Apendicite',
        'class': SocorrismoMedicasApendicitePage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Cólica Renal',
        'class': SocorrismoMedicasColicaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Oclusão Intestinal',
        'class': SocorrismoMedicasOclusaoPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Hemorragia Digestiva',
        'class': SocorrismoMedicasDigestivaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'AVC',
        'class': SocorrismoMedicasAVCPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Reação Alérgica',
        'class': SocorrismoMedicasAlergiasPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Intoxicação',
        'class': SocorrismoMedicasIntoxicacaoPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Crise Convulsiva',
        'class': SocorrismoMedicasConvulsaoPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Hipoglicemia',
        'class': SocorrismoMedicasHipoglicemiaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Hiperglicemia',
        'class': SocorrismoMedicasHiperglicemiaPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Choque',
        'class': SocorrismoMedicasChoquePage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Apoio ao SAV',
        'class': SocorrismoMedicasApoioSAVPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }
    ];
  }
}