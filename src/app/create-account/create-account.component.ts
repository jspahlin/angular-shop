import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { CreateUserService } from 'src/app/create-user.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  providers: [CreateUserService]
})
export class CreateAccountComponent implements OnInit {
  private username: string;
  private password: string;
  private email: string;
  private billingAddress: string;
  private shippingAddress: string;

  constructor(private cus: CreateUserService  ) {

   }

  ngOnInit() {

      }

  public register () {
    this.cus.register(this.username, this.password, this.email, this.billingAddress, this.shippingAddress).subscribe(v=>console.log(v));
     }
  }
