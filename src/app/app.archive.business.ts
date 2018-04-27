import { Injectable } from '@angular/core';
import { Archive } from './archive';
import { ApiService } from './app.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ArchiveBusiness {

    constructor(
        private api: ApiService
    ) {
    }
    
   
  getAllTodos(): Observable<Archive[]> {
    return this.api.getAllTodos();
  }
}