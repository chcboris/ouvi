import { Component } from '@angular/core';
import { Constantes } from './shared/util/constantes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ouvi';
  enderecoFundo:string = '';
    backgroundImage(){
    this.enderecoFundo = Constantes.imagePath + 'magie.jpg';
    return {'background-image': 'url(' + this.enderecoFundo + ')'}
   }
}
