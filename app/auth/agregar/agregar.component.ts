import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})

export class AgregarComponent implements OnInit{
  usuario: any;
  datosU={
    nombre:"",
    apellido_p:"",
    apellido_m:"",
    correo:"",
    contrasena:"",
  }
  constructor(private conexionServicio: ConexionService) {}
  ngOnInit(){
      this.recuperarTodos();
  }
  recuperarTodos() {
    this.conexionServicio.recuperarTodos().subscribe((result:any) => this.usuario = result);
  }

  agregar(){
    this.conexionServicio.registrar(this.datosU).subscribe((datos:any)=>{
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



