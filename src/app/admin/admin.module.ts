import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProdutoEffects, CarrinhoDeComprasEffects } from './effects';
import * as fromAdmin from './reducers';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material';
import { VitrineModule } from './modules';
import { CarrinhoDeComprasModule } from './modules/carrinho-de-compras/carrinho-de-compras.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducers),
    EffectsModule.forFeature([ProdutoEffects, CarrinhoDeComprasEffects]),
    VitrineModule,
    CarrinhoDeComprasModule,
    HomeModule,
  ],
})
export class AdminModule {}
