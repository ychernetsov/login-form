import { ActionReducerMap } from '@ngrx/store'
import { AppState } from '../models/models'
import { authReducer } from './reducers/auth.reducer'
import { ownersReducer } from './reducers/owners.reducer'
import { reposReducer } from './reducers/repos.reducer'

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  repos: reposReducer,
  owners: ownersReducer
}