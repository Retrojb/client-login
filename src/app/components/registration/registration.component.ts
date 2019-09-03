import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MortyService } from '../../services/morty.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  // have to make changes here
  register: FormGroup;
  tempId: 1;
  displayData: boolean;

  vRegForm = this.fb.group({
    vendeeName: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    gender: [[ 'Morty', 'Summer', 'Mr. Poopy Butthole' ]],
    age: [ null ]
  });

  vRegAddress = this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']

  });

  constructor(private mortyService: MortyService,
              private fb: FormBuilder) { }

  ngOnInit() {
  }

  addMorty() {
    this.mortyService.addMorty();
  }
}
