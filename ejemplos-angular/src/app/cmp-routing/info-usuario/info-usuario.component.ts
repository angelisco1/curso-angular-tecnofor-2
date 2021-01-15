import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {
  URL = 'http://jsonplaceholder.typicode.com/users';
  usuarioId: string = '';
  infoUsuario: any = {};

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log('El parámetro ha cambiado...');
      const id = params.get('usuarioId');
      this.usuarioId = id;
      this.getInfoUsuario(id);
    });
  }

  getInfoUsuario(id) {
    this.http.get(`${this.URL}/${id}`)
      .subscribe((info: any) => {
        this.infoUsuario = info;
      })
  }

}
