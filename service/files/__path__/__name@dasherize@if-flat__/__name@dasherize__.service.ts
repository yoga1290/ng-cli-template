import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class <%= classify(name) %>Service {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  get<%= classify(name) %> () : Observable<Array<Object>> {
    return this.http.get<Array<Object>>("/<%= classify(name) %>").pipe(
      // tap(_ => this.log(`fetched hero id=${id}`)),
      // catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }


  add<%= classify(name) %> (quote : Object) : Observable<Object> {
    return this.http.post<Object>("/<%= classify(name) %>", quote, httpOptions).pipe(
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

  update<%= classify(name) %> (id : String, quote : Object) : Observable<Object> {
    return this.http.put<Object>("/<%= classify(name) %>/" + id, quote, httpOptions).pipe(
      // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

  delete<%= classify(name) %> (id : String) : Observable<Object> {
    return this.http.delete<Object>("/<%= classify(name) %>/" + id, httpOptions).pipe(
      // catchError(this.handleError<Hero>('addHero'))
    );
  }

}
