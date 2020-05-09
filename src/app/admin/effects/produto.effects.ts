import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { ProdutosActions } from '../actions';
import { ProdutosService } from '../services/produtos.service';

@Injectable()
export class ProdutoEffects {
  listar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdutosActions.listar),
      exhaustMap(() =>
        this.produtosService.listaProdutos().pipe(
          map((produtos) => ProdutosActions.listarSuccess({ produtos })),
          catchError((error) => of(ProdutosActions.listarFailure({ error })))
        )
      )
    )
  );

  listarFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProdutosActions.listarFailure),
        tap((error) => alert(error.error))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private produtosService: ProdutosService
  ) {}
}
