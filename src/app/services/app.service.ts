import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Owner, Repo } from '../models/models';

const CACHE_SIZE = 1;

@Injectable()
export class AppService {
  baseUrl = 'https://api.github.com/';
  headers = new HttpHeaders().set("Accept", "application/vnd.github.v3+json");
  constructor(private http: HttpClient) {}

  private reposCache$: Observable<Repo[]>;
  private ownersCache$: Observable<Owner[]>;

  getRepos() {
    if(!this.reposCache$) {
      this.reposCache$ = this.fetchRepos().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.reposCache$;
  }
  
  getOwners() {
    if(!this.ownersCache$) {
      this.ownersCache$ = this.fetchOwners().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.ownersCache$;
  }

  fetchRepos() {
    return this.http.get<Repo[]>(`${this.baseUrl}repositories`, {headers: this.headers});
  }

  fetchOwners() {
    return this.http.get<Owner[]>(`${this.baseUrl}users`, {headers: this.headers});
  }
}
