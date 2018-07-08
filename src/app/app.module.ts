import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// custom mods
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardRaritySelectorComponent } from './card-rarity-selector/card-rarity-selector.component';
import { CardSetSelectorComponent } from './card-set-selector/card-set-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    AddCardComponent,
    CardRaritySelectorComponent,
    CardSetSelectorComponent
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
