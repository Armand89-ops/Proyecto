import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-produc',
  templateUrl: './produc.component.html',
  styleUrl: './produc.component.css'
})
export class ProducComponent implements OnInit {
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

  ngOnInit(){
    this.recuperarTodos3();
  }

  recuperarTodos3() {
    this.conexionServicio.recuperarTodos3().subscribe((result:any) => this.usuario = result);
  }

  hayRegistros() {
    return true;
  } 

}
