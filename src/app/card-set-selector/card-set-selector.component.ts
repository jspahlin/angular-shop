import { Component, OnInit } from '@angular/core';
import {SelectorOptionsService} from '../selector-options.service';
import {HttpClient} from '@angular/common/http';
import {SelectorOption} from '../selector-option';

@Component({
  selector: 'app-card-set-selector',
  templateUrl: './card-set-selector.component.html',
  styleUrls: ['./card-set-selector.component.css'],
  providers: [SelectorOptionsService]
})
export class CardSetSelectorComponent implements OnInit {
  public sets: SelectorOption[];
  public selected: number;
  constructor(private http: HttpClient, private setService: SelectorOptionsService) {
    this.setService.url = 'http://localhost:8080/magic-shop/card/set';
  }
  public getSelected() {
    return this.sets.find(e => e.id === +this.selected);
  }
  ngOnInit() {
    this.setService.getOptions().subscribe(v => { this.sets = v; console.log(v);});
  }

}
