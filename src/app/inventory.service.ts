import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Inventory } from "./inventory";


export class InventoryService{
    private readonly baseUrl: string = 'http://localhost:8080/magic-shop';

    readonly httpOption = {
        headers:new HttpHeaders( {
        'Content-Type': 'application/json',
    }),
        withCredentials: true
    };

    constructor(private http:HttpClient){

    }

    public listInventory(): Observable<Inventory[]>
{
    return this.http.get<Inventory[]>(this.baseUrl + '/inventory', this.httpOption);

}
}