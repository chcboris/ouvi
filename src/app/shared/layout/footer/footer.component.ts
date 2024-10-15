import { Component } from '@angular/core';

import { Constantes } from '../../util/constantes';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  version: string = Constantes.versaoAtual;
  ambiente: string = Constantes.ambiente;

}
