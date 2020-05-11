import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss'],
})
export class AcoesComponent implements OnInit {
  @Output() adicionar = new EventEmitter<boolean>();

  constructor() {}

  openModal() {
    this.adicionar.emit(true);
  }

  ngOnInit(): void {}
}