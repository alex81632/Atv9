import { Component } from '@angular/core';
import { AutenticacaoService } from '../autenticacao.service';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrls: ['./autenticacao.component.css']
})
export class AutenticacaoComponent {
  public usuarioAutenticado: boolean = false;

  public message: string = 'Usuário não autenticado';

  constructor(private autenticacaoService: AutenticacaoService) { }

  autenticarUsuario(): void {
    this.autenticacaoService.autenticarUsuario();
    this.usuarioAutenticado = this.autenticacaoService.estaAutenticado();
    this.estaAutenticado();
  }

  desautenticarUsuario(): void {
    this.autenticacaoService.desautenticarUsuario();
    this.usuarioAutenticado = this.autenticacaoService.estaAutenticado();
    this.estaAutenticado();
  }

  estaAutenticado(): void {
    if (this.usuarioAutenticado) {
      this.message = 'Usuário autenticado';
      return;
    }
    this.message = 'Usuário não autenticado';
  }

}
