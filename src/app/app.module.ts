import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    CustomDatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
