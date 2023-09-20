import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CalciatoriComponent } from './calciatori/calciatori.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionModule } from "ngx-bootstrap/accordion";
import { PiedeComponent } from './piede/piede.component';
import { CalciatorePreviewComponent } from './calciatore-preview/calciatore-preview.component';
import { CalciatoreDetailComponent } from './calciatore-detail/calciatore-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CalciatoriComponent,
    ProvaComponent,
    PiedeComponent,
    CalciatorePreviewComponent,
    CalciatoreDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
