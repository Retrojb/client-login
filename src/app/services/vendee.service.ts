import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';

export interface Vendee {
  id: number;
  vendeeName: string;
  vendeeEmail: string;
  vendeeFirstName: string;
  vendeeLastName: string;
}

export interface Domicile {
  domicileStreet: string;
  domicileCity: string;
  domicileState: string;
  domicileZip: string;
}

@Injectable({
  providedIn: 'root'
})
export class VendeeService {

  devApiUrl = 'api/vendees'; // change once deployed to dev server
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json'); // check against ktor headers
  performance = { headers: this.headers };

  constructor( private http: HttpClient ) { }

  private handleError(error: any) {  // swap out with Uncle Earl's Errors
    console.error(error);
    return throwError(error);
  }

  getVendees(): Observable<Vendee[]> {
    return this.http.get<Vendee[]>(this.devApiUrl)
    .pipe(
      tap(vendee => console.log(vendee)),
      catchError(this.handleError)
    );
  }

  getVendee(id: number): Observable<Vendee> {
    const url = '${{this.apiurl}}/${{id}}';
    return this.http.get<Vendee>(url)
    .pipe( catchError(this.handleError) );
  }

  addVendee(vendee: Vendee): Observable<Vendee> {
    if (!vendee.id) {
      return this.http.post<Vendee>(this.devApiUrl, vendee, this.performance)
      .pipe(
        tap( vendee => console.log(vendee)),
        catchError(this.handleError)
      );
    }
  }

}
