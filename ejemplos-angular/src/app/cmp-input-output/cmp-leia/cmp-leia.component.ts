import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cmp-leia',
  templateUrl: './cmp-leia.component.html',
  styleUrls: ['./cmp-leia.component.css']
})
export class CmpLeiaComponent implements OnInit {

  @Input() nombre;
  @Output() nombreCambiado = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre(event) {
    // this.nombre = event.target.value;
    this.nombreCambiado.emit(event.target.value);
  }

  cambiarNombre2(newValue) {
    this.nombreCambiado.emit(newValue);
  }

}
