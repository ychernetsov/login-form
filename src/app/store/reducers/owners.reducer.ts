import { Action, createReducer, on } from '@ngrx/store';
import { OwnersState } from 'src/app/models/models';
import * as AppActions from '../actions/app.actions';


export const initialState: OwnersState = {
  owners: []
};

const reducer = createReducer(
  initialState,
  on(AppActions.fetchOwnersSuccess, (state, { payload }) => ({ ...state, owners: payload }))
);

export function ownersReducer(
  state: OwnersState | undefined,
  action: Action
): OwnersState {
  return reducer(state, action);
}
