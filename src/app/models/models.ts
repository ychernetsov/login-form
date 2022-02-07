export interface AppState {
    auth: AuthState;
    repos: ReposState;
    owners: OwnersState;
}

export interface Repo {
    name: string;
    owner: Owner;
    id: number;
}

export interface Owner {
    name: string;
    repo: Repo;
}

export interface  AuthState {
    isLoggedin: boolean;
}

export interface  ReposState {
    repos: Repo[];
}

export interface  OwnersState {
    owners: Owner[];
}