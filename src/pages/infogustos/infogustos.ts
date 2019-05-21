import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GustosPage } from '../gustos/gustos';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-infogustos',
  templateUrl: 'infogustos.html',
})
export class InfogustosPage {

  idUsuario:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:DatabaseProvider) {
    let correo = navParams.get("correo");
    db.getUser(correo).then((response)=>{
      console.log("Usuario",response);
      this.idUsuario = response[0].idUsuario;
    }).catch(error=>{
      console.error("Error",error);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfogustosPage');
  }

  entendido(){
    this.navCtrl.push(GustosPage,{id:this.idUsuario});
  }
}
