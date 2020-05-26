import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Produto } from 'src/app/admin/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent {
  @Input() produto: Produto;
  @Output() adicionar = new EventEmitter<Produto>();

  constructor() {}

  add() {
    this.adicionar.emit(this.produto);
  }
}
