import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { InfochatPage } from '../infochat/infochat';

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  compatibles = [{
    'compatibilidad': '99%',
    'img': "",
    'chat': [{
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
    }],
  },{
    'compatibilidad': '98%',
    'img': "",
  },{
    'compatibilidad': '60%',
    'img': "",
    'chat': [{
      'apodo': "Apodo2",
      'mensajes': [{
        'recibido:': "Que cuentas",
        'enviado': ""
      }],
      'ultimoMensaje': 'jajaja'
    }]
  },{
    'compatibilidad': '75%',
    'img': "",
  },{
    'compatibilidad': '80%',
    'img': "",
  }];

  chats = [];

  listaChatCompatibles: string = "compatibles";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

  openChat(infoChat){
    console.log(infoChat);
    this.navCtrl.push(ChatPage,{'chat': infoChat});
  }

  openInfo(){
    this.navCtrl.push(InfochatPage);
  }
}
