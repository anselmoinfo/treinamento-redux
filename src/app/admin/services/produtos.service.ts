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
  constructor(private http: HttpClient) {}

  listaProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${environment.APIUrl}/produtos`).pipe(
      catchError((e) => {
        throw new Error(e.message);
      })
    );
  }

  cadastraProduto(produto: Produto): Observable<Produto> {
    return this.http
      .post<Produto>(`${environment.APIUrl}/produtos`, produto)
      .pipe(
        catchError((e) => {
          throw new Error(e.message);
        })
      );
  }

  editaProduto(produto: Produto): Observable<Produto> {
    return this.http
      .put<Produto>(`${environment.APIUrl}/produtos/${produto.id}`, produto)
      .pipe(
        catchError((e) => {
          throw new Error(e.message);
        })
      );
  }

  excluiProduto(id: number): Observable<{}> {
    return this.http
      .delete<Produto>(`${environment.APIUrl}/produtos/${id}`)
      .pipe(
        catchError((e) => {
          throw new Error(e.message);
        })
      );
  }
}
