import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner, Repo } from '../models/models';


@Injectable()
export class AppService {
  baseUrl = 'https://api.github.com/';
  headers = new HttpHeaders().set("Accept", "application/vnd.github.v3+json");
  constructor(private http: HttpClient) {}

  getRepos() {
    return this.http.get<Repo[]>(`${this.baseUrl}repositories`, {headers: this.headers});
  }

  getOwners() {
    return this.http.get<Owner[]>(`${this.baseUrl}users`, {headers: this.headers});
  }
}
