import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    {
      label: 'Faire les courses',
      done: false,
      id: Math.floor(Math.random() * 1000).toString(),
      creationDate: new Date().valueOf(),
    },
  ];

  constructor() {}

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  createTodo(label: string): void {
    this.todos.push({
      label: label,
      done: false,
      id: Math.floor(Math.random() * 1000).toString(),
      creationDate: new Date().valueOf(),
    });
  }

  updateTodo(todo: Todo): void {
    const indexToUpdate = this.todos.findIndex((el) => el.id === todo.id);
    this.todos.splice(indexToUpdate, 1, todo);
  }
}
