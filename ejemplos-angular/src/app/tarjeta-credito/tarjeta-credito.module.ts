import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { OcultarDigitosPipe } from './ocultar-digitos.pipe';
import { ListaTarjetasComponent } from './lista-tarjetas/lista-tarjetas.component';



@NgModule({
  declarations: [TarjetaComponent, OcultarDigitosPipe, ListaTarjetasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TarjetaComponent,
    ListaTarjetasComponent
  ]
})
export class TarjetaCreditoModule { }
