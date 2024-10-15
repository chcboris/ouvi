import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PrincipalComponent } from './layout/principal/principal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PrincipalComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[   
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    PrincipalComponent
  ]
})
export class SharedModule { }
