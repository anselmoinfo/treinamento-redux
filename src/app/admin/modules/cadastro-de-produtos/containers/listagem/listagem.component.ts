import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromAdmin from '../../../../reducers/';
import { ProdutosActions, CarrinhoDeComprasActions } from '../../../../actions';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastroProdutoComponent } from '../../components';
import { Produto } from 'src/app/admin/models';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss'],
})
export class ListagemComponent implements OnInit {
  produtos$ = this.store.pipe(select(fromAdmin.selectGetProdutos));

  constructor(
    private store: Store<fromAdmin.State>,
    public dialog: MatDialog
  ) {}

  openModal(data?: Produto): void {
    const dialogRef = this.dialog.open(ModalCadastroProdutoComponent, {
      width: '250px',
      data,
    });

    dialogRef.afterClosed().subscribe((produto: Produto) => {
      if (produto?.id) {
        this.store.dispatch(ProdutosActions.editar({ produto }));
      } else if (produto) {
        this.store.dispatch(ProdutosActions.cadastrar({ produto }));
      }
    });
  }

  deletar(produto: Produto) {
    this.store.dispatch(ProdutosActions.deletar({ id: produto.id }));
  }

  ngOnInit(): void {
    this.store.dispatch(ProdutosActions.listar());
  }
}
