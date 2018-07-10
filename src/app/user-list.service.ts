import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private appUrl: string = "http://localhost:8080/magic-shop/user";
  constructor(private http: HttpClient) { }

  public listUsers (): Observable<any> {
    return this.http.get(this.appUrl, {withCredentials: true});
  }
}
