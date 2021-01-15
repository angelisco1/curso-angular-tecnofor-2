import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() numTarjetaCredito = '7834 3428 5923 7288';

  constructor() { }

  ngOnInit(): void {
  }

}
