import { Component, OnInit, Input } from '@angular/core';
import { CarrinhoDeCompras } from 'src/app/admin/models';

@Component({
  selector: 'app-totalizador',
  templateUrl: './totalizador.component.html',
  styleUrls: ['./totalizador.component.scss'],
})
export class TotalizadorComponent {
  @Input() carrinhoDeCompras: CarrinhoDeCompras;

  constructor() {}
}
