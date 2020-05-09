import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrineComponent } from './modules/vitrine/vitrine.component';
import { CarrinhoDeComprasComponent } from './modules/carrinho-de-compras/carrinho-de-compras.component';
import { HomeComponent } from './modules/home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProdutoEffects } from './effects';
import * as fromAdmin from './reducers';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [HomeComponent, VitrineComponent, CarrinhoDeComprasComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducers),
    EffectsModule.forFeature([ProdutoEffects]),
  ],
})
export class AdminModule {}
