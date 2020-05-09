import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Produto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(private httpClient: HttpClient) {}

  listaProdutos(): Observable<Produto[]> {
    return this.httpClient
      .get<Produto[]>(`${environment.APIUrl}/produtos`)
      .pipe(
        catchError((e) => {
          throw new Error(e.error.message);
        })
      );
  }

  cadastraProduto(produto: Produto): Observable<Produto> {
    return this.httpClient
      .post<Produto>(`${environment.APIUrl}/produtos`, produto)
      .pipe(
        catchError((e) => {
          throw new Error(e.error.message);
        })
      );
  }

  editaProduto(produto: Produto): Observable<Produto> {
    return this.httpClient
      .put<Produto>(`${environment.APIUrl}/produtos`, produto)
      .pipe(
        catchError((e) => {
          throw new Error(e.error.message);
        })
      );
  }

  deletaProduto(id: number): Observable<{}> {
    return this.httpClient
      .delete<Produto>(`${environment.APIUrl}/produtos/${id}`)
      .pipe(
        catchError((e) => {
          throw new Error(e.error.message);
        })
      );
  }
}
