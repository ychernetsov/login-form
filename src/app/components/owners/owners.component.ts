import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, Owner } from 'src/app/models/models';
import { selectOwners } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnersComponent implements OnInit {
  owners$: Observable<Owner[]>;
  constructor(private store: Store<AppState>) {
    this.owners$ = this.store.pipe(
      select(selectOwners)
    );
  }

  ngOnInit() {
  }

}
