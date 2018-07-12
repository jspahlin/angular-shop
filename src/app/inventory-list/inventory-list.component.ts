import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../inventory';
import { User } from '../user';
import { Cart } from '../cart';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
  providers : [InventoryService]
})
export class InventoryListComponent implements OnInit {
  public data: Inventory[];
  public cart: Cart;
  public userRole: User;

  constructor(private cs: InventoryService, private userService: UserService, private cartService: CartService) {
   }

  ngOnInit() {
    this.cs.listInventory().subscribe(v => {this.data = v; console.log(v);});
    this.cartService.getCart().subscribe(v=>{this.cart = v as Cart;});
  }

  addCart(x, quantity): void{
    console.log('add');
    console.log(this.cart.id, x, quantity);

    this.cartService.add(this.cart.id, x, quantity).subscribe(v=>{this.cart = v as Cart;});
  }

  isEmployee(): boolean{
    return this.userService.isEmployee();
  }
  isAdmin(): boolean{
    return this.userService.isAdmin();
  }
}
