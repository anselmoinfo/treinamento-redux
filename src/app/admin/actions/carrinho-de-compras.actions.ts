import { createAction, props } from '@ngrx/store';
import { ItemCarrinhoDeCompras } from '../models';

export const adicionarItem = createAction(
  '[Carrinho de Compras] Adicionar Item',
  props<{ itemCarrinhoDecompras: ItemCarrinhoDeCompras }>()
);

export const removerItem = createAction(
  '[Carrinho de Compras] Remover Item',
  props<{ itemCarrinhoDecompras: ItemCarrinhoDeCompras }>()
);

export const editarItem = createAction(
  '[Carrinho de Compras] Editar Item',
  props<{ itemCarrinhoDecompras: ItemCarrinhoDeCompras }>()
);

export const concluirCompra = createAction(
  '[Carrinho de Compras] Concluir Compra'
);

export const concluirCompraSuccess = createAction(
  '[Carrinho de Compras] Concluir Compra Success'
);

export const concluirCompraFailure = createAction(
  '[Carrinho de Compras] Concluir Compra Failure',
  props<{ error: string }>()
);
