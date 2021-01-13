import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normales',
  templateUrl: './normales.component.html',
  styleUrls: ['./normales.component.css']
})
export class NormalesComponent implements OnInit {

  valoresPorDefecto = {
    u: '',
    e: '',
    p: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  registro(formulario) {
    // console.log(this.valoresPorDefecto)
    console.log(formulario.value)
  }

}
