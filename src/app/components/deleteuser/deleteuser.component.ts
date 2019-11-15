import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'deleteuser',
    templateUrl: './deleteuser.component.html',
    styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

    userForm1: FormGroup;

    constructor(private fb: FormBuilder, private userSvc: UserService, private router: Router) {
        this.userForm1 = this.fb.group({
            username: new FormControl("", Validators.required)
        })
    }
    public get Username() {
        return this.userForm1.controls["username"];
    }



    ngOnInit() {
   
    }

    delete() {
        if (this.userForm1.valid) {

            this.userSvc.deleteUser(this.Username.value)
                .subscribe(
                    res => {
                        alert("User Deleted Succesfully")
                         this.router.navigate(['/']);
                    },
                    err => {
                        alert(err.status + "Error in Deleting User Data")
                    }
                )
        } else {
            alert("Invalid login data")
        }
    }

}
