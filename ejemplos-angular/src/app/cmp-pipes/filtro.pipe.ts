import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  // pure: false
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<string>, txt: string = ''): Array<string> {
    console.log('Pasa por el pipe');
    return value.filter((item) => {
      return item.includes(txt);
    });
  }

}