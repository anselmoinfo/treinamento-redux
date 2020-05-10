import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent implements OnInit {
  @Output() concluirCompra = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  concluir() {
    this.concluirCompra.emit(true);
  }
}
