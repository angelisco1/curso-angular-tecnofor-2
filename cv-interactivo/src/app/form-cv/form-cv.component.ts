import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

interface EventCV {
  name: string,
  value: string
}

@Component({
  selector: 'app-form-cv',
  templateUrl: './form-cv.component.html',
  styleUrls: ['./form-cv.component.css']
})
export class FormCvComponent implements OnInit {

  @Input() nombre: string;
  @Input() apellido: string;
  @Input() imagenUrl: string;
  @Input() fecha: Date;
  @Output() datoCambiado = new EventEmitter<EventCV>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarDato(event) {
    // console.log(event);
    this.datoCambiado.emit({
      name: event.target.name,
      value: event.target.value
    })
  }

}
