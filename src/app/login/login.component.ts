import {Component, Input, OnInit} from '@angular/core';

import { UserService } from 'src/app/user.service';

import { CurrentUser } from 'src/app/current-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loggedUser: CurrentUser;
  private username: string;
  private password: string;

  constructor( private userService: UserService ) {}

  ngOnInit() {
    this.userService.login(null, null).subscribe( user => {
      this.loggedUser = user;
      //  purchase stuff
      console.log(this.loggedUser);
      console.log(this.loggedUser.user);
    });
  }

  login(): void {
    this.userService.login(this.username, this.password).subscribe(
      user => {
        this.loggedUser = user;
        // purchase stuff
      }
    );
  }
  logout(): void {
    this.userService.logout().subscribe();
    this.loggedUser = null;
    this.username = null;
    this.password = null;
  }

  isCustomer(): boolean{
    return this.userService.isCustomer();
  }
  isEmployee(): boolean{
    return this.userService.isEmployee();
  }
  isAdmin(): boolean{
    return this.userService.isAdmin();
  }
}
