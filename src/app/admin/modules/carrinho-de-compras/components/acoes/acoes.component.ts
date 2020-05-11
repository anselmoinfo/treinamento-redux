import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent {
  @Output() concluirCompra = new EventEmitter<boolean>();

  constructor() {}

  concluir() {
    this.concluirCompra.emit(true);
  }
}
