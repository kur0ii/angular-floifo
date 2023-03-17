import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo;

  @Output()
  todoUpdated = new EventEmitter<Todo>();

  editMode = false;

  closeEditModeAndTriggerTodoUpdate() {
    this.editMode = false;
    this.todoUpdated.emit(this.todo);
  }

  constructor() {}

  ngOnInit() {}
}
