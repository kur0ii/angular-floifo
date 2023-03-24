declare var M: any;

import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  inputValue: string = '';

  addTodoItem() {
    this.todoService.createTodo(this.inputValue);
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
    M.toast({ html: `Nouveau todo :  ${this.inputValue}` });
    this.inputValue = '';
  }

  showUserNotification(todo: Todo) {
    this.todoService.updateTodo(todo);
    this.todos = this.todoService.getTodos();
    M.toast({ html: `Le todo ${todo.label} a été mis à jour` });
  }

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
}
