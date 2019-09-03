import { Component, OnInit } from '@angular/core';
import { Vendee, VendeeService } from 'src/app/services/vendee.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-vendee-profile-page',
  templateUrl: './vendee-profile-page.component.html',
  styleUrls: ['./vendee-profile-page.component.scss']
})
export class VendeeProfilePageComponent implements OnInit {

  vendees: Vendee[] = [];
  vendee: Vendee;

  displayData: boolean;
  tempId: 1;

  constructor(private vendeeService: VendeeService) { }

  ngOnInit() {
    this.getVendee();
  }

  getVendee() {
    this.vendeeService.getVendee(this.tempId)
    .subscribe(vendee => {
      this.vendee = vendee;
    });
  }
}
