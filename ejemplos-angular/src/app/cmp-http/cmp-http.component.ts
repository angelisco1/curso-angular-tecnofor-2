import { Component, OnInit } from '@angular/core';
import { OfertasTrabajoService } from './ofertas-trabajo.service';
import Swal from 'sweetalert2';
import { LoginService } from './login.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  ofertasTrabajo;
  isLoggedIn: boolean = false;

  constructor(private ofertasTrabajoServ: OfertasTrabajoService, private loginServ: LoginService) { }

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
        // this.ofertasTrabajoServ.emitirActualizacion();
        Swal.fire(
          'Oferta creada',
          `Oferta con id: ${resp.name}`,
          'success'
        )
      });
  }

  login() {
    this.loginServ.guardarToken();
    this.isLoggedIn = true;
  }

  logout() {
    this.loginServ.eliminarToken();
    this.isLoggedIn = false;
  }
}
