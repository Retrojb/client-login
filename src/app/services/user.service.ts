import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public API = 'http://localhost:5000';
  public VENDEE_API = this.API + '/vendeeProfle';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'); // check against ktor headers
  performance = { headers: this.headers };

  payload = { user: User };
  constructor( private http: HttpClient ) { }

  private handleError(error: any) {  // swap out with Uncle Earl's Errors
    console.error(error);
    return throwError(error);
  }

  getAllMorties(): Observable<any> {
    return this.http.get(this.API)
    .pipe(
      tap(v => console.log(v),
      catchError(this.handleError)
    ));
  }

  getUser(id: number) {
    const url = '${this.VENDEE_API}/' + id;
    return this.http.get<User>(url).pipe( catchError(this.handleError));
  }

  addUser(id: number, name: string, email: string) {
    const newMorty = new User();
    this.http.post(`${this.API}/vendeeProfile`, newMorty)
    .subscribe(m => console.log('foo', m));
  }
}
