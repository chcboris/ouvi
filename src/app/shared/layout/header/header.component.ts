import { Component, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

// import { Usuario } from '../../models/usuario';
// import { Criptografia } from '../../util/criptografia';
// import { PerfilAcesso } from '../../models/perfilAcesso';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterContentInit{
  //  usuario?: Usuario;
  //  perfilAtual?: PerfilAcesso;

  constructor(private router:Router,  private dialog: MatDialog) { }

  ngAfterContentInit() {
    // let user = sessionStorage.getItem('usuario')
    // if (user) {
    //     this.usuario = JSON.parse(Criptografia.decode(user));
    //     this.perfilAtual = this.usuario?.perfilSimulado ? this.usuario?.perfilSimulado : this.usuario?.perfis[0];
    // }
  }

  menuNavegacao(pagina: string){
    this.router.navigate([pagina]);
  }

  isLogado(){
    return sessionStorage.getItem('usuario') ? true : false;
  }

  logOut(){
    sessionStorage.removeItem('usuario');
    this.router.navigate(['']);
  }

  descricaoUsuarioLogado(){
    // if (this.usuario && this.usuario.servidor && this.usuario.servidor.nome) {
    //   let nome:string = (this.usuario.servidor.nome.length <= 25 ? this.usuario.servidor.nome : this.usuario.servidor.login) ?? "";

    //   return `${nome}  -  ${this.usuario.servidor.lotacao?.sigla} <span class="corMarrom italico">( ${this.usuario.perfilSimulado? this.usuario.perfilSimulado.perfil : this.usuario?.perfis[0]?.perfil} )</span>`;
    // } else {
    //   return '';
    // }
  }

  trocarPerfil() {
    // let ehAdministrador = this.usuario?.perfis.find((p) => p.perfil === 'PRESE-ADMINISTRADOR');
    // if (ehAdministrador) {
    //   this.dialogRef = this.dialog.open(DialogTrocarPerfilComponent, {
    //     width      : '100%',
    //     maxWidth   : '400px',
    //     height     : 'auto',
    //     maxHeight  : '350px',
    //     hasBackdrop: true,
    //     panelClass : 'personal-details-dialog',
    //     data: this.usuario
    //   });

    //   this.dialogRef.afterClosed().subscribe(() => {
    //     let perfilEscolhido: PerfilAcesso = this.dialogRef.componentInstance.perfil;
    //     if (this.usuario && perfilEscolhido) {
    //       this.usuario.perfilSimulado = perfilEscolhido;
    //       sessionStorage.removeItem('usuario');
    //       sessionStorage.setItem("usuario", Criptografia.encode(JSON.stringify(this.usuario)));
    //       this.router.navigate(['']);
    //     }
    //   });
    // }
  }
}
