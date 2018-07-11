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

  constructor(private cus: CreateUserService  ) {

   }

  ngOnInit() {
    
      }
      
  public register () {
    console.log("Omg, finally it works");
    this.cus.register(this.username, this.password, this.email).subscribe(v=>console.log(v));
     }
  }
  