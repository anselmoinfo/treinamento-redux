import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules').then((m) => m.HomeModule),
  },
  {
    path: 'vitrine',
    loadChildren: () => import('./modules').then((m) => m.VitrineModule),
  },
  {
    path: 'carrinho',
    loadChildren: () =>
      import('./modules').then((m) => m.CarrinhoDeComprasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
