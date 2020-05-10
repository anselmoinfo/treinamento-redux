import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './containers/listagem/listagem.component';
import { CarrinhoDeComprasRoutingModule } from './carrinho-de-compras-routing.module';
import { MaterialModule } from 'src/app/material';
import {
  ItemProdutoComponent,
  TotalizadorComponent,
  AcoesComponent,
} from './components';

@NgModule({
  declarations: [
    ListagemComponent,
    ItemProdutoComponent,
    TotalizadorComponent,
    AcoesComponent,
  ],
  imports: [CommonModule, MaterialModule, CarrinhoDeComprasRoutingModule],
})
export class CarrinhoDeComprasModule {}
