import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../../../../reducers/';
import { ProdutosActions, CarrinhoDeComprasActions } from '../../../../actions';
import { Produto } from 'src/app/admin/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  constructor(private store: Store<fromAdmin.State>) {}
  produtos$ = this.store.pipe(select(fromAdmin.selectProdutosVitrine));

  ngOnInit(): void {
    this.store.dispatch(ProdutosActions.listar());
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
