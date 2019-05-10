import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SuccessComponent } from './success/success.component';
import { Success1Component } from './success1/success1.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessComponent,
    Success1Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
