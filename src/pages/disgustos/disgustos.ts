import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FelicidadesPage } from '../felicidades/felicidades';

@Component({
  selector: 'page-disgustos',
  templateUrl: 'disgustos.html',
})
export class DisgustosPage {
  
  list = [];
  gusto:string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
    this.navCtrl.push(FelicidadesPage);
  }

}
