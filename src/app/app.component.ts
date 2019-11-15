import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orderfood-client';
  currentUser:any;
  isAdmin:boolean=false;

    constructor(private userSvc:UserService, private router:Router)
    {
        this.userSvc.currentUser.subscribe(user=>this.currentUser=user);
        if(this.currentUser!=null){
          if(this.currentUser.role=="admin"){
            this.isAdmin=true;
        }
        }
    }

    logout(){
        this.userSvc.clearUserState();
        this.router.navigate(['/login']);
    }
}
