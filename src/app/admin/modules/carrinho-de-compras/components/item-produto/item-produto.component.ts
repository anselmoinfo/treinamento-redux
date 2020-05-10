import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemCarrinhoDeCompras } from 'src/app/admin/models';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.scss'],
})
export class ItemProdutoComponent implements OnInit {
  @Input() item: ItemCarrinhoDeCompras;
  @Output() alterar = new EventEmitter<ItemCarrinhoDeCompras>();

  constructor() {}

  ngOnInit(): void {}

  altera(qtd: number) {
    this.alterar.emit({
      ...this.item,
      qtd: this.item.qtd + qtd,
    });
  }
}
