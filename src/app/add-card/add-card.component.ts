import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CardRaritySelectorComponent} from '../card-rarity-selector/card-rarity-selector.component';
import {CardRarity} from '../card-rarity';
import {CardSetSelectorComponent} from '../card-set-selector/card-set-selector.component';
import {SelectorOption} from '../selector-option';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit, AfterViewInit {
  public name: string;
  public cmc: number;
  public text: string;
  public imageUrl: string;
  public rarity: CardRarity;
  public set: SelectorOption;
  @ViewChild(CardRaritySelectorComponent) cardRarity;
  @ViewChild(CardSetSelectorComponent) cardSet
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.rarity = this.cardRarity.selectedRarity;
    this.set = this.cardSet.selected;
  }

  addCard(): void {
    console.log(this.name + ' ' + this.text + ' ' + JSON.stringify(this.cardRarity.getSelected()));
  }
}
