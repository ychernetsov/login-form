import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, Repo } from 'src/app/models/models';
import { fetchRepos } from 'src/app/store/actions/app.actions';
import { selectRepos } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReposComponent {
  repos$: Observable<Repo[]>;
  constructor(private store: Store<AppState>) {
    this.repos$ = this.store.pipe(
      select(selectRepos)
    );
   }
}
