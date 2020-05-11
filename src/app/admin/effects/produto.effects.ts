import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { ProdutosActions } from '../actions';
import { ProdutosService } from '../services';
import { MatSnackBar } from '@angular/material/snack-bar';

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
        tap((error) =>
          this.snackBar.open(error.error, 'OK', {
            duration: 3000,
          })
        )
      ),
    { dispatch: false }
  );

  cadastrar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdutosActions.cadastrar),
      exhaustMap(({ produto }) =>
        this.produtosService.cadastraProduto(produto).pipe(
          map((retorno) =>
            ProdutosActions.cadastrarSuccess({ produto: retorno })
          ),
          catchError((error) => of(ProdutosActions.cadastrarFailure({ error })))
        )
      )
    )
  );

  cadastrarSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdutosActions.cadastrarSuccess),
      tap(() =>
        this.snackBar.open('Produto Cadastrado com Sucesso!', 'OK', {
          duration: 3000,
        })
      ),
      map(() => ProdutosActions.listar())
    )
  );

  cadastrarFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProdutosActions.cadastrarFailure),
        tap((error) =>
          this.snackBar.open(error.error, 'OK', {
            duration: 3000,
          })
        )
      ),
    { dispatch: false }
  );

  editar$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdutosActions.editar),
      exhaustMap(({ produto }) =>
        this.produtosService.editaProduto(produto).pipe(
          map((retorno) => ProdutosActions.editarSuccess({ produto: retorno })),
          catchError((error) => of(ProdutosActions.editarFailure({ error })))
        )
      )
    )
  );

  editarSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdutosActions.editarSuccess),
      tap(() =>
        this.snackBar.open('Produto Editado com Sucesso!', 'OK', {
          duration: 3000,
        })
      ),
      map(() => ProdutosActions.listar())
    )
  );

  editarFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProdutosActions.editarFailure),
        tap((error) =>
          this.snackBar.open(error.error, 'OK', {
            duration: 3000,
          })
        )
      ),
    { dispatch: false }
  );

  excluir$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdutosActions.excluir),
      exhaustMap(({ id }) =>
        this.produtosService.excluiProduto(id).pipe(
          map((retorno) => ProdutosActions.excluirSuccess()),
          catchError((error) => of(ProdutosActions.excluirFailure({ error })))
        )
      )
    )
  );

  excluirSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProdutosActions.excluirSuccess),
      tap(() =>
        this.snackBar.open('Produto Excluído com Sucesso!', 'OK', {
          duration: 3000,
        })
      ),
      map(() => ProdutosActions.listar())
    )
  );

  excluirFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProdutosActions.excluirFailure),
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
    private produtosService: ProdutosService,
    private snackBar: MatSnackBar
  ) {}
}
