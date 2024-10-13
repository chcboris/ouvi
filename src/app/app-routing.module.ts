import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgConsultaOcorrenciaComponent } from './modules/ocorrencia/pg-consulta-ocorrencia/pg-consulta-ocorrencia.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PgConsultaOcorrenciaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

