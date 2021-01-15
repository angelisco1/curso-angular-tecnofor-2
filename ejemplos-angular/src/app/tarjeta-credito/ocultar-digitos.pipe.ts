import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarDigitos'
})
export class OcultarDigitosPipe implements PipeTransform {

  transform(value: string): string {
    const numerosVisibles = value.slice(-4)
    const numerosAOcultar = value.slice(0, -4)
    return numerosAOcultar.replace(/\d/g, '*') + numerosVisibles;
  }

}
