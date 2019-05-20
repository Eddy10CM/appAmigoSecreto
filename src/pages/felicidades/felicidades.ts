import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaPage } from '../lista/lista';

@Component({
  selector: 'page-felicidades',
  templateUrl: 'felicidades.html',
})
export class FelicidadesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FelicidadesPage');
  }

  entendido(){
    this.navCtrl.setRoot(ListaPage);
  }
}
