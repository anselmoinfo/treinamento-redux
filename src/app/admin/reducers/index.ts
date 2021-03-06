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

export const selectProdutoState = createSelector(
  selectAdminState,
  (state) => state.produto
);

export const selectGetProdutos = createSelector(
  selectProdutoState,
  fromProduto.getProdutos
);

export const selectCarrinhoDeCompraState = createSelector(
  selectAdminState,
  (state) => state.carrinhoDeCompras
);

export const selectCarrinhoDeCompras = createSelector(
  selectCarrinhoDeCompraState,
  fromCarrinhoDeCompras.getCarrinhoDeCompras
);

export const selectProdutosVitrine = createSelector(
  selectGetProdutos,
  selectCarrinhoDeCompras,
  (produtos, carrinho) => {
    return produtos.map((produto) => ({
      ...produto,
      adicionadoAoCarrinho: carrinho.itens.some(
        (item) => item.produto.id === produto.id
      ),
    }));
  }
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

export const selectCarrinhoEstaVazio = createSelector(
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
