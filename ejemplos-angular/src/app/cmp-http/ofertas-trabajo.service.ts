import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfertasTrabajoService {
  URL: string = 'https://fluentjobs-fa22e.firebaseio.com/jobs/angel'
  actualizarVista = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  emitirActualizacion() {
    this.actualizarVista.emit(true);
  }

  getOfertasTrabajo() {
    return this.http.get(this.URL + '.json')
      .pipe(
        map((resp) => {
          const arOfertas = [];

          for (let idOferta in resp) {
            arOfertas.push({id: idOferta, ...resp[idOferta]});
          }

          return arOfertas;
        })
      );
  }

  crearOfertaTrabajo() {
    const nuevaOfertaTrabajo = {
      titulo: 'Angular Developer (Junior)',
      empresa: 'E-Corp',
      descripcion: 'El puesto consiste en ...',
      ciudad: 'Remote',
      salario: 20000
    }
    // console.log('Pasa por aquí')
    return this.http.post(this.URL + '.json', nuevaOfertaTrabajo)
      .pipe(
        tap(() => {
          this.emitirActualizacion();
        })
      );
  }

  eliminarOfertaTrabajo(id: string) {
    return this.http.delete(`${this.URL}/${id}.json`)
      .pipe(
        tap(() => {
          this.emitirActualizacion();
        })
      );
  }
}
