import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

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

  openChat(){
    this.navCtrl.push(ChatPage);
  }
}
