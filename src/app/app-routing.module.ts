import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgConsultaOcorrenciaComponent } from './modules/ocorrencia/pg-consulta-ocorrencia/pg-consulta-ocorrencia.component';
import { PgCadastroAssuntoComponent } from './modules/assunto/pg-cadastro-assunto/pg-cadastro-assunto.component';
import { PrincipalComponent } from './shared/layout/principal/principal.component';
import { PgCadastroOcorrenciaComponent } from './modules/ocorrencia/pg-cadastro-ocorrencia/pg-cadastro-ocorrencia.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
  },
  {
    path: 'CadastroOcorrencia',
    component: PgCadastroOcorrenciaComponent,
  },
  {
    path: 'ConsultaOcorrencia',
    component: PgConsultaOcorrenciaComponent,
  },
  {
    path: 'CadastroAssunto',
    component: PgCadastroAssuntoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

