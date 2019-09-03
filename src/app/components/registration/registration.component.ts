import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Vendee, VendeeService } from 'src/app/services/vendee.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  register: FormGroup;
  vendee: Vendee;
  tempId: 1;
  displayData: boolean;

  vRegForm = this.fb.group({
    vendeeName: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    gender: [ 'male', 'female', 'none ya business' ],
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

  getVendee() {  //comeback and remove temp id
    this.vendeeService.getVendee(this.tempId)
    .subscribe(vendee => {
      this.vendee = vendee;
      this.displayData = true ;
    });
  }

  addVendee() {
    this.vendeeService.addVendee(this.vRegForm.value)
      .subscribe( v => {
        this.vendee = v;
        console.log(this.vendee);
      });
    this.getVendee();
  }
}
