import {SelectorOption} from './selector-option';

export class Card {
  public id: number;
  public name: string;
  public text: string;
  public convertedManaCost: number;
  public imageUrl: string;
  public set: SelectorOption;
  public rarity: SelectorOption;
  public colors: SelectorOption[];
  public price: number; // this is in cents....
  public type: SelectorOption[];
}
