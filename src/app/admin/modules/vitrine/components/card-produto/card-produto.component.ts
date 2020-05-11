import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/admin/models';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent {
  @Input() produto: Produto;
  @Input() jaAdicionado: boolean;
  @Output() adicionar = new EventEmitter<Produto>();

  constructor() {}

  add() {
    if (!this.jaAdicionado) {
      this.adicionar.emit(this.produto);
    }
  }
}
