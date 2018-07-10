import {Inject, Injectable, OnInit} from '@angular/core';
import {CardRarity} from './card-rarity';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {SelectorOption} from './selector-option';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectorOptionsService implements OnInit {
  public data: SelectorOption[];
  public selected: number;
  public url: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  console.log("GETTING " + this.url)
    this.http.get<SelectorOption[]>(this.url, {withCredentials: true})
      .subscribe(v => { this.data = v; console.log(this.data); });
  }
  public getOptions(): Observable<SelectorOption[]> {
    return this.http.get<SelectorOption[]>(this.url, {withCredentials: true});
  }
  public getSelected(): SelectorOption {
    return this.data.find(e => (e as any).id === +this.selected);
  }
}
