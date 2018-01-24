import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewController, Platform } from 'ionic-angular';
import { Locations } from '../../../providers/locations';
import { GoogleMaps } from '../../../providers/google-maps';

@Component({
  selector: 'page-comunicacoesmapredecvp',
  templateUrl: 'comunicacoesmapredecvp.html'
})

export class ComunicacoesMapRedeCVPPage {

    @ViewChild('map') mapElement: ElementRef;
    @ViewChild('pleaseConnect') pleaseConnect: ElementRef;
	  
  	constructor(public viewCtrl: ViewController, public maps: GoogleMaps, public platform: Platform, public locations: Locations){    
  	}

    ionViewDidLoad(){
        this.platform.ready().then(() => {
            let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement); 
            let locationsLoaded = this.locations.load();
            Promise.all([
                mapLoaded,
                locationsLoaded
            ]).then((result) => {
                let locations = result[1];
                for(let location of locations){
                    this.maps.addMarker(location);
                }
            });
    });
  }
}