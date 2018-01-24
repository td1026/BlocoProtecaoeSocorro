import { Component } from '@angular/core';
import { ViewController, Platform } from 'ionic-angular';
import { Locations } from '../../../providers/locations';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-comunicacoesdistanciaredecvp',
  templateUrl: 'comunicacoesdistanciaredecvp.html'
})

export class ComunicacoesDistanciaRedeCVPPage {

    private itens: any = [];
    private watch: any;


      constructor(  public viewCtrl: ViewController, 
                    public platform: Platform,
                    private geolocation: Geolocation, 
                    public locations: Locations){ 
        this.watch = this.geolocation.watchPosition();
        this.watch.subscribe((data) => {
            for(let item of this.itens){
                item.distancia = this.DistanciaEntrePontos(data.coords.latitude,data.coords.longitude,item.latitude,item.longitude);
            }

            this.itens.sort((n1,n2) => {
                if (n1.distancia > n2.distancia) {
                    return 1;
                }
                if (n1.distancia < n2.distancia) {
                    return -1;
                }

                return 0;
            });
        });
        this.locations.load2().subscribe((params:any)=>{
            var it = params.locations;
            for(let location of it){
                this.itens.push({ 
                    "title": location.title,
                    "canal": location.canal,
                    "plataforma": location.plataforma,
                    "latitude": location.latitude,
                    "longitude": location.longitude,
                    "distancia": 0
                });
            }
        });
    }
    ngOnDestroy(){
    }
        
        
    DistanciaEntrePontos(lat1: number, lng1: number, lat2: number, lng2: number) {
        var earthRadius: number = 6371;
        var dLat: number = (lat2 - lat1) * Math.PI / 180;
        var dLng: number = (lng2 - lng1) * Math.PI / 180;
        var sindLat: number = Math.sin(dLat / 2);
        var sindLng: number = Math.sin(dLng / 2);
        var a: number = Math.pow(sindLat, 2) + Math.pow(sindLng, 2)
                * Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180);
        var c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadius * c;
    }

    
}