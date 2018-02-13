import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Registro } from './registro';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()

export class CittService {

  private registroUrl = 'http://localhost:3005/api';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getRegistros (): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.registroUrl)
      .pipe(
        tap(registros => this.log('fetcheds registros')),
        catchError(this.handleError('getRegistros', []))
      );
  }

   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
