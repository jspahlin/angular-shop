import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../inventory';
import { User } from '../user';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
  providers : [InventoryService]
})
export class InventoryListComponent implements OnInit {
  public data: Inventory[];
  public userRole: User;

  constructor(private cs: InventoryService) {
   }

  ngOnInit() {
    this.cs.listInventory().subscribe(v => {this.data = v; console.log(v);});
  }

}
