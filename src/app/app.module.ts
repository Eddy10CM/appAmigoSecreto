import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { InfoPage } from '../pages/info/info';
import { RegistroPage } from '../pages/registro/registro';
import { InfogustosPage } from '../pages/infogustos/infogustos';
import { GustosPage } from '../pages/gustos/gustos';
import { DisgustosPage } from '../pages/disgustos/disgustos';
import { FelicidadesPage } from '../pages/felicidades/felicidades';
import { ListaPage } from '../pages/lista/lista';
import { InfochatPage } from '../pages/infochat/infochat';
import { ChatPage } from '../pages/chat/chat';
import { GlobalProvider } from '../providers/global/global';
import { DatabaseProvider } from '../providers/database/database';

import { SQLite } from '@ionic-native/sqlite';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    RegistroPage,
    InfogustosPage,
    GustosPage,
    DisgustosPage,
    FelicidadesPage,
    ListaPage,
    InfoPage,
    ChatPage,
    InfochatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    RegistroPage,
    InfogustosPage,
    GustosPage,
    DisgustosPage,
    FelicidadesPage,
    ListaPage,
    InfoPage,
    ChatPage,
    InfochatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    DatabaseProvider,
    SQLite
  ]
})
export class AppModule {}
