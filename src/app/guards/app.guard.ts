import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AppState } from '../models/models';
import { isLoggedin } from '../store/selectors/selectors';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const { fundId } = route.params;
    return this.store.select(isLoggedin).pipe(
      switchMap((value) => of(value)),
      catchError(() => {
        this.router.navigate(['/auth'])
        return of(false);
      })
    );
  }
}
