import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfogustosPage } from '../infogustos/infogustos';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  saveData(){
    this.navCtrl.push(InfogustosPage);
  }
}
