import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Produto } from 'src/app/admin/models';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss'],
})
export class TabelaProdutosComponent {
  @Input() produtos: Produto[];
  @Output() editar = new EventEmitter<Produto>();
  @Output() excluir = new EventEmitter<Produto>();

  ordemColunas = ['img', 'nome', 'preco', 'qtd', 'acoes'];

  constructor() {}

  edita(produto: Produto) {
    this.editar.emit(produto);
  }

  exclui(produto: Produto) {
    this.excluir.emit(produto);
  }
}
