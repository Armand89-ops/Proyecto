import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../conexion.service';

@Component({
  selector: 'app-holamundo',
  templateUrl: './holamundo.component.html',
  styleUrl: './holamundo.component.css'
})
export class HolamundoComponent implements OnInit{
  datos: any;
  constructor(private conexionService: ConexionService) { }
  ngOnInit(): void {
    this.datos = this.conexionService.getDatos();
  }
}
