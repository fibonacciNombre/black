import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Archive } from './archive';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = "http://localhost:8080/api";

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllTodos(): Observable<Archive[]> {
    return this.http
      .get(API_URL + '/all')
      .map(response => {
        const todos = response.json();
        return todos.map((todo) => new Archive(todo));
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
 
}