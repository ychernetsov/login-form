import { Action, createReducer, on } from '@ngrx/store';
import { ReposState } from 'src/app/models/models';
import * as AppActions from '../actions/app.actions';


export const initialState: ReposState = {
  repos: []
};

const reducer = createReducer(
  initialState,
  on(AppActions.fetchReposSuccess, (state, { payload }) => ({ ...state, repos: payload }))
);

export function reposReducer(
  state: ReposState | undefined,
  action: Action
): ReposState {
  return reducer(state, action);
}
