import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  URL = 'http://jsonplaceholder.typicode.com/users';
  usuarios = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.URL)
      .subscribe((usuarios: Array<any>) => {
        this.usuarios = usuarios;
      })
  }

}
