import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PgCadastroAssuntoComponent } from './pg-cadastro-assunto/pg-cadastro-assunto.component';



@NgModule({
  declarations: [
    PgCadastroAssuntoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AssuntoModule { }
