import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';

@Component({
  selector: 'app-componente',
  templateUrl: './componente.component.html',
  styleUrls: ['./componente.component.css']
})
export class ComponenteComponent implements OnInit {
  dadosDoServico: string;

  constructor(private servico: ServicoService) {
    this.dadosDoServico = '';
  }

  ngOnInit() {
    this.dadosDoServico = this.servico.obterDados();
  }

}
