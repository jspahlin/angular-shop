import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {Inventory} from '../inventory';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent implements OnInit {
public inv: Inventory;
  constructor(public is: InventoryService) { }

  ngOnInit() {
    this.is.getTopCard().subscribe(v => this.inv = v);
  }

}
