import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../../../admin/reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  qtdProdutosCarrinho$ = this.store.pipe(
    select(fromAdmin.selectQtdProdutosCarrinho)
  );

  constructor(private store: Store<fromAdmin.State>) {}
}
