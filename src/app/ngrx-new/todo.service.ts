import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './ngrx-new.component';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  public todos: Todo[];
  constructor() { }

  async addTodo(todoname: string): Promise<void> {
    const newTodo: Todo = {
      id: this.todos.length,
      name: todoname,
      completed: true
    }
    this.todos = [...this.todos, newTodo];
  }

  getTodo(): Observable<Todo[]> {
    return of(this.todos);
  }
}
