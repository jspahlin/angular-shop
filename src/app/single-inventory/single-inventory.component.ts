import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { InventoryService } from '../inventory.service';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Inventory } from '../inventory';

@Component({
  selector: 'app-single-inventory',
  templateUrl: './single-inventory.component.html',
  styleUrls: ['./single-inventory.component.css'],
  providers: [InventoryService]
})
export class SingleInventoryComponent implements OnInit {
  public inv: Inventory;

  constructor(private is: InventoryService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {

    let id:number = +this.route.snapshot.paramMap.get('id')
    this.viewitem(id);
  }
  viewitem (id: number) {
    console.log("check this");
    this.is.getInventory(id).subscribe((v) => {
      console.log(v);
      this.inv = v;
    });
     }

}
