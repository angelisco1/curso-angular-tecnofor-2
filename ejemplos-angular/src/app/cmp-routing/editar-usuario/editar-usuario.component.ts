import { Component, OnInit } from '@angular/core';
import { ComponenteDeactivate } from '../editar.guard';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit, ComponenteDeactivate {
  datosGuardados = false;

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    this.datosGuardados = !this.datosGuardados;
  }

  canDeactivate() {
    return this.datosGuardados ? true : confirm('Quieres salir?? Perderas los datos que no se han guardado...');
  }

}
