import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DisgustosPage } from '../disgustos/disgustos';
import { DatabaseProvider } from '../../providers/database/database';

@Component({
  selector: 'page-gustos',
  templateUrl: 'gustos.html',
})
export class GustosPage {

  list = [];
  gusto:string;
  idUsuario:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db:DatabaseProvider) {
    this.idUsuario = navParams.get("id");
  }

  ionViewDidLoad() {
  }

  add(){
    this.list.push(this.gusto);
    this.gusto = " ";
  }

  delete(item){
    for(var x in this.list){
      if (item === this.list[x]) {
        var y = Number(x)
        console.log(y);
        this.list.splice(y,1);
      }
    }
  }

  next(){
    //this.navCtrl.push(DisgustosPage);
    for(var x in this.list){
      this.db.insertGustos(this.list[x],this.idUsuario).then((response)=>{
        console.log("Response",response);
      }).catch((error)=>{
        console.error(error);
      })
    }
  }
}
