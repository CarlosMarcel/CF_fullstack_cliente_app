import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../services/auth.service';

//New import
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //Esta es la que viene por defecto si quiero inicializar siempre en un sitio
  //rootPage:any = LoginPage;

  public rootPage; // Esta se declara asi para no definir nada de entrada si ya estaba logeado.
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage, private auth: AuthService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Get the status from the storage
      this.storage.get('token').then(loggedIn => {
        this.rootPage = loggedIn ? TabsPage : LoginPage;
      });

      this.storage.get('currentUser').then((val) => {
        this.auth.userName = val;
    });

    });
  }
}
