import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// custom mods
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';

import { CartComponent } from'./cart/cart.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardRaritySelectorComponent } from './card-rarity-selector/card-rarity-selector.component';
import { CardSetSelectorComponent } from './card-set-selector/card-set-selector.component';
import { CardColorComponent } from './card-color/card-color.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

import { CardColorSelectorComponent } from './card-color-selector/card-color-selector.component';
import { UserListComponent } from './user-list/user-list.component';
import { CardTypeSelectorComponent } from './card-type-selector/card-type-selector.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { SingleInventoryComponent } from './single-inventory/single-inventory.component';

import { InvoiceListComponent } from './invoice-list/invoice-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CreateAccountComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    AddCardComponent,
    CardRaritySelectorComponent,
    CardSetSelectorComponent,
    CardColorComponent,
    InventoryListComponent,

    CardColorSelectorComponent,
    UserListComponent,
    CardTypeSelectorComponent,
    AddInventoryComponent,
    InvoiceListComponent

    SingleInventoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
