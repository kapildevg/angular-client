import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DeleteuserComponent } from './components/deleteuser/deleteuser.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';


const routes: Routes = [
   { path:"", component:HomeComponent, pathMatch:"full"},

{ path:"register", component:RegisterComponent},
{ path:"login", component:LoginComponent},
{ path:"deleteuser", component:DeleteuserComponent},
{ path:"adduser", component:AddUserComponent},
{ path:"allusers", component:AllUsersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]})
export class AppRoutingModule { }
