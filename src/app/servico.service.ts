import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  obterDados(): string {
    return 'Dados do serviço injetado';
  }
}
