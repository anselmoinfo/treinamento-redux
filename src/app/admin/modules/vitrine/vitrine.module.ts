import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProdutoComponent } from './components';
import { ListagemComponent } from './containers';
import { MaterialModule } from 'src/app/material';
import { VitrineRoutingModule } from './vitrine-routing.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [CardProdutoComponent, ListagemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    VitrineRoutingModule,
    ReactiveComponentModule,
  ],
})
export class VitrineModule {}
