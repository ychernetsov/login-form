export interface AppState {
    isLoggedin: boolean;
    repos: Repo[];
    owners: Owner[];
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