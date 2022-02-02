import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Repo } from 'src/app/models/models';
import { AppState } from '../reducers/app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectRepos = createSelector(
    selectAppState,
  (state: AppState) => { 
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
    selectAppState,
  (state: AppState) => { 
      return state.owners;
  }
);

export const isLoggedin = createSelector(
    selectAppState,
  (state: AppState) => { 
      return state.isLoggedin;
  }
);
