import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeInputComponent } from './change-input/change-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    TodoItemComponent,
    ChangeInputComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
