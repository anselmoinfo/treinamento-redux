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

export const cadastrar = createAction(
  '[Produtos] Cadastrar',
  props<{ produto: Produto }>()
);

export const cadastrarSuccess = createAction(
  '[Produtos] Cadastrar Success',
  props<{ produto: Produto }>()
);

export const cadastrarFailure = createAction(
  '[Produtos] Cadastrar Failure',
  props<{ error: string }>()
);

export const editar = createAction(
  '[Produtos] Editar',
  props<{ produto: Produto }>()
);

export const editarSuccess = createAction(
  '[Produtos] Editar Success',
  props<{ produto: Produto }>()
);

export const editarFailure = createAction(
  '[Produtos] Editar Failure',
  props<{ error: string }>()
);

export const deletar = createAction(
  '[Produtos] Deletar',
  props<{ id: number }>()
);

export const deletarSuccess = createAction('[Produtos] Deletar Success');

export const deletarFailure = createAction(
  '[Produtos] Deletar Failure',
  props<{ error: string }>()
);
