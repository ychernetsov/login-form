import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, Repo } from 'src/app/models/models';
import { selectRepo } from 'src/app/store/selectors/selectors';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.scss']
})
export class RepoDetailsComponent implements OnInit {
  repo$: Observable<Repo>;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { 
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = +((params  as any).params.id);
      this.repo$ = this.store.pipe(
        select(selectRepo(id))
      )
    });
  }

}
