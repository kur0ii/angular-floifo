import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private linkGet = "https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo" ; 
  private linkDelete = "https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo" ; 
  private linkPost = "https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo" ;
  private linkPut =  "https://europe-west1-cours-angular-263913.cloudfunctions.net/todoapp/todo" ;
  private todos = Observable<Todo[]> ; 

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

    return this.http.post<boolean>(this.linkPost, todo);
  }

  updateTodo(todo: Todo): Observable<boolean> {
    return this.http.put<boolean>(`${this.linkPut}/${todo.id}`, todo);
  }

  deleteTodoById(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.linkDelete}/${id}`);
  }
}
