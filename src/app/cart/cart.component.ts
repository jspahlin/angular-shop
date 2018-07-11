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
    public cartStuff: any;
    private total: number = 0;

  constructor( private cartService: CartService, private userService: UserService ) {}

  ngOnInit() {
    this.userService.login(null, null).subscribe( user => {
        this.sample = user;
        console.log(this.sample);
    });
    this.cartService.getCart().subscribe(v=>{
      this.cart = v as Cart;
      this.cartStuff = this.cart.invoiceLines;
      for (const card in this.cart.invoiceLines) {
        if (this.cart.hasOwnProperty(card)) {
          const element = this.cart.invoiceLines[card];
          console.log(element);
          this.total = this.total + (element.quantity * element.unitPrice);
        } 
      }
      this.total = this.total/100;
    });
  }

  purchase(): void {
    this.cartService.purchase(this.cart);
  }

  // update(x, q): void{
  //   console.log("update");
  //   console.log(this.cart);
  //   console.log(x + " " + q);
  //   console.log("update");
  //   this.cartService.update(x, q);
  // }

  remove(): void{
    console.log("remove");
  }
}
