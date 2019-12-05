import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss']
})
export class AdminUserListComponent implements OnInit {

  displayedColumns: string[] = ['userName', 'userFirstName', 'userLastName', 'userEmail'];
  data: User[];
  isLoading: boolean;

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers()
    .subscribe(res => {
      this.data = res;
      this.isLoading = false;
    }, error => {
      console.log('HARD NO', error);
      this.isLoading = false;
    });
  }

}
