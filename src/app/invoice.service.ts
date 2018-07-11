import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Invoice } from './invoice';


export class InvoiceService{
    private readonly baseUrl: string = 'http://localhost:8080/magic-shop';

    readonly httpOption = {
        headers:new HttpHeaders( {
        'Content-Type': 'application/json',
    }),
        withCredentials: true
    };

    constructor(private http:HttpClient){

    }

    public listInventory(): Observable<Invoice[]>
{
    return this.http.get<Invoice[]>(this.baseUrl + '/invoice', this.httpOption);

}
}