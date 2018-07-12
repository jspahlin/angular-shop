import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../current-user';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
  private loggedUser: CurrentUser;
  private cartList: any;
  
  constructor( private cartService: CartService, private userService: UserService ) {}

  ngOnInit() {
    this.userService.login(null, null).subscribe( user => {
        this.loggedUser = user;
        console.log(this.loggedUser);
    });

    this.cartService.getAllCarts().subscribe( list=>{
      this.cartList = list;
      console.log("=")
      console.log(this.cartList);
      console.log("=")
    });
  }

  approve(x): void{
    console.log("hi");
    console.log(x);
    console.log("hi");
    this.cartService.approve(x,).subscribe( list =>{
      this.cartList = list as any;
      console.log("=")
      console.log(this.cartList);
      console.log("=")
    });
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