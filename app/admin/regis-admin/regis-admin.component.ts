import { Component, OnInit  } from '@angular/core';
import { ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-regis-admin',
  templateUrl: './regis-admin.component.html',
  styleUrl: './regis-admin.component.css'
})
export class RegisAdminComponent implements OnInit {
  usuario: any;
  datosA={
    nombre:"",
    apellido_p:"",
    apellido_m:"",
    correo:"",
    contrasena:"",
    domicilio:"",
    sector:"",
  }
  constructor(private conexionServicio: ConexionService) {}
  
  ngOnInit(){
    this.recuperarTodos2();
  }

  recuperarTodos2() {
    this.conexionServicio.recuperarTodos2().subscribe((result:any) => this.usuario = result);
  }

 
  agregar(){
    this.conexionServicio.registrar2(this.datosA).subscribe((datos:any)=>{
      if (datos['resultado']=='OK') {
        alert("Datos resgistrados");
        alert(datos['mensaje']);
      }else{
        alert(datos['mensaje']);
      }
    });
  }

  hayRegistros() {
    return true;
  } 


}

