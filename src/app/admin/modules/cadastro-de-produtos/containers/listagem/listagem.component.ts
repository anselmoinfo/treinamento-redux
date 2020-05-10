import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../../../../reducers/';
import { ProdutosActions, CarrinhoDeComprasActions } from '../../../../actions';

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
}
