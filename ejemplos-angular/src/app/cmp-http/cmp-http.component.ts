import { Component, OnInit } from '@angular/core';
import { OfertasTrabajoService } from './ofertas-trabajo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  ofertasTrabajo;
  constructor(private ofertasTrabajoServ: OfertasTrabajoService) { }

  ngOnInit(): void {
    this.getOfertas();
    this.ofertasTrabajoServ.actualizarVista.subscribe(() => {
      this.getOfertas();
    })
  }

  getOfertas() {
    this.ofertasTrabajoServ.getOfertasTrabajo()
      .subscribe((ofertasTrabajo) => {
        console.log(ofertasTrabajo);
        this.ofertasTrabajo = ofertasTrabajo;
      })
  }

  crearOferta() {
    this.ofertasTrabajoServ.crearOfertaTrabajo()
      .subscribe((resp: any) => {
        // this.getOfertas();
        this.ofertasTrabajoServ.emitirActualizacion();
        Swal.fire(
          'Oferta creada',
          `Oferta con id: ${resp.name}`,
          'success'
        )
      });
  }

}
