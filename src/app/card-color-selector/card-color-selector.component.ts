import { Component, OnInit } from '@angular/core';
import {SelectorOptionsService} from '../selector-options.service';
import {HttpClient} from '@angular/common/http';
import {SelectorOption} from '../selector-option';

@Component({
  selector: 'app-card-color-selector',
  templateUrl: './card-color-selector.component.html',
  styleUrls: ['./card-color-selector.component.css'],
  providers: [SelectorOptionsService]
})

export class CardColorSelectorComponent implements OnInit {
  public colors: SelectorOption[];
  public selected: number;
  public selectedOptions: number[];
  constructor(private http: HttpClient, private colorService: SelectorOptionsService) {
    this.colorService.url = 'http://localhost:8080/magic-shop/card/color';
  }
  public getSelected() {
    return this.colors.filter(e=> this.selectedOptions.includes(e.id));
    /* console.log(this.selectedOptions);
    return this.colors.find(e => e.id === +this.selected);*/
  }
  ngOnInit() {

    this.colorService.getOptions().subscribe(v => { this.colors = v; console.log(v); });
  }
}

