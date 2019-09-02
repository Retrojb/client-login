import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { Vendee } from './vendee.service';

@Injectable({
  providedIn: 'root'
})
export class TempVendeeDataService implements InMemoryDbService {
  createDb(): any {
    const vendee: Vendee[] = [
      { id: 1, vendeeFirstName: 'John', vendeeLastName: 'Baltez', vendeeEmail: 'email@email.com', vendeeName: 'retroJb' }
    ];
    return vendee;
  }

  constructor() { }
}
