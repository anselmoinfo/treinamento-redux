import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  catchError,
  exhaustMap,
  map,
  tap,
  withLatestFrom,
  flatMap,
} from 'rxjs/operators';
import { CarrinhoDeComprasActions } from '../actions';
import { CarrinhoDeComprasService } from '../services';
import * as fromAdmin from '../reducers';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CarrinhoDeComprasEffects {
  concluirCompra$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarrinhoDeComprasActions.concluirCompra),
      withLatestFrom(
        this.store.pipe(select(fromAdmin.selectCarrinhoDeCompras))
      ),
      exhaustMap(([action, carrinhoDeCompras]) =>
        this.carrinhoDeComprasService.concluirCompra(carrinhoDeCompras).pipe(
          map(() => CarrinhoDeComprasActions.concluirCompraSuccess()),
          catchError((error) =>
            of(CarrinhoDeComprasActions.concluirCompraFailure({ error }))
          )
        )
      )
    )
  );

  concluirCompraSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CarrinhoDeComprasActions.concluirCompraSuccess),
        tap(() =>
          this.snackBar.open('Compra Concluída com Sucesso!', 'OK', {
            duration: 3000,
          })
        )
      ),
    { dispatch: false }
  );

  concluirCompraFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CarrinhoDeComprasActions.concluirCompraFailure),
        tap((error) =>
          this.snackBar.open(error.error, 'OK', {
            duration: 3000,
          })
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private carrinhoDeComprasService: CarrinhoDeComprasService,
    private store: Store<fromAdmin.State>,
    private snackBar: MatSnackBar
  ) {}
}
