import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchOwners } from '../store/actions/app.actions';
import { AppState } from '../store/reducers/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class OwnersResolver implements Resolve<null>  {
  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.store.dispatch(fetchOwners());
  }
}
