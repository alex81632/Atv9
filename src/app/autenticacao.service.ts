import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private usuarioAutenticado: boolean = false;

  autenticarUsuario(): void {
    this.usuarioAutenticado = true;
  }

  desautenticarUsuario(): void {
    this.usuarioAutenticado = false;
  }

  estaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}