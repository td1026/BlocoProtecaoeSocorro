import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MenuService }                                      from '../../services/menuservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    private items;
    
    constructor(public navCtrl: NavController, private menuService: MenuService) {
        this.items = this.menuService.getItems();
    }
}