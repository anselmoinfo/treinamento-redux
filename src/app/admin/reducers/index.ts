import {
  createSelector,
  createFeatureSelector,
  Action,
  combineReducers,
} from '@ngrx/store';
import * as fromRoot from '../../reducers/';
import * as fromProduto from './produto.reducer';

export const adminFeatureKey = 'admin';

export interface AdminState {
  [fromProduto.produtoFeatureKey]: fromProduto.State;
}

export interface State extends fromRoot.State {
  [adminFeatureKey]: AdminState;
}

export function reducers(state: AdminState | undefined, action: Action) {
  return combineReducers({
    [fromProduto.produtoFeatureKey]: fromProduto.reducer,
  })(state, action);
}

export const selectProdutoState = createFeatureSelector<State, AdminState>(
  adminFeatureKey
);

export const selectProdutoEntitiesState = createSelector(
  selectProdutoState,
  (state) => state.produto
);

export const selectGetProdutos = createSelector(
  selectProdutoEntitiesState,
  fromProduto.getProdutos
);
