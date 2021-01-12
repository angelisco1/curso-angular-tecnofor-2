import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {

  darkMode: boolean = false;
  mascotas: Array<string> = [
    'gato',
    'perro',
    'canario'
  ]

  miMascota: string = 'canario';

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
  }

  deleteMascota(pos: number) {
    this.mascotas.splice(pos, 1);
  }

}
