import { createAction, props } from '@ngrx/store';
import { Produto } from '../models';

export const listar = createAction('[Produtos] Listar');

export const listarSuccess = createAction(
  '[Produtos] Listar Success',
  props<{ produtos: Produto[] }>()
);

export const listarFailure = createAction(
  '[Produtos] Listar Failure',
  props<{ error: string }>()
);
