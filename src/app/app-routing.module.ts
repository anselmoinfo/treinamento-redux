import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './admin/modules/home/home.component';
import { VitrineComponent } from './admin/modules/vitrine/vitrine.component';
import { CarrinhoDeComprasComponent } from './admin/modules/carrinho-de-compras/carrinho-de-compras.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
