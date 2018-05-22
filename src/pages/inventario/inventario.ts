import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';
import { EditarPage } from '../editar/editar';
import { EliminarPage } from '../eliminar/eliminar';

import { InventarioService } from '../../services/inventario.service';
import { Inventario } from '../../services/inventario';
@Component({
  selector: 'page-inventario',
  templateUrl: 'inventario.html'
})
export class InventarioPage {

  lista: Inventario[];
  constructor(public navCtrl: NavController, private servicio: InventarioService, public navParams: NavParams) {

    this.leerInventario();

  }

  ionViewWillEnter(){
    this.leerInventario();
  }

  onClick(item){
    this.navCtrl.push(DetallePage,{
      id: item.id
    });
  }

  onEditar(item){
    this.navCtrl.push(EditarPage,{
      id: item.id
    });
  }
  
  onEliminar(item){
    this.navCtrl.push(EliminarPage,{
      id: item.id
    });
   }

  leerInventario(){
    this.servicio.getInventarios().subscribe(
      rs => this.lista = rs,
      er => console.log(er),
      () => console.log(this.lista)
    );
  }

}