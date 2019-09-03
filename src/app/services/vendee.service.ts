import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { Vendee } from '../models/vendee';

@Injectable({
  providedIn: 'root'
})
export class VendeeService {

  public API = 'http://localhost:5000';
  public VENDEE_API = this.API +'/vendeeProfle';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'); // check against ktor headers
  performance = { headers: this.headers };

  payload = { vendee: Vendee };
  constructor( private http: HttpClient ) { }

  private handleError(error: any) {  // swap out with Uncle Earl's Errors
    console.error(error);
    return throwError(error);
  }

  getAllVendees(): Observable<any>{
    return this.http.get(this.API).pipe(tap(v => console.log(v), catchError(this.handleError)));
  }

  getVendee(id: number) {
    const url = '${this.VENDEE_API}/' + id;
    return this.http.get<Vendee>(url).pipe( catchError(this.handleError));
  }

  addVendee() {
    const newVendee = this.payload;
    this.http.post(`${this.API}/vendeeProfile`, newVendee)
    .subscribe(v => console.log('foo', v));
  }
}
