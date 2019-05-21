import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InfogustosPage } from '../infogustos/infogustos';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  nombre:string;
  edad:number;
  ciudad:string;
  correo:string;
  password:string;
  verificarpassword:string;;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  saveData(){
    this.db.createUsuario(this.nombre,String(this.edad),this.ciudad,this.correo,this.password).then(data=>{
    //console.log("Usuario",data);
    this.navCtrl.push(InfogustosPage,{correo:this.correo});
  })
  .catch(error=>{
    console.log(error);
  });
    //this.showUsuarios();
  }

  showUsuarios(){
    this.db.getUsuario(this.correo,this.password).then((usuarios)=>{
      console.log("Usuarios",usuarios);
    })
    .catch((error)=>{
      console.error("Error",error);
    });
  }
}
