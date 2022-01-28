import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app.reducer';

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectRepos = createSelector(
    selectAppState,
  (state: AppState) => { 
      return state.repos;
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
