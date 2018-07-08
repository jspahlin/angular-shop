import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {CardRaritySelectorComponent} from '../card-rarity-selector/card-rarity-selector.component';
import {CardRarity} from '../card-rarity';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit, AfterViewInit {
  public name: string;
  public cmc: number;
  public text: string;
  public rarity: CardRarity;
  @ViewChild(CardRaritySelectorComponent) cardRarity;
  constructor() { }

  ngOnInit() {
    this.rarity = this.cardRarity.selectedRarity;
    console.log(this.rarity);
    console.log("here");
  }

  ngAfterViewInit() {

  }

  addCard(): void {
    console.log(this.name + ' ' + this.text + ' ' + JSON.stringify(this.cardRarity.getSelected()));
  }
}
