import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InventarioService } from '../../services/inventario.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  form: FormGroup;
  constructor(public navCtrl: NavController, private fb: FormBuilder, private service: InventarioService, private alertCtrl: AlertController) {
    this.crearFormulario();
  }

  crearFormulario(){
    this.form = this.fb.group({
      id: ['', Validators.required],
      producto: ['', Validators.required],
      existencia: ['', Validators.required],
      precio: ['', Validators.required],
      proveedor: ['', Validators.required]
    })
  }

  guardarInventario(){
    this.service.addInventario(this.form.value).subscribe(
      rs => this.showAlert(),
      er => console.log(er),
      () => console.log('OK')
    )
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Agregar Inventario',
      subTitle: 'Los datos se guardaron exitosamente!',
      buttons: ['Ok']
    });

    alert.present();
    this.form.reset();

  }

}
