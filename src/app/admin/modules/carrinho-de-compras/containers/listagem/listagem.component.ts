import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromAdmin from '../../../../reducers/';
import { CarrinhoDeComprasActions } from '../../../../actions';
import { ItemCarrinhoDeCompras } from 'src/app/admin/models';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent {
  carrinhoDeCompras$ = this.store.pipe(
    select(fromAdmin.selectCarrinhoDeCompras)
  );

  carrinhoEstaVazio$ = this.store.pipe(
    select(fromAdmin.selectCarrinhoEstaVazio)
  );

  constructor(private store: Store<fromAdmin.State>) {}

  alterar(itemCarrinhoDecompras: ItemCarrinhoDeCompras) {
    this.store.dispatch(
      CarrinhoDeComprasActions.editarItem({ itemCarrinhoDecompras })
    );
  }
  concluirCompra() {
    this.store.dispatch(CarrinhoDeComprasActions.concluirCompra());
  }
}
