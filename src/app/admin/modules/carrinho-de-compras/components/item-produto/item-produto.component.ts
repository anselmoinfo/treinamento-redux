import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ItemCarrinhoDeCompras } from 'src/app/admin/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.scss'],
})
export class ItemProdutoComponent {
  @Input() item: ItemCarrinhoDeCompras;
  @Output() alterar = new EventEmitter<ItemCarrinhoDeCompras>();

  constructor() {}

  altera(qtd: number) {
    this.alterar.emit({
      ...this.item,
      qtd: this.item.qtd + qtd,
    });
  }
}
