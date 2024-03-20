import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../conexion.service';

interface Producto {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent implements OnInit {
  datos: any;
  constructor(private conexionService: ConexionService){}
  ngOnInit(): void {
    this.datos = this.conexionService.getDatos();
  }

  productos: Producto[] = [
    {nombre: 'Caja de herramientas,AVEDISTANTE kit de herramientas',
      imagen: 'assets/Imagenes/imagen1.png',
      descripcion: 'uego de Herramientas Portátil de Mano Universal para el Hogar para Reparaciones Diarias. (Con Kit de Herramientas de Plástico).',
      precio: 500},
    {nombre: 'Taladro electrico alambrico modo de trabjo tres en uno',
      imagen: 'assets/Imagenes/imagen5.png',
      descripcion: 'Taladro Electrico Inalambrico/modo de trabajo tres en uno,(atornillado, taladrado, impacto) 2 baterías recargables de iones de litio，tamaño de mandril de 3/8.',
      precio: 750},
    {nombre: 'Taladro Eléctrico con kit de herramientas 112 Piezas',
      imagen: 'assets/Imagenes/imagen4.png',
      descripcion: 'Taladro Eléctrico Con Kit De Herramientas 112 Piezas, Atornillado,Taladrado,Impacto, Adecuada para La Reconstrucción Del Hogar.',
      precio: 525},
    {nombre: 'Juego de 4 alicates',
      imagen: 'assets/Imagenes/imagen7.png',
      descripcion: 'Juego de 4 Alicate de Anillo a Presión, Pinzas Craftsman, Alicates Internos y Externos de 7 ", Alicates de Mandíbula Recta/Doblada.',
      precio: 150},
    {nombre: 'LUCKSO Lampara Reflector LED,',
      imagen: 'assets/Imagenes/imagen6.png',
      descripcion: 'Portátil Recargable de Alta Potencia para Exterior, Tres Modos: Alta Media y SOS, Luz para Trabajo 30W, Iluminación Exterior de Noche Jardín.',
      precio: 350},
    {nombre: 'Truper ROTO-1/2A7, Rotomartillo 1/2" 650 W profesional',
      imagen: 'assets/Imagenes/imagen2.png',
      descripcion: 'Duradero motor de 650 W.Mango plástico con giro de 360° y varilla de profundidad para un control en el perforado.',
      precio: 1000},
  ];

  seleccionarProducto(producto: Producto) {
    console.log('Producto seleccionado:', producto);
  }
}
 