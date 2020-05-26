import { createReducer, on } from '@ngrx/store';
import { Produto } from '../models';
import { ProdutosActions } from '../actions';

export const produtoFeatureKey = 'produto';

export interface State {
  produtos: Produto[];
}

export const initialState: State = {
  produtos: [],
};

export const reducer = createReducer(
  initialState,
  on(ProdutosActions.listarSuccess, (state, { produtos }) => ({
    ...state,
    produtos,
  }))
);

export const getProdutos = (state: State) => state.produtos;
