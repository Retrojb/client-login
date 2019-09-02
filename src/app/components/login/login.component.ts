import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLoginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  constructor() { }

  ngOnInit() {
// this.personService.getUser().subscribe(user =>{ this.user = user } );
  }

}


