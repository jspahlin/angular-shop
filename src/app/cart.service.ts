import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl: string = 'http://localhost:8080/magic-shop';
 
  readonly httpOption = {
    headers:new HttpHeaders( {
    'Content-Type': 'application/json',
  }),
    withCredentials: true
  };

  constructor(private http: HttpClient) {}

  public getCart(): Observable<Cart> {
    return this.http.get<Cart>(this.baseUrl + "/cart", this.httpOption).pipe(
      map(
        resp => {
          const cart: Cart = resp as Cart;

          return cart;
        })
      );
  }

  public purchase(): Observable<Cart>{
    console.log("hi");
    return this.http.post<Cart>(this.baseUrl + '/cart/purchase', '', this.httpOption).pipe(
      map(
        resp => {
          const cart: Cart = resp as Cart;
          console.log(cart);
          return cart;
        })
      );
  }  

  public add(cartid:number, cardid: number, quantity: number): Observable<Cart>{
    console.log(cartid + " " + cardid + " " + quantity);

    let addJSON = {
      cartID: cartid,
      cardID: cardid,
      lineID: null,
      quantity: quantity
    }
    
    console.log(addJSON);

    return this.http.post<Cart>(this.baseUrl + '/cart/add', addJSON, this.httpOption).pipe(
      map(
        resp => {
          const cart: Cart = resp as Cart;
          console.log(cart);
          return cart;
        })
      );
  }

  public update(cartid:number, lineid: number, quantity: number): Observable<Cart>{
    console.log(cartid + " " + lineid + " " + quantity);

    let updateJSON = {
      cartID: cartid,
      cardID: null,
      lineID: lineid,
      quantity: quantity
    }
    
    console.log(updateJSON);

    return this.http.post<Cart>(this.baseUrl + '/cart/update', updateJSON, this.httpOption).pipe(
      map(
        resp => {
          const cart: Cart = resp as Cart;
          console.log(cart);
          return cart;
        })
      );
  }

  public remove(lineid: number): Observable<Cart>{
    let extraURL = '/cart/item/remove/' + lineid;
    console.log(extraURL);
    return this.http.delete<Cart>(this.baseUrl + extraURL, this.httpOption).pipe(
      map(
        resp => {
          const cart: Cart = resp as Cart;
          console.log(cart);
          return cart;
        })
      );
  }
}
