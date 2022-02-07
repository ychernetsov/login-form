import { Action, createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/models/models';
import * as AppActions from '../actions/app.actions';


export const initialState: AuthState = {
  isLoggedin: false
};

const reducer = createReducer(
  initialState,
  on(AppActions.loginSuccess, (state) => ({ ...state, isLoggedin: true })),
  on(AppActions.logout, (state) => ({ ...state, isLoggedin: false }))
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}
