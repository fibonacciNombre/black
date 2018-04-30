import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { Response } from  '@angular/http';

import { Archive } from './archive';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = "http://localhost:8080/api";

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getAllTodos(): Observable<Archive[]> {
    return this.http
      .get(API_URL + '/all')
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
 
}