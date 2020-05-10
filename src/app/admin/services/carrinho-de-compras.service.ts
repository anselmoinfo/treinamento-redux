import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarrinhoDeCompras, Produto } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoDeComprasService {
  constructor(private http: HttpClient) {}

  concluirCompra(carrinhoDeCompras: CarrinhoDeCompras): Observable<Produto> {
    return this.http
      .post<Produto>(`${environment.APIUrl}/compras`, carrinhoDeCompras)
      .pipe(
        catchError((e) => {
          throw new Error(e.message);
        })
      );
  }
}
