import { createReducer, on } from '@ngrx/store';
import { CarrinhoDeCompras } from '../models';
import { CarrinhoDeComprasActions } from '../actions';

export const carrinhoDeComprasFeatureKey = 'carrinhoDeCompras';

export interface State {
  carrinhoDeCompras: CarrinhoDeCompras;
}

export const initialState: State = {
  carrinhoDeCompras: {
    itens: [],
    subTotal: 0,
    desconto: 0,
    total: 0,
  },
};

export const reducer = createReducer(
  initialState,
  on(CarrinhoDeComprasActions.concluirCompraSuccess, (state) => initialState),
  on(
    CarrinhoDeComprasActions.adicionarItem,
    (state, { itemCarrinhoDecompras }) => {
      const carrinhoDeCompras = {
        ...state.carrinhoDeCompras,
        itens: state.carrinhoDeCompras.itens.concat(itemCarrinhoDecompras),
      };
      return {
        ...state,
        carrinhoDeCompras: calculaCarrinho({
          ...state.carrinhoDeCompras,
          itens: state.carrinhoDeCompras.itens.concat(itemCarrinhoDecompras),
        }),
      };
    }
  ),
  on(
    CarrinhoDeComprasActions.removerItem,
    (state, { itemCarrinhoDecompras }) => {
      const carrinhoDeCompras = {
        ...state.carrinhoDeCompras,
        itens: state.carrinhoDeCompras.itens.filter(
          (item) => item.produto.id !== itemCarrinhoDecompras.produto.id
        ),
      };
      return {
        ...state,
        carrinhoDeCompras: calculaCarrinho(carrinhoDeCompras),
      };
    }
  ),
  on(
    CarrinhoDeComprasActions.editarItem,
    (state, { itemCarrinhoDecompras }) => {
      const carrinhoDeCompras = {
        ...state.carrinhoDeCompras,
        itens: state.carrinhoDeCompras.itens.map((item) =>
          item.produto.id === itemCarrinhoDecompras.produto.id
            ? itemCarrinhoDecompras
            : item
        ),
      };
      return {
        ...state,
        carrinhoDeCompras: calculaCarrinho(carrinhoDeCompras),
      };
    }
  )
);

export const getCarrinhoDeCompras = (state: State) => state.carrinhoDeCompras;

function calculaCarrinho(
  carrinhoDeCompras: CarrinhoDeCompras
): CarrinhoDeCompras {
  const itens = carrinhoDeCompras.itens
    .filter((item) => item.qtd > 0)
    .map((item) => {
      return {
        ...item,
        subtotal: item.produto.preco * item.qtd,
      };
    });

  const subTotal = itens.reduce((sum, current) => sum + current.subtotal, 0);

  let desconto = 0;
  let total = 0;
  let percentualDesconto = 0;

  if (subTotal >= 3000) {
    percentualDesconto = 0.15;
  } else if (subTotal >= 2000) {
    percentualDesconto = 0.1;
  } else if (subTotal >= 1000) {
    percentualDesconto = 0.05;
  }

  desconto = subTotal * percentualDesconto;
  total = subTotal - desconto;
  return { itens, subTotal, desconto, total };
}
