import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { UserV } from '../models/userv';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    readonly API_URL: string = "http://localhost:64038/api/auth";
    userSubject: BehaviorSubject<any>;
    currentUser: Observable<any>;
    

    constructor(private http: HttpClient) {
        this.userSubject=new BehaviorSubject<any>(JSON.parse(localStorage.getItem("user")));
        this.currentUser=this.userSubject.asObservable();
        
    }
    getUsers():Observable<UserV[]>{
        return this.http.get<UserV[]>(this.API_URL);
    }
    getUsers2(){
        return this.http.get<UserV[]>(this.API_URL);
    }
    addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.API_URL}/register`, user);
    }
    adminAddUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.API_URL}/adduser`, user);
    }
    getToken(loginData: any): Observable<any> {
        return this.http.post<any>(`${this.API_URL}/token`, loginData);

    }
    deleteUser(userNames: string): Observable<any> {
        
        var data = {selfusername: this.User.username, username:userNames};
        return this.http.post<any>(`${this.API_URL}/dUser`, data);

    }

    saveUserState(userData){
        
        localStorage.setItem("user", JSON.stringify(userData));
        this.userSubject.next(userData);
    }

    clearUserState(){
        localStorage.clear();
        this.userSubject.next(null);
    }

    public get User() : any {
        
        return this.userSubject.value;
    }
    
}
