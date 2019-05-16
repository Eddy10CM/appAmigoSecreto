import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GustosPage } from '../gustos/gustos';

@Component({
  selector: 'page-infogustos',
  templateUrl: 'infogustos.html',
})
export class InfogustosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfogustosPage');
  }

  entendido(){
    this.navCtrl.push(GustosPage);
  }
}
