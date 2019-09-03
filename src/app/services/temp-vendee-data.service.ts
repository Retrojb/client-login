import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Vendee, VendeeService } from './vendee.service';

@Injectable({
  providedIn: 'root'
})
export class TempVendeeDataService implements InMemoryDbService {
  createDb(): any {
    const vendee: Vendee[] = [
      { id: 1, vendeeFirstName: 'John', vendeeLastName: 'Baltez', vendeeEmail: 'email@email.com', vendeeName: 'retroJb' },
      { id: 2, vendeeFirstName: 'Charles', vendeeLastName: 'Teaford', vendeeEmail: 'email@email.com', vendeeName: 'treeford' },
      { id: 3, vendeeFirstName: 'Tyler', vendeeLastName: 'Garvey', vendeeEmail: 'email@email.com', vendeeName: 'redgarv' },
      { id: 4, vendeeFirstName: 'Sarah', vendeeLastName: 'Awada-Teaford', vendeeEmail: 'email@email.com', vendeeName: 'Graceful' }
    ];
    return vendee;
  }

  constructor() { }
}
