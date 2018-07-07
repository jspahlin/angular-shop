import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CardRarity} from '../card-rarity';

@Component({
  selector: 'app-card-rarity-selector',
  templateUrl: './card-rarity-selector.component.html',
  styleUrls: ['./card-rarity-selector.component.css']
})
export class CardRaritySelectorComponent implements OnInit {
  public rarities: CardRarity[];
  public selectedRarity: number;
  constructor(private http: HttpClient) {
  }
  public getSelected() {
    return this.rarities.find(e => e.id === +this.selectedRarity);
  }
  ngOnInit() {
    this.http.get('http://localhost:8080/magic-shop/card/rarity', {withCredentials: true})
      .pipe(map(v => v as CardRarity[]))
      .subscribe(v => { this.rarities = v; console.log(this.rarities); });
  }
}
