import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-darth-vader',
  templateUrl: './cmp-darth-vader.component.html',
  styleUrls: ['./cmp-darth-vader.component.css']
})
export class CmpDarthVaderComponent implements OnInit {

  nombreHijaCompleto = 'Leia Skywalker';

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombreHija(nuevoNombreHija) {
    console.log('Nombre cambiado')
    this.nombreHijaCompleto = nuevoNombreHija;
  }

}
