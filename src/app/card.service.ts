import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Card} from './card';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private readonly baseUrl: string = 'http://localhost:8080/magic-shop';

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {

  }

  public saveCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.baseUrl + '/card', card, this.httpOptions);
  }
}
