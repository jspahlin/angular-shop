import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inventory } from "./inventory";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService{
    private readonly baseUrl: string = 'http://localhost:8080/magic-shop';

    readonly httpOption = {
        headers:new HttpHeaders( {
        'Content-Type': 'application/json',
    }),
        withCredentials: true
    };

    constructor(private http: HttpClient){

    }

    public listInventory(): Observable<Inventory[]>
{
    return this.http.get<Inventory[]>(this.baseUrl + '/inventory', this.httpOption);

}
    public saveInventory(inv: Inventory): Observable<Inventory> {
      inv.id = 0;
      inv.sold = 0;
      console.log(inv);
      return this.http.post<Inventory>(this.baseUrl + '/inventory/', inv, this.httpOption);
    }


    public getInventory(id: number): Observable<Inventory>  {
        
        return this.http.get<Inventory>(this.baseUrl+ '/inventory/'+id, this.httpOption);
}
public add(inventoryid:number, cardid: number, quantity: number): Observable<Inventory>{
    console.log(inventoryid + " " + cardid + " " + quantity);

    let addJSON = {
      inventoryid: inventoryid,
      cardID: cardid,
      lineID: null,
      quantity: quantity
    }
    
    console.log(addJSON);
    return this.http.post<Inventory>(this.baseUrl + '/inventory/add', addJSON, this.httpOption).pipe(
        map(
          resp => {
            const Inventory: Inventory = resp as Inventory;
            console.log(Inventory);
            return Inventory;
          })
        );
    }

}