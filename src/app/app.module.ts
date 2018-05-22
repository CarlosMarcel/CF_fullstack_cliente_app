import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { InventarioPage } from '../pages/inventario/inventario';
import { DetallePage } from '../pages/detalle/detalle';
import { EditarPage } from '../pages/editar/editar';
import { EliminarPage } from '../pages/eliminar/eliminar';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

//Servicios
import { InventarioService } from '../services/inventario.service';
import { AuthService } from '../services/auth.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InventarioPage,
    DetallePage,
    EditarPage,
    EliminarPage,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InventarioPage,
    DetallePage,
    EditarPage,
    EliminarPage,
    TabsPage,
    LoginPage
  ],
  providers: [
    InventarioService,
    AuthService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
