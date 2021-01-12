import { Component, OnInit } from '@angular/core';

interface Producto {
  nombre: string,
  descripcion: string,
  precio: number,
  fechaLanzamiento: Date,
  caracteristicas: Array<string>,
  enStock?: boolean
}

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  producto: Producto = {
    nombre: 'one plus 8T',
    descripcion: 'Smartphone de la marca 1+ de última generación...',
    precio: 700,
    fechaLanzamiento: new Date(2019, 3, 10),
    caracteristicas: [
      '8GB Ram',
      '128GB',
      '6 cámaras',
      '5G'
    ],
    enStock: true
  }

  productoAsync = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        nombre: 'one plus 6',
        descripcion: 'Smartphone de la marca 1+ de última generación...',
        precio: 400,
        fechaLanzamiento: new Date(2017, 3, 10),
        caracteristicas: [
          '8GB Ram',
          '128GB',
          '3 cámaras',
        ],
        enStock: true
      })
    }, 2000);
  });

  simbolo: string = 'EUR';
  filtroTxt: string = 'GB';

  constructor() { }

  ngOnInit(): void {
  }

  addCaracteristicaAProducto(nuevaCaracteristica) {
    // this.producto.caracteristicas.push(nuevaCaracteristica);
    this.producto.caracteristicas = [...this.producto.caracteristicas, nuevaCaracteristica];
  }
}
