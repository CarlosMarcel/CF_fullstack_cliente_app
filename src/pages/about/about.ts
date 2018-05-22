import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

import {Storage} from '@ionic/storage';
import { AuthService } from '../../services/auth.service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  token: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public storage: Storage,
    public auth: AuthService,
    public toastCtrl: ToastController) 
    {
      
    }

    

  showToken(){

  this.storage.get('token').then(id_token => {
    this.token = id_token;
      console.log("El token es: "+this.token);
    if (id_token != null) {
      //this.navCtrl.setRoot('LoginPage');
      //return false;
      console.log("El token esta");
      let toast = this.toastCtrl.create({
        message: 'El token esta es: '+ id_token,
        duration: 3000
      });
      toast.present();
    }else{
      console.log("El token no esta");
      let toast = this.toastCtrl.create({
        message: 'El token NO esta es: '+ id_token,
        duration: 3000
      });
      toast.present();
    }
  });
  }

  removeToken(){
    this.storage.remove('token');
    console.log("El token ha sido borrado");
  }
}
