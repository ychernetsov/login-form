import { Injectable, InjectionToken, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ActionCreator, DefaultProjectorFn, MemoizedSelector, select, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { tap } from 'rxjs/operators';
import { Repo } from '../models/models';

interface ResolveAction<T> {
  name: () => TypedAction<string>,
  selector: MemoizedSelector<object, T, DefaultProjectorFn<T>>
}

@Injectable({
  providedIn: 'root',
})
export class AppResolver implements Resolve<null>  {
  static use<T>(action: ResolveAction<T>) {
    return new InjectionToken(
      'APP_RESOLVER',
      {
        factory: () => {
          return new AppResolver(inject(Store), action)
        }
      }
    )
  }
  constructor(private store: Store<unknown>, private action: ResolveAction<unknown>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    return this.store.pipe(
      select(this.action.selector),
      tap((payload: unknown) => {
        if (!payload) this.store.dispatch(this.action.name())
      })
    )
  }
}
