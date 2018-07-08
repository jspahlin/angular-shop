import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SelectorOptionsService} from '../selector-options.service';
import {SelectorOption} from '../selector-option';

@Component({
  selector: 'app-card-rarity-selector',
  templateUrl: './card-rarity-selector.component.html',
  styleUrls: ['./card-rarity-selector.component.css'],
  providers: [SelectorOptionsService]
})
export class CardRaritySelectorComponent implements OnInit {
  public rarities: SelectorOption[];
  public selectedRarity: number;
  constructor(private http: HttpClient, private rarityService: SelectorOptionsService) {
    this.rarityService.url = 'http://localhost:8080/magic-shop/card/rarity';
  }
  public getSelected() {
    return this.rarities.find(e => e.id === +this.selectedRarity);
  }
  ngOnInit() {
    this.rarityService.getOptions().subscribe(v => { this.rarities = v; });
  }
}
