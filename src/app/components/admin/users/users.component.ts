import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/User.model';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = []

  constructor(private userService: UserService, private toastrService: ToastrService) { }

  getUsersFromService() {
    this.userService.getAll().subscribe(data => {
      this.users = data;
      console.log(data)
    },
      error => {
        console.log(error)
      }
    )
  }

  banUser(id: number) {
    this.userService.banUser(id).subscribe(data => {
      console.log(data);
      this.toastrService.success("The user is banned.", "Success")
    })
  }

  ngOnInit(): void {
    this.getUsersFromService();
  }
}