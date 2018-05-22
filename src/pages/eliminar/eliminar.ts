import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

import { InventarioService } from '../../services/inventario.service';
import { Inventario } from '../../services/inventario';

@Component({
  selector: 'page-eliminar',
  templateUrl: 'eliminar.html'
})
export class EliminarPage {

  id: number;
  inventario: Inventario;

  constructor(public navCtrl: NavController,private navParams: NavParams,public actionSheetCtrl: ActionSheetController, private servicio: InventarioService) {
    this.id = this.navParams.get('id');
    this.cargarDetalle(this.id);
  }

  cargarDetalle(id){
    this.servicio.getInventario(id).subscribe(
      rs => this.inventario = rs[0],
      er => console.log(er),
      () => console.log('OK', this.inventario)
    )
  }

  onEliminar(){
    this.presentActionSheet();
  }

  onCancelar(){
    this.navCtrl.pop();
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Usted esta a punto de eliminar el registro',
      buttons: [
        {
          text: 'SI',
          role: 'destructive',
          handler: () => {
            this.servicio.delInventario(this.id).subscribe(
              rs => console.log(rs),
              er => console.log(er),
              () => this.navCtrl.popToRoot()
            )
          }
        },{
          text: 'NO',
          role: 'cancel',
          handler: () => {
            this.navCtrl.popToRoot();
          }
        }
      ]
    });
    actionSheet.present();
  }
}
