import { Injectable } from '@angular/core';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Owner, Repo } from 'src/app/models/models';
import { AppService } from 'src/app/services/app.service';
import { fetchOwners, fetchOwnersSuccess, fetchRepos, fetchReposSuccess } from '../actions/app.actions';




@Injectable()
export class AppEffects {
  fetchRepos = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchRepos),
        mergeMap(() =>
          this.appService.getRepos().pipe(
            map((repos: Repo[]) => fetchReposSuccess({ payload: repos }))
          )
        )
      ),
    { dispatch: true }
  );

  fetchOwners = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchOwners),
        mergeMap(() =>
          this.appService.getOwners().pipe(
            map((owners: Owner[]) => fetchOwnersSuccess({ payload: owners }))
          )
        )
      ),
    { dispatch: true }
  );

  constructor(
    private actions$: Actions,
    private appService: AppService
  ) {}
}
