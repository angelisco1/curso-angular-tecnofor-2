import { EventEmitter, Injectable } from '@angular/core';

export interface Dato {
  id: string,
  texto: string
}

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datos: Array<Dato> = [
    {id: '0', texto: 'Dato 0'}
  ];

  datoNuevo = new EventEmitter<boolean>();

  constructor() { }

  getDatos(): Array<Dato> {
    return this.datos;
  }

  // addDato(nuevoDato: Dato): void {
  //   this.datos.push(nuevoDato);
  // }
  // addDato(nuevoDato: Dato): Array<Dato> {
  addDato(nuevoDato: Dato): void {
    // [].concat(this.datos, nuevoDato)
    this.datos = [...this.datos, nuevoDato];
    this.datoNuevo.emit(true);
    // return this.datos;
  }

}
