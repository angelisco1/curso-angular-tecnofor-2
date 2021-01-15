import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  crear() {
    console.log('Guardando los datos...');
    setTimeout(() => {
      this.router.navigate(['/usuarios']);
      // this.router.navigateByUrl(`/usuarios`);
    }, 1500)
  }

}
