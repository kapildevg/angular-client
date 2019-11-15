import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

    constructor(private fb: FormBuilder, private userSvc: UserService, private router: Router) {
        this.userForm = this.fb.group({
            username: new FormControl("", Validators.required),
            password: new FormControl("", Validators.compose([Validators.required, Validators.minLength(8)])),
            fullname: new FormControl("", Validators.required),
            role: new FormControl("", Validators.required),
            email: new FormControl("", Validators.compose([Validators.required, Validators.email]))            
        })
    }

    ngOnInit() {
    }

    public get Username() {
        return this.userForm.controls["username"];
    }
    public get Password() {
        return this.userForm.controls["password"];
    }
    public get Fullname() {
        return this.userForm.controls["fullname"];
    }
    public get Email() {
        return this.userForm.controls["email"];
    }
    public get Role() {
        return this.userForm.controls["role"];
    }

    register() {
        if (this.userForm.valid) {
            let user: User = this.userForm.value;
            user.role="user";
            this.userSvc.adminAddUser(user)
                .subscribe(
                    result => {
                        console.log(result);
                        alert("Registered successfully");
                        this.router.navigate(['login'])
                    },
                    err => { if(err.status===409){
                        alert("Duplicate Username")
                    }
                    else{

                    
                        alert("Error in registering user")
                     } }
                )
        } else {
            alert("Invalid form data")
        }
    }

}