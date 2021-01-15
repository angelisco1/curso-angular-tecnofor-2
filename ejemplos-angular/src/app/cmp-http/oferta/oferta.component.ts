import { Component, Input, OnInit } from '@angular/core';
import { OfertasTrabajoService } from '../ofertas-trabajo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  @Input() oferta;

  constructor(private ofertasTrabajoServ: OfertasTrabajoService) { }

  ngOnInit(): void {
  }

  eliminar() {
    this.ofertasTrabajoServ.eliminarOfertaTrabajo(this.oferta.id)
      .subscribe(() => {
        Swal.fire(
          'Oferta eliminada',
          'Oferta id: ' + this.oferta.id,
          'success'
        )
        // this.ofertasTrabajoServ.emitirActualizacion();
      });
  }
}
