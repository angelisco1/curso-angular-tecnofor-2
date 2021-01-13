import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormCvComponent } from './form-cv/form-cv.component';
import { PreviewCvComponent } from './preview-cv/preview-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    FormCvComponent,
    PreviewCvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
