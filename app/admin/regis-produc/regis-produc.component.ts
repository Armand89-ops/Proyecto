import { Component } from '@angular/core';
import { ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-regis-produc',
  templateUrl: './regis-produc.component.html',
  styleUrl: './regis-produc.component.css'
})
export class RegisProducComponent {
  usuario: any;
  datosP={
    codigo:"",
    clave:"",
    descripcion:"",
    mayoreo:"",
    menudeo:"",
    unidades:"",
    peso:"",
    dimensiones:"",
  }
  							
  constructor(private conexionServicio: ConexionService) {}
  agregar(){
    this.conexionServicio.registrar3(this.datosP).subscribe((datos:any)=>{
      if (datos['resultado']=='OK') {
        alert("Datos resgistrados");
        alert(datos['mensaje']);
      }else{
        alert(datos['mensaje']);
      }
    });
  }
}
