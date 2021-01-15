import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarjetas',
  templateUrl: './lista-tarjetas.component.html',
  styleUrls: ['./lista-tarjetas.component.css']
})
export class ListaTarjetasComponent implements OnInit {

  numeros = [
    '7834 3428 5923 7288',
    '0000 3428 5923 7812',
    '7834 3111 5923 7288',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
