import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Vendee, VendeeService } from 'src/app/services/vendee.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  vendee: Vendee;
  tempId: 1;
  displayData: boolean;

  vendeeRegistrationForm = new FormGroup({
    vendeeName: new FormControl(''),
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

  constructor(private vendeeService: VendeeService) { }

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
    this.vendeeService.addVendee(this.vendeeRegistrationForm.value)
      .subscribe( v => {
        this.vendee = v;
        console.log(this.vendee);
      });
    this.getVendee();
  }
}
