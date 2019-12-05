import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { User } from '../models/user.model';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API = 'api://5b2dd2e0-d425-4400-888c-d6a0286b516c/user-api';
  public VENDEE_API = this.API + '/vendeeProfle';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'); // check against ktor headers
  performance = { headers: this.headers };

  constructor( private http: HttpClient) { }

  private handleError(error: any) {  // swap out with Uncle Earl's Errors
    console.error(error);
    return throwError(error);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.API)
      .pipe(
        tap(v => console.log(v),
        catchError(this.handleError)
      ));
  }

  getUser(id: number) {
    const url = `${this.API}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => console.log(`caught a wild morty id=${id}`)),
      catchError(this.handleError));
  }

  addUser(user: User) {
    this.http.post(`${this.API}/vendeeProfile`, user)
    .subscribe(m => console.log('foo', m));
  }

  deleteUser(id): Observable<User> {
    const url = `${this.API}/${id}`;
    return this.http.delete<User>(url, this.performance)
    .pipe( tap(_ => console.log(`dby id=${id}`)),
    catchError(this.handleError));
  }

  updateUser(id, user): Observable<any> {
    const url = `${this.API}/${id}`;
    return this.http.put(url, user, this.performance).pipe(
      tap(_ => console.log(`updated user user=${user}`)),
      catchError(this.handleError)
    );
  }

  }
