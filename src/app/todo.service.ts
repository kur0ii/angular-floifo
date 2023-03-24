import { Injectable } from '@angular/core';
import { Todo } from './model/todo';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

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

  createTodo(label: string): Observable<boolean> {
    const newTodos = {
      label: label,
      done: false,
      id: Math.floor(Math.random() * 1000).toString(),
      creationDate: new Date().valueOf(),
    };

    return new Observable<boolean>((observer) => {
      this.todos.push(newTodos);
      observer.next(true);
      observer.complete();
    });
  }

  updateTodo(todo: Todo): void {
    const indexToUpdate = this.todos.findIndex((el) => el.id === todo.id);
    this.todos.splice(indexToUpdate, 1, todo);
  }
}
