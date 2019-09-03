import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { Morty } from '../models/morty';

@Injectable({
  providedIn: 'root'
})
export class MortyService {

  public API = 'http://localhost:5000';
  public VENDEE_API = this.API +'/vendeeProfle';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'); // check against ktor headers
  performance = { headers: this.headers };

  payload = { morty: Morty };
  constructor( private http: HttpClient ) { }

  private handleError(error: any) {  // swap out with Uncle Earl's Errors
    console.error(error);
    return throwError(error);
  }

  getAllMorties(): Observable<any>{
    return this.http.get(this.API).pipe(tap(v => console.log(v), catchError(this.handleError)));
  }

  getMorty(id: number) {
    const url = '${this.VENDEE_API}/' + id;
    return this.http.get<Morty>(url).pipe( catchError(this.handleError));
  }

  addMorty(id: number, name: string, email: string) {
    const newMorty = new Morty(id, name, email);
    this.http.post(`${this.API}/vendeeProfile`, newMorty)
    .subscribe(m => console.log('foo', m));
  }
}
