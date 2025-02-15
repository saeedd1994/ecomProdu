import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductModule} from './product/product.module';
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatAnchor} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule,
    MatToolbar,
    MatToolbarRow,
    MatAnchor
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
