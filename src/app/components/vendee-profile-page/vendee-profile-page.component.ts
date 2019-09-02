import { Component, OnInit } from '@angular/core';
import { Vendee, VendeeService } from 'src/app/services/vendee.service';


@Component({
  selector: 'app-vendee-profile-page',
  templateUrl: './vendee-profile-page.component.html',
  styleUrls: ['./vendee-profile-page.component.scss']
})
export class VendeeProfilePageComponent implements OnInit {

  vendees: Vendee [];

  constructor(private vendeeService: VendeeService) { }

  ngOnInit() {
    this.getVendee();
  }

  getVendee() {
    this.vendeeService.getVendee()
    .subscribe(vendee => {
      this.vendees = vendee;
    });
  }

}
