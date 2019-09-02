import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userRegistrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup ({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    gender: new FormControl([ 'male', 'female', 'none ya business' ]),
    age: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
  }

}
