import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreateUserService {
  private readonly baseUrl: string = "http://localhost:8080/magic-shop/account/login"

  readonly httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }


/**
 * register
 */
public register(username: string, password: string, email: string): Observable<any>  {
  return this.http.post<any>(this.baseUrl, {'id':0, 'username': username, 'password': password, 'email': email},
   this.httpOptions);
}
}  

