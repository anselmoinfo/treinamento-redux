import {
  createSelector,
  createFeatureSelector,
  Action,
  combineReducers,
} from '@ngrx/store';
import * as fromRoot from '../../reducers/';
import * as fromProduto from './produto.reducer';
import * as fromCarrinhoDeCompras from './carrinho-de-compras.reducer';

export const adminFeatureKey = 'admin';

export interface AdminState {
  [fromProduto.produtoFeatureKey]: fromProduto.State;
  [fromCarrinhoDeCompras.carrinhoDeComprasFeatureKey]: fromCarrinhoDeCompras.State;
}

export interface State extends fromRoot.State {
  [adminFeatureKey]: AdminState;
}

export function reducers(state: AdminState | undefined, action: Action) {
  return combineReducers({
    [fromProduto.produtoFeatureKey]: fromProduto.reducer,
    [fromCarrinhoDeCompras.carrinhoDeComprasFeatureKey]:
      fromCarrinhoDeCompras.reducer,
  })(state, action);
}

export const selectAdminState = createFeatureSelector<State, AdminState>(
  adminFeatureKey
);

export const selectProdutoEntitiesState = createSelector(
  selectAdminState,
  (state) => state.produto
);

export const selectGetProdutos = createSelector(
  selectProdutoEntitiesState,
  fromProduto.getProdutos
);

export const selectCarrinhoDeCompraEntitiesState = createSelector(
  selectAdminState,
  (state) => state.carrinhoDeCompras
);

export const selectCarrinhoDeCompras = createSelector(
  selectCarrinhoDeCompraEntitiesState,
  fromCarrinhoDeCompras.getCarrinhoDeCompras
);

export const selectQtdProdutosCarrinho = createSelector(
  selectCarrinhoDeCompras,
  (carrinhoDeCompras) => {
    return carrinhoDeCompras.itens.reduce(
      (sum, current) => sum + current.qtd,
      0
    );
  }
);

export const produtoJaAdicionado = createSelector(
  selectCarrinhoDeCompras,
  (carrinho, props) => {
    return (
      carrinho.itens.filter((item) => item.produto.id === props.id).length > 0
    );
  }
);

export const carrinhoEstaVazio = createSelector(
  selectCarrinhoDeCompras,
  (carrinho) => {
    return carrinho.itens.length === 0;
  }
);

export const selectDescontoCalculado = createSelector(
  selectCarrinhoDeCompras,
  (carrinho) => {
    return carrinho.desconto;
  }
);
