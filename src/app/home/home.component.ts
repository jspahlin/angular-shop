import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(){
      console.log("I'm Home!!");
  }

  isCustomer(): boolean {
    return this.userService.isCustomer();
  }
  isEmployee(): boolean {
    return this.userService.isEmployee();
  }
  isAdmin(): boolean {
    return this.userService.isAdmin();
  }
}
