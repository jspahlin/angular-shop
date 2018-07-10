import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';

import { CurrentUser } from 'src/app/current-user';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    private sample: CurrentUser;

  constructor( private userService: UserService ) {}

  ngOnInit() {
    this.userService.login(null, null).subscribe( user => {
        this.sample = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.sample);
    });
  }

}
