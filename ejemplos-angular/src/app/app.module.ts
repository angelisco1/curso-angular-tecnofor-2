import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { SugusComponent } from './cmp-input-output/sugus/sugus.component';
import { CmpDarthVaderComponent } from './cmp-input-output/cmp-darth-vader/cmp-darth-vader.component';
import { CmpLeiaComponent } from './cmp-input-output/cmp-leia/cmp-leia.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import { FiltroPipe } from './cmp-pipes/filtro.pipe';
import { CmpDirectivasComponent } from './cmp-directivas/cmp-directivas.component';
import { BlinkDirective } from './cmp-directivas/blink.directive';
import { CmpFormulariosComponent } from './cmp-formularios/cmp-formularios.component';
import { ReactivosComponent } from './cmp-formularios/reactivos/reactivos.component';
import { NormalesComponent } from './cmp-formularios/normales/normales.component';
import { ErrorFormComponent } from './cmp-formularios/error-form/error-form.component';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { CmpHttpComponent } from './cmp-http/cmp-http.component';
import { OfertaComponent } from './cmp-http/oferta/oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpDataBindingComponent,
    CmpInputOutputComponent,
    SugusComponent,
    CmpDarthVaderComponent,
    CmpLeiaComponent,
    CmpPipesComponent,
    FiltroPipe,
    CmpDirectivasComponent,
    BlinkDirective,
    CmpFormulariosComponent,
    ReactivosComponent,
    NormalesComponent,
    ErrorFormComponent,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    CmpObservablesComponent,
    CmpHttpComponent,
    OfertaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
