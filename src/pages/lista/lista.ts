import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  compatibles = [{
    'compatibilidad': '99%',
    'img': "",
  },{
    'compatibilidad': '98%',
    'img': "",
  },{
    'compatibilidad': '60%',
    'img': "",
  },{
    'compatibilidad': '75%',
    'img': "",
  },{
    'compatibilidad': '80%',
    'img': "",
  }];

  chats = [{
    'apodo': "Apodo1",
    'mensajes': [{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    }],
    'ultimoMensaje': 'Hola'
  },
  {
    'apodo': "Apodo2",
    'mensajes': [{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    }],
    'ultimoMensaje': 'jajaja'
  },{
    'apodo': "Apodo1",
    'mensajes': [{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    },{
      'mensaje:': "Que cuentas"
    }],
    'ultimoMensaje': 'Que haces'
  }];

  listaChatCompatibles: string = "compatibles";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
