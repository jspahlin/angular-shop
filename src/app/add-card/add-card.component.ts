import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CardRaritySelectorComponent} from '../card-rarity-selector/card-rarity-selector.component';
import {CardRarity} from '../card-rarity';
import {CardSetSelectorComponent} from '../card-set-selector/card-set-selector.component';
import {CardColorSelectorComponent} from '../card-color-selector/card-color-selector.component';
import {SelectorOption} from '../selector-option';
import {Card} from '../card';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit, AfterViewInit {
  public card: Card;

  public cmc: number;
  /*public rarity: SelectorOption;
  public set: SelectorOption;*/
  @ViewChild(CardRaritySelectorComponent) cardRarity;
  @ViewChild(CardSetSelectorComponent) cardSet;
  @ViewChild(CardColorSelectorComponent) cardColor;
  constructor() {
    this.card = new Card();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.card.rarity = this.cardRarity.selectedRarity;
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
    this.card.id = 0;
    console.log(this.card/* + JSON.stringify(this.cardRarity.getSelected()) */ );
  }
}
