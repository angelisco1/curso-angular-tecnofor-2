import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-data-binding',
  templateUrl: './cmp-data-binding.component.html',
  styleUrls: ['./cmp-data-binding.component.css']
})
export class CmpDataBindingComponent implements OnInit {

  nombre = 'Pepito';
  formularioValido = true;
  // formularioValido = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarHolaMundo() {
    alert('Hola Mundo!!');
  }

  actualizarNombre(event) {
    // console.log(event);
    this.nombre = event.target.value;
  }

}
