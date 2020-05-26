import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../../../../reducers/';
import { ProdutosActions, CarrinhoDeComprasActions } from '../../../../actions';
import { Produto } from 'src/app/admin/models';
import { state } from '@angular/animations';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  produtos$ = this.store.pipe(select(fromAdmin.selectGetProdutos));

  constructor(private store: Store<fromAdmin.State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProdutosActions.listar());
  }

  produtoJaAdicionado$(produto: Produto): Observable<boolean> {
    return this.store.pipe(
      select(fromAdmin.selectProdutoJaAdicionado, { id: produto.id })
    );
  }

  adicionar(produto: Produto) {
    this.store.dispatch(
      CarrinhoDeComprasActions.adicionarItem({
        itemCarrinhoDecompras: {
          produto,
          qtd: 1,
        },
      })
    );
  }
}
