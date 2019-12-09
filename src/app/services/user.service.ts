import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API = 'api://5b2dd2e0-d425-4400-888c-d6a0286b516c/user-api';
  public BASE_URL = 'http://localhost:4200'; //will change once served or create an environment
  userProfile = 'mockUser';
  userProfileUrl = `${this.BASE_URL + 'user-profile'}/${id}`;

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'); // check against ktor headers
  performance = { headers: this.headers };

  constructor( private http: HttpClient) { }

  private handleError(error: any) {
  // swap out with Uncle Earl's Errors
    console.error(error);
    return throwError(error);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL)
      .pipe(
        tap(v => console.log(v),
        catchError(this.handleError)
      ));
  }

  getUser(id: number) {
    return this.http.get<User>(this.userProfileUrl).pipe(
      tap(_ => console.log(`caught a wild morty id=${id}`)),
      catchError(this.handleError));
  }

  createUser(user: User) {
    return this.http.post(this.userProfileUrl, user)
      .subscribe(m => console.log('foo', m));
  }

  deleteUser(id): Observable<User> {
    return this.http.delete<User>(this.userProfileUrl, this.performance)
      .pipe( tap(_ => console.log(`dby id=${id}`)),
      catchError(this.handleError));
  }

  updateUser(user): Observable<any> {
    return this.http.put(this.userProfileUrl, user, this.performance).pipe(
      tap(_ => console.log(`updated user user=${user}`)),
      catchError(this.handleError)
    );
  }

  }
