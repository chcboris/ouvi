import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PgCadastroOcorrenciaComponent } from "./modules/ocorrencia/pg-cadastro-ocorrencia/pg-cadastro-ocorrencia.component";

@Component({
  selector: 'app-root',
//  standalone: true,
//  imports: [CommonModule, RouterOutlet, PgCadastroOcorrenciaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ouvi';
}
