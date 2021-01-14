import { Component, OnInit } from '@angular/core';
import { Dato, DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-a',
  templateUrl: './cmp-a.component.html',
  styleUrls: ['./cmp-a.component.css']
})
export class CmpAComponent implements OnInit {
  listaDatos: Array<Dato>;

  constructor(private datosServ: DatosService) { }

  ngOnInit(): void {
    this.datosServ.datoNuevo.subscribe(() => {
      this.listaDatos = this.datosServ.getDatos();
    });
    this.listaDatos = this.datosServ.getDatos();
  }

  crearDato(texto: string) {
    const nuevoDato = {
      id: Math.random().toString().slice(2),
      texto
    }
    // this.listaDatos = this.datosServ.addDato(nuevoDato);
    this.datosServ.addDato(nuevoDato);
    // this.listaDatos = this.datosServ.getDatos();
    // this.listaDatos.push(nuevoDato);
  }
}
