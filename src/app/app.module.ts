import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OcorrenciaModule } from './modules/ocorrencia/ocorrencia.module';
import { AssuntoModule } from './modules/assunto/assunto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    OcorrenciaModule,
    AppRoutingModule,
    AssuntoModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
