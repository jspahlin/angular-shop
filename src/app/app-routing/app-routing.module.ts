import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from 'src/app/cart/cart.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { CreateAccountComponent } from '../create-account/create-account.component';

import {AddCardComponent} from '../add-card/add-card.component';
import {CardRaritySelectorComponent} from '../card-rarity-selector/card-rarity-selector.component';

const routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
  path: 'register',
  component: CreateAccountComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'cart',
    component: Component
  }
  {
    path: 'add-card',
    component: AddCardComponent
  },
  {
    path: 'rarity',
    component: CardRaritySelectorComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
