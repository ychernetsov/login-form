import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './models/models';
import { loginSuccess } from './store/actions/app.actions';
import { isLoggedin } from './store/selectors/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Test';
  isLoggedIn$: Observable<boolean>
  constructor(private store: Store<AppState>) {
    this.isLoggedIn$ = this.store.pipe(
      select(isLoggedin)
    )
  }
}
