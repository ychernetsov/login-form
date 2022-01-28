import { Action, createReducer, on } from '@ngrx/store';
import { Owner, Repo } from 'src/app/models/models';
import * as AppActions from '../actions/app.actions';

export interface AppState {
    isLoggedin: boolean;
    repos: Repo[];
    owners: Owner[];
}


export const initialState: AppState = {
  isLoggedin: false,
  repos: [],
  owners: []
};

const reducer = createReducer(
  initialState,
  on(AppActions.loginSuccess, (state) => ({ ...state, isLoggedin: true })),
  on(AppActions.fetchReposSuccess, (state, { payload }) => ({ ...state, repos: payload })),
  on(AppActions.fetchOwnersSuccess, (state, { payload }) => ({ ...state, owners: payload })),
);

export function someReducer(
  state: AppState | undefined,
  action: Action
): AppState {
  return reducer(state, action);
}
