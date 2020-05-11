import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './containers';
import { CadastroDeProdutosRoutingModule } from './cadastro-de-produtos-routing.module';
import { MaterialModule } from 'src/app/material';
import {
  AcoesComponent,
  TabelaProdutosComponent,
  ModalCadastroProdutoComponent,
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListagemComponent,
    TabelaProdutosComponent,
    ModalCadastroProdutoComponent,
    AcoesComponent,
  ],
  imports: [
    CommonModule,
    CadastroDeProdutosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CadastroDeProdutosModule {}
