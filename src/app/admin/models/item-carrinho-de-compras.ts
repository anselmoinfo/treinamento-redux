import { Produto } from './';

export interface ItemCarrinhoDeCompras {
  produto: Produto;
  subtotal?: number;
  qtd: number;
}
