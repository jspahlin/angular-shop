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
  public role: string;
  public user: User;

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
      return this.http.post(this.appUrl, myJSON, { headers: this.headers, withCredentials: true }).pipe(
        map(
          resp => {

            const user: CurrentUser = resp as CurrentUser;
            this.user = user.user;
            this.role = user.role;
            const role = this.role;
            console.log(role);
            console.log("-")
            console.log(resp);
            console.log("-")
            //const role: string = resp.role as string;
            const user: CurrentUser = resp as CurrentUser;
            this.user = user.user;
            this.role = user.role;
            const role: string = this.role;
            // console.log(role);
            console.log(user);

            if(role === "EMPLOYEE"){
              this.employee =user.user;
            }

            if(role === "CUSTOMER"){
              this.customer = user.user;
            }

            if(role === "ADMIN"){
              this.admin = user.user;
            }

            user.admin = this.admin;
            user.employee = this.employee;
            user.customer = this.customer;

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
            this.role = user.role;

            if (this.user) {
              if(this.role === "EMPLOYEE"){
                this.employee = user.user;
              }

              if(this.role === "CUSTOMER"){
                this.customer = user.user;
              }

              if(this.role === "ADMIN"){
               this.admin = user.user;
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
