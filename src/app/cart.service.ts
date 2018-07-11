import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl: string = 'http://localhost:8080/magic-shop/cart';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  public purchase(cart: Cart){
    console.log(this.baseUrl)
    return this.http.post(this.baseUrl + '/purchase', cart, { headers: this.headers, withCredentials: true });
  }

  public getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.baseUrl, { withCredentials: true });
  }

  
}
