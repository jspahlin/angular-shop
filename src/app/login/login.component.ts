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
  private sample: CurrentUser;

  constructor( private userService: UserService ) {}

  ngOnInit() {
    this.userService.login(null, null).subscribe( user => {
      this.loggedUser = user;
      //  purchase stuff
    });
    this.sample = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.sample);
  }
  login(): void {
    console.log('Inside login component: '+ this.username + " " + this.password);
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
}
