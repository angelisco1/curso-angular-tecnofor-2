import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { InfoUsuarioComponent } from './info-usuario/info-usuario.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { USUARIOS_ROUTES } from './usuarios/usuarios.routes';


const APP_ROUTES: Routes = [
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  // { path: 'usuarios/:usuarioId/info', component: InfoUsuarioComponent },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: 'tiempo', component: TiempoComponent, outlet: 'auxiliar' },
  { path: 'noticias', component: NoticiasComponent, outlet: 'auxiliar' },
  // { path: 'tiempo', component: TiempoComponent, outlet: 'auxiliar1' },
  // { path: 'noticias', component: NoticiasComponent, outlet: 'auxiliar1' },
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
  // { path: '**', redirectTo: 'usuarios' },
]

export const Router = RouterModule.forRoot(APP_ROUTES);