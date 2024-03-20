import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadreComponent } from './shared/headre/headre.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { Header2Component } from './shared/header2/header2.component';
import { HolamundoComponent } from './abrir/holamundo/holamundo.component';
import { AgregarComponent } from './auth/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactanosComponent } from './abrir/contactanos/contactanos.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductosComponent } from './abrir/productos/productos.component';
import { ReporteComponent } from './abrir/reporte/reporte.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { RegisAdminComponent } from './admin/regis-admin/regis-admin.component';
import { RegisProducComponent } from './admin/regis-produc/regis-produc.component';
import { ProducComponent } from './admin/produc/produc.component';
import { VentasEmpesaComponent } from './admin/ventas-empesa/ventas-empesa.component';
import { ReporActiviComponent } from './admin/repor-activi/repor-activi.component';
import { RegisProveComponent } from './admin/regis-prove/regis-prove.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadreComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    Header2Component,
    HolamundoComponent,
    AgregarComponent,
    ContactanosComponent,
    ProductosComponent,
    ReporteComponent,
    InicioComponent,
    RegisAdminComponent,
    RegisProducComponent,
    ProducComponent,
    VentasEmpesaComponent,
    ReporActiviComponent,
    RegisProveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //provideClientHydration()
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
