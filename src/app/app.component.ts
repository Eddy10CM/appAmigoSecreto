import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public sqlite:SQLite, public database:DatabaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.crearDatabase();
    });
  }

  crearDatabase(){
    this.sqlite.create({
      name: 'amigosecreto.db',
      location: 'default'
    }).then((db)=>{
      this.database.setDatabase(db);
      console.log("DATABASE",db);
      return this.database.createTableUsuarios() && this.database.createTableGustos().then(res=>{console.log(res)}) && this.database.createTableDisgustos();
    }).catch(error=>{
      console.error(error);
    })
  }
}
