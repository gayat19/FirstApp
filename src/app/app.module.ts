import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ItemService} from './services/item.service';
import {ItemComponent} from './items/item/item.component';
import {ItemsComponent} from './items/items.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ItemComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
