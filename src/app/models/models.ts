export interface AppState {
    isLoggedin: boolean;
    repos: Repo[];
    owners: Owner[];
}

export interface Repo {
    name: string;
    owner: Owner;
}

export interface Owner {
    name: string;
    repo: Repo;
}