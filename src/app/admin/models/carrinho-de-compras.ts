import { ItemCarrinhoDeCompras } from './';

export interface CarrinhoDeCompras {
  itens: ItemCarrinhoDeCompras[];
  subTotal: number;
  desconto: number;
  total: number;
}
