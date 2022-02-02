import { Injectable, InjectionToken, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ActionCreator, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { fetchRepos } from '../store/actions/app.actions';
import { AppState } from '../store/reducers/app.reducer';

interface ResolveAction {
  name: () => TypedAction<string>
}

@Injectable({
  providedIn: 'root',
})
export class AppResolver implements Resolve<null>  {
  static use(action: ResolveAction) {
    return new InjectionToken(
      'APP_RESOLVER',
      {
        factory: () => {
          return new AppResolver(inject(Store), action)
        }
      }
    )
  }
  constructor(private store: Store<unknown>, private action: ResolveAction) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.store.dispatch(this.action.name());
  }
}
