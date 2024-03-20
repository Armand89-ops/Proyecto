import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor() { }

  navigateTo(page: string) {
    console.log(`Navegar a ${page}`);
    // Aquí puedes implementar la lógica de enrutamiento para dirigir al usuario a la página correspondiente.
    
  }
}
