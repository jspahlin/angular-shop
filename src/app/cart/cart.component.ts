import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';
import { CartService } from 'src/app/cart.service'

import { CurrentUser } from 'src/app/current-user';
import { Cart } from '../cart';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    public sample: CurrentUser;
    public cart: Cart;

  constructor( private cartService: CartService, private userService: UserService ) {}

  ngOnInit() {
    this.userService.login(null, null).subscribe( user => {
        this.sample = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.sample);
    });
     this.cartService.getCart().subscribe(v=>{
       this.cart = v as Cart;
       console.log(this.cart)
     });
  }

  purchase(): void {
    this.cartService.purchase(this.cart);
  }
}
