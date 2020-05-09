import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VitrineComponent } from './modules/vitrine/vitrine.component';
import { CarrinhoDeComprasComponent } from './modules/carrinho-de-compras/carrinho-de-compras.component';
import { HomeComponent } from './modules/home/home.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [HomeComponent, VitrineComponent, CarrinhoDeComprasComponent],
  imports: [CommonModule, MaterialModule],
})
export class AdminModule {}
