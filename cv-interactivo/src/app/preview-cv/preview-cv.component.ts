import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preview-cv',
  templateUrl: './preview-cv.component.html',
  styleUrls: ['./preview-cv.component.css']
})
export class PreviewCvComponent implements OnInit {

  @Input() nombre: string;
  @Input() apellido: string;
  @Input() imagenUrl: string;
  @Input() fecha: Date;
  altImg: string = '';

  constructor() { }

  ngOnInit(): void {
    this.altImg = 'Imagen de ' + this.nombre;
  }

}
