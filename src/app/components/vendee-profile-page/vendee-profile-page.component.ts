import { Component, OnInit } from '@angular/core';
import { VendeeService } from 'src/app/services/vendee.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-vendee-profile-page',
  templateUrl: './vendee-profile-page.component.html',
  styleUrls: ['./vendee-profile-page.component.scss']
})
export class VendeeProfilePageComponent implements OnInit {

  constructor(private vendeeService: VendeeService) { }

  ngOnInit() { }
}
