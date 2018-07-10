import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';
import { Customer } from './customer';
import { Employee } from './employee';
import { Admin } from './admin';
import { CurrentUser } from './current-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUrl = 'http://localhost:8080/magic-shop/login';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private employee: Employee;
  private customer: Customer;
  private admin: Admin;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<CurrentUser> {
    if (username && password) {
      // we need to log in
      console.log(username);
      const body = `username=${username}&password=${password}`;

      let trial =  new User;
      trial.username = username;
      trial.password = password;

      let myJSON = JSON.stringify(trial);
      console.log(myJSON);
      return this.http.post(this.appUrl, myJSON, { headers: this.headers, withCredentials: true }).pipe(
        map(
          resp => {
            const user: CurrentUser = resp as CurrentUser;
            // if(user.role === "EMPLOYEE"){
            //   this.employee = user;
            //   user.user.role = 'employee';
            // }

            // if(user.role === "CUSTOMER"){
            //   this.customer = user;
            //   user.user.role = 'customer';
            // }

            // if(user.role === "ADMIN"){
            //   this.admin = user;
            //   user.user.role = 'admin';
            //   console.log(user.user)
            // }

            // localStorage.setItem('currentUser', JSON.stringify(user.user));
            
            return user;
          }
        )
      );
    } else {
      // we are just checking to see if we're already logged in
      return this.http.get(this.appUrl, { withCredentials: true })
        .pipe(map(
          resp => {
            const user: CurrentUser = resp as CurrentUser;
            if (user) {
              if(user.role === "EMPLOYEE"){
                //this.employee = user;
              }
  
              if(user.role === "CUSTOMER"){
                //this.customer = user;
              }
  
              if(user.role === "ADMIN"){
               // this.admin = user;
              }
            }
            return user;
          }
        ));
    }
  }
  logout(): Observable<Object> {
    return this.http.delete(this.appUrl, { withCredentials: true }).pipe(
      map(success => {
        localStorage.removeItem('currentUser');
        this.employee = null;
        this.customer = null;
        this.admin = null;
        return success;
      })
    );
  }
  getCustomer(): Customer {
    return this.customer;
  }
  getEmployee(): Employee {
    return this.employee;
  }
  getAdmin(): Admin {
    return this.admin;
  }
  isEmployee() {
    return (this.employee !== undefined && this.employee !== null);
  }
  isCustomer() {
    return (this.customer !== undefined && this.customer !== null);
  }
  isAdmin() {
    return (this.admin !== undefined && this.admin !== null);
  }
}
