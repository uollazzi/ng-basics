import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CalciatoriComponent } from './calciatori/calciatori.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { PiedeComponent } from './piede/piede.component';
import { CalciatorePreviewComponent } from './calciatore-preview/calciatore-preview.component';
import { CalciatoreDetailComponent } from './calciatore-detail/calciatore-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddComponent } from './todo-add/todo-add.component';


@NgModule({
  declarations: [
    AppComponent,
    CalciatoriComponent,
    ProvaComponent,
    PiedeComponent,
    CalciatorePreviewComponent,
    CalciatoreDetailComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
