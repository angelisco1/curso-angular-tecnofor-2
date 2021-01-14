import { Component, OnInit } from '@angular/core';
import { Dato, DatosService } from '../datos.service';

@Component({
  selector: 'app-cmp-b',
  templateUrl: './cmp-b.component.html',
  styleUrls: ['./cmp-b.component.css']
})
export class CmpBComponent implements OnInit {
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
      // id: Number(Math.random().toString().slice(2)),
      texto
    }
    // this.listaDatos.push(nuevoDato);
    this.datosServ.addDato(nuevoDato);
    // this.listaDatos = this.datosServ.getDatos();
    // this.listaDatos = this.datosServ.addDato(nuevoDato);
  }
}
