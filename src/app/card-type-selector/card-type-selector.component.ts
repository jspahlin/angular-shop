import { Component, OnInit } from '@angular/core';
import {SelectorOptionsService} from '../selector-options.service';
import {HttpClient} from '@angular/common/http';
import {SelectorOption} from '../selector-option';

@Component({
  selector: 'app-card-type-selector',
  templateUrl: './card-type-selector.component.html',
  styleUrls: ['./card-type-selector.component.css'],
  providers: [SelectorOptionsService]
})

export class CardTypeSelectorComponent implements OnInit {
  public types: SelectorOption[];
  public selected: number;
  public selectedOptions: number[];
  constructor(private http: HttpClient, private typesService: SelectorOptionsService) {
    this.typesService.url = 'http://localhost:8080/magic-shop/card/type';
  }
  public getSelected() {
    return this.types.filter(e=> this.selectedOptions.includes(e.id));
  }
  ngOnInit() {

    this.typesService.getOptions().subscribe(v => { this.types = v; console.log(v); });
  }
}

