import { Action, createAction, props, union } from '@ngrx/store';
import { Owner, Repo } from 'src/app/models/models';

export const loginSuccess = createAction(
    '[Login] Login Success'
);

export const fetchRepos = createAction(
    '[Repos] Fetch Repos'
);

export const fetchReposSuccess = createAction(
    '[Repos] Fetch Repos Success',
    props<{ payload: Repo[] }>()
);

export const fetchOwners = createAction(
    '[Owners] Fetch Owners'
);

export const fetchOwnersSuccess = createAction(
    '[Owners] Fetch Owners Success',
    props<{ payload: Owner[] }>()
);

export const logout = createAction(
    '[Logout] Logout'
);

const AppActions = union({
    fetchRepos,
    fetchReposSuccess,
    fetchOwners,
    fetchOwnersSuccess,
    loginSuccess,
    logout
});

export type ActionsUnion = typeof AppActions;

