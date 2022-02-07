import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, Owner, OwnersState, Repo, ReposState } from 'src/app/models/models';

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectReposState = createFeatureSelector<AppState>('repos');
export const selectOwnersState = createFeatureSelector<AppState>('owners');

export interface AppState {
  isLoggedin: boolean;
  repos: Repo[];
  owners: Owner[];
}

export const selectRepos = createSelector(
  selectReposState,
  (state: ReposState) => { 
      return state.repos;
  }
);

export const selectRepo = (id: number) => createSelector(
    selectRepos,
  (repos: Repo[]) => { 
      return repos.find((repo: Repo) => repo.id === id);
  }
);

export const selectOwners = createSelector(
    selectOwnersState,
  (state: OwnersState) => { 
      return state.owners;
  }
);

export const isLoggedin = createSelector(
    selectAuthState,
  (state: AuthState) => { 
      return state.isLoggedin;
  }
);
