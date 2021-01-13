import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datosCV = {
    nombre: 'AA',
    apellido: 'BB',
    fecha: new Date(1992, 10, 2),
    imagenUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
  }

  actualizarCV(event) {
    if (event.name == 'fecha') {
      const splitFecha = event.value.split('-');
      event.value = new Date(splitFecha[0], splitFecha[1], splitFecha[2])
    }
    this.datosCV[event.name] = event.value;
  }
}
