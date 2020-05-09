import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../../reducers/';
import { ProdutosActions } from '../../actions';

@Component({
  selector: 'app-vitrine',
  templateUrl: './vitrine.component.html',
  styleUrls: ['./vitrine.component.scss'],
})
export class VitrineComponent implements OnInit {
  produtos$ = this.store.pipe(select(fromAdmin.selectGetProdutos));

  constructor(private store: Store<fromAdmin.State>) {}

  ngOnInit(): void {
    this.store.dispatch(ProdutosActions.listar());
  }
}
