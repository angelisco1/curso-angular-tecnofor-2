import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-error-form',
  templateUrl: './error-form.component.html',
  styleUrls: ['./error-form.component.css']
})
export class ErrorFormComponent implements OnChanges {

  @Input() erroresForm;
  errorMsg: string = '';

  constructor() { }

  ngOnChanges(): void {
    console.log(this.erroresForm)
    this.errorMsg = this.getMensajeError(this.erroresForm);
  }

  getMensajeError(errores: any): string {
    const clave = Object.keys(errores)[0];
    switch(clave) {
      case 'required':
        return 'Este campo es obligatorio';
      case 'minlength':
        return `Necesitas ${errores[clave].requiredLength - errores[clave].actualLength} carácteres más`;
      case 'pattern':
        return 'Este no es un email válido';
      default:
        return 'Tienes otro tipo de error'
    }
  }

}
