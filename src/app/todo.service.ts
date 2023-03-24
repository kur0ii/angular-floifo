import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Todo } from './model/todo';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private linkGet =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo';
  private linkDelete =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo';
  private linkPost =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo';
  private linkPut =
    'https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.linkGet);
  }

  createTodo(label: string): Observable<boolean> {
    const todo: Todo = {
      label: label,
      done: false,
      id: Math.floor(Math.random() * 1000).toString(),
      creationDate: new Date().valueOf(),
    };

    return (
      this.http
        .post<Todo>(this.linkPost, todo)
        .pipe(catchError(() => of(false))),
      of(true)
    );
  }

  updateTodo(todo: Todo): Observable<boolean> {
    const indexToUpdate = this.getTodos().subscribe((todos) => {
      todos.findIndex((e1) => e1.id === todo.id);
    });
    return (
      this.http
        .put<Todo>(this.linkPut.concat(indexToUpdate.toString()), todo)
        .pipe(map((todos) => todos.splice(indexToUpdate,1,todo)))
    );
  }
}
