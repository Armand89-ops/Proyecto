import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  errores = [
    { nombre: 'Mal servicio', seleccionado: false, detalle: '' },
    { nombre: 'Paga no autorizada', seleccionado: false, detalle: '' },
    { nombre: 'Material en mala condición', seleccionado: false, detalle: '' },
    { nombre: 'Producto equivocado', seleccionado: false, detalle: '' },
    { nombre: 'Entrega tardía', seleccionado: false, detalle: '' },
    { nombre: 'Error en la pagina', seleccionado: false, detalle: '' },
    { nombre: 'Otro', seleccionado: false, detalle: '' }
  ];

  reporteExitoso = false;

  reportar() {

    this.reporteExitoso = true;
    this.errores.forEach(error => {
      error.seleccionado = false;
      error.detalle = '';
      
    });
    alert("Error reportado");
  }
}
