import { Injectable } from '@angular/core';

export interface Vendee {
  id: any;
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

  constructor( private vendee: Vendee ) { }

  getVendee(vendee: Vendee) {
    return this.vendee;
  }
}
