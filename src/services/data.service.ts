import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  devApiUrl = 'lmsDevDb/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  performance = { headers: this.headers };

  constructor( private http: HttpClient ) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}
