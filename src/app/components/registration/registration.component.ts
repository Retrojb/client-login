import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { VendeeService } from 'src/app/services/vendee.service';


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
    gender: [[ 'male', 'female', 'none ya business' ]],
    age: [ null ]
  });

  vRegAddress = this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']

  });

  constructor(private vendeeService: VendeeService,
              private fb: FormBuilder) { }

  ngOnInit() {
  }

  addVendee() {
    this.vendeeService.addVendee();
  }
}
