import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolamundoComponent } from './abrir/holamundo/holamundo.component';
import { AgregarComponent } from './auth/agregar/agregar.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactanosComponent } from './abrir/contactanos/contactanos.component';
import { ReporteComponent } from './abrir/reporte/reporte.component';
import { ProductosComponent } from './abrir/productos/productos.component';
import { InicioComponent } from './admin/inicio/inicio.component';
import { RegisAdminComponent } from './admin/regis-admin/regis-admin.component';
import { RegisProducComponent } from './admin/regis-produc/regis-produc.component';
import { RegisProveComponent } from './admin/regis-prove/regis-prove.component';
import { ProducComponent } from './admin/produc/produc.component';
import { ReporActiviComponent } from './admin/repor-activi/repor-activi.component';
import { VentasEmpesaComponent } from './admin/ventas-empesa/ventas-empesa.component';

const routes: Routes = [
  {path: '', component:ProductosComponent},
  {path:'login',component:LoginComponent},
  {path:'iniciar-sesion',component:DashboardComponent},
  {path:'holamundo',component:HolamundoComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'contactanos',component:ContactanosComponent},
  {path:'reportar',component:ReporteComponent},
  
  {path:'menuAdmin',component:InicioComponent},
  {path:'regis-admin',component:RegisAdminComponent},
  {path:'regis-produc',component:RegisProducComponent},
  {path:'regis-empresa',component:RegisProveComponent},
  {path:'producto',component:ProducComponent},
  {path:'repor-acti',component:ReporActiviComponent},
  {path:'ventasEmpresa',component:VentasEmpesaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
