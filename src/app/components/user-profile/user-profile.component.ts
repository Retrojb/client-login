import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = { id: '', userName: '', userFirstName: '', userLastName: '', userEmail: ''};
  isLoading = true;

  constructor(private router: Router,
              private activeRoute: ActivatedRoute,
              private userService: UserService) {}

  ngOnInit() {
    this.getUserDetails(this.activeRoute.snapshot.params[`${this.user.id}`]);
  }

  getUserDetails(id) {
    this.userService.getUser(id)
      .subscribe( data => {
            this.user = data;
            this.isLoading = false;
          });
    }
}
