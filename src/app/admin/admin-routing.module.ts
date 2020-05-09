import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  VitrineComponent,
  CarrinhoDeComprasComponent,
} from './modules';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'vitrine',
    component: VitrineComponent,
  },
  {
    path: 'carrinho',
    component: CarrinhoDeComprasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
