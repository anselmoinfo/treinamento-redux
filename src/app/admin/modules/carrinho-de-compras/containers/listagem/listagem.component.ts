import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromAdmin from '../../../../reducers/';
import { CarrinhoDeComprasActions } from '../../../../actions';
import { ItemCarrinhoDeCompras } from 'src/app/admin/models';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  carrinhoDeCompras$ = this.store.pipe(
    select(fromAdmin.selectCarrinhoDeCompras)
  );

  carrinhoEstaVazio$ = this.store.pipe(select(fromAdmin.carrinhoEstaVazio));

  constructor(private store: Store<fromAdmin.State>) {}

  ngOnInit(): void {}

  alterar(itemCarrinhoDecompras: ItemCarrinhoDeCompras) {
    this.store.dispatch(
      CarrinhoDeComprasActions.editarItem({ itemCarrinhoDecompras })
    );
  }
  concluirCompra() {
    this.store.dispatch(CarrinhoDeComprasActions.concluirCompra());
  }
}
