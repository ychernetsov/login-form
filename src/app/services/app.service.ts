import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}
}
