import { Routes } from '@angular/router';
import { InfoUsuarioComponent } from '../info-usuario/info-usuario.component';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { InfoGuard } from '../info.guard';
import { EditarGuard } from '../editar.guard';

export const USUARIOS_ROUTES: Routes = [
  { path: ':usuarioId/info', component: InfoUsuarioComponent, canActivate: [InfoGuard] },
  { path: ':usuarioId/editar', component: EditarUsuarioComponent, canDeactivate: [EditarGuard] },
]