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

@Injectable()
export class CarrinhoDeComprasEffects {
  concluirCompra$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CarrinhoDeComprasActions.concluirCompra),
      withLatestFrom(
        this.store.pipe(select(fromAdmin.selectCarrinhoDeCompras))
      ),
      flatMap(([action, carrinhoDeCompras]) =>
        this.carrinhoDeComprasService.concluirCompra(carrinhoDeCompras).pipe(
          map(() => CarrinhoDeComprasActions.concluirCompraSuccess()),
          catchError((error) =>
            of(CarrinhoDeComprasActions.concluirCompraFailure({ error }))
          )
        )
      )
    )
  );

  concluirCompraFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CarrinhoDeComprasActions.concluirCompraFailure),
        tap((error) => alert(error.error))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private carrinhoDeComprasService: CarrinhoDeComprasService,
    private store: Store<fromAdmin.State>
  ) {}
}
