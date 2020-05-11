import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent {
  @Output() adicionar = new EventEmitter<boolean>();

  constructor() {}

  openModal() {
    this.adicionar.emit(true);
  }
}
