import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CmpDataBindingComponent } from './cmp-data-binding/cmp-data-binding.component';
import { CmpInputOutputComponent } from './cmp-input-output/cmp-input-output.component';
import { SugusComponent } from './cmp-input-output/sugus/sugus.component';
import { CmpDarthVaderComponent } from './cmp-input-output/cmp-darth-vader/cmp-darth-vader.component';
import { CmpLeiaComponent } from './cmp-input-output/cmp-leia/cmp-leia.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpDataBindingComponent,
    CmpInputOutputComponent,
    SugusComponent,
    CmpDarthVaderComponent,
    CmpLeiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
