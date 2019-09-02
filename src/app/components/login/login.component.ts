import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName = new FormControl('');

  constructor() { }

  ngOnInit() {
// this.personService.getUser().subscribe(user =>{ this.user = user } );
  }

}


