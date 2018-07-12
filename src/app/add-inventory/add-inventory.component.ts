import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CardRaritySelectorComponent} from '../card-rarity-selector/card-rarity-selector.component';
import {CardSetSelectorComponent} from '../card-set-selector/card-set-selector.component';
import {CardColorSelectorComponent} from '../card-color-selector/card-color-selector.component';
import {Card} from '../card';
import {CardService} from '../card.service';
import {InventoryService} from '../inventory.service';
import {Inventory} from '../inventory';
import {CardTypeSelectorComponent} from '../card-type-selector/card-type-selector.component';

@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css'],
  providers: [CardService]
})
export class AddInventoryComponent implements OnInit, AfterViewInit {
  public card: Card;
  public quantity: number;
  public buy:number;

  @ViewChild(CardRaritySelectorComponent) cardRarity;
  @ViewChild(CardSetSelectorComponent) cardSet;
  @ViewChild(CardColorSelectorComponent) cardColor;
  @ViewChild(CardTypeSelectorComponent) cardType;
  constructor(private cs: InventoryService) {
    this.card = new Card();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.card.set = this.cardSet.selected;
  }

  addCard(): void {
    if(this.cardSet.selected) {
      this.card.set = this.cardSet.getSelected();
    }
    if(this.cardRarity.selected) {
      this.card.rarity = this.cardRarity.getSelected();
    }
    if(this.cardColor.selectedOptions) {
      this.card.colors = this.cardColor.getSelected();
    }
    if(this.cardType.selectedOptions) {
      this.card.type = this.cardType.getSelected();
    }

    this.card.id = 0;
    console.log(this.card/* + JSON.stringify(this.cardRarity.getSelected()) */ );
    let inv = new Inventory();
    inv.card = this.card;
    inv.quantity = this.quantity;

    this.cs.saveInventory(inv).subscribe(c => console.log(c));
  }
}

