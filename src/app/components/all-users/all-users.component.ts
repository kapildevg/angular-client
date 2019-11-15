import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserV } from 'src/app/models/userv';
import { Observable } from 'rxjs';

@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users:Observable<UserV[]>;
  
  constructor(private userSvc: UserService) {
    this.users=this.userSvc.getUsers();
    
   }

  ngOnInit() {
  }

}
