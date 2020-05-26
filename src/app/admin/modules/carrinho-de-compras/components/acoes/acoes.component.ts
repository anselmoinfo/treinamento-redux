import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent {
  @Output() concluirCompra = new EventEmitter<boolean>();

  constructor() {}

  concluir() {
    this.concluirCompra.emit(true);
  }
}
