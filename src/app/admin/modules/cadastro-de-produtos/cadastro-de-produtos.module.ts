import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './containers';
import { CadastroDeProdutosRoutingModule } from './cadastro-de-produtos-routing.module';
import { MaterialModule } from 'src/app/material';
import { TabelaProdutosComponent } from './components';

@NgModule({
  declarations: [ListagemComponent, TabelaProdutosComponent],
  imports: [CommonModule, CadastroDeProdutosRoutingModule, MaterialModule],
})
export class CadastroDeProdutosModule {}
