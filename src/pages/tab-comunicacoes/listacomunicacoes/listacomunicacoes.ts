import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ComunicacoesRedeCVPPage } from '../comunicacoesredecvp/comunicacoesredecvp';
import { ComunicacoesMapRedeCVPPage } from '../comunicacoesmapredecvp/comunicacoesmapredecvp';
import { ComunicacoesDistanciaRedeCVPPage } from '../comunicacoesdistanciaredecvp/comunicacoesdistanciaredecvp';
import { ComunicacoesIndicativosNacionalPage } from '../comunicacoesindicativosnacional/comunicacoesindicativosnacional';
import { ComunicacoesIndicativosCoimbraPage } from '../comunicacoesindicativoscoimbra/comunicacoesindicativoscoimbra';
import { ComunicacoesAlfabetoPage } from '../comunicacoesalfabeto/comunicacoesalfabeto';
import { ComunicacoesMorsePage } from '../comunicacoesmorse/comunicacoesmorse';
import { ComunicacoesTerraArPage } from '../comunicacoesterraar/comunicacoesterraar';
import { ComunicacoesBandeirasPage } from '../comunicacoesbandeiras/comunicacoesbandeiras';
import { ComunicacoesMaritimosPage } from '../comunicacoesmaritimos/comunicacoesmaritimos';
import { ComunicacoesGruasPage } from '../comunicacoesgruas/comunicacoesgruas';



@Component({
  selector: 'page-listacomunicacoes',
  templateUrl: 'listacomunicacoes.html'
})

export class ListaComunicacoesPage {

 private items;

  constructor(public viewCtrl: ViewController) {
    this.items = [
      {
        'title': 'Rede CVP',
        'class': ComunicacoesRedeCVPPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Mapa da Rede CVP',
        'class': ComunicacoesMapRedeCVPPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Distancia aos Repetidores da Rede CVP',
        'class': ComunicacoesDistanciaRedeCVPPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Indicativos CVP Nacional',
        'class': ComunicacoesIndicativosNacionalPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Indicativos CVP Coimbra',
        'class': ComunicacoesIndicativosCoimbraPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Alfabeto Fonético',
        'class': ComunicacoesAlfabetoPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Código Morse',
        'class': ComunicacoesMorsePage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Sinais Terra Ar',
        'class': ComunicacoesTerraArPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Sinais Bandeiras',
        'class': ComunicacoesBandeirasPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Sinais Marítimos',
        'class': ComunicacoesMaritimosPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      },
      {
        'title': 'Sinais para Gruas',
        'class': ComunicacoesGruasPage,
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'icon': '#E63135'
      }
    ];
  }

}