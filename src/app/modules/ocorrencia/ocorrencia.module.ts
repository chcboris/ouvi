import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PgCadastroOcorrenciaComponent } from './pg-cadastro-ocorrencia/pg-cadastro-ocorrencia.component';



@NgModule({
   declarations: [
     PgCadastroOcorrenciaComponent
   ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class OcorrenciaModule { }
