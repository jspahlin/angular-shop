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

  public purchase(cart: Cart){
    console.log("here");
    return this.http.post(this.baseUrl + '/cart/purchase', cart, this.httpOption);
  }  

  public update(cartid:number, lineid: number, quantity: number): Observable<Cart>{
    console.log(cartid + " " + lineid + " " + quantity);

    let updateJSON = {
      cartID: cartid,
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
}
