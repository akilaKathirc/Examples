import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

  constructor() { }

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }

  async addTodo(title: string): Promise<void> {
    const newTodo: Todo = {
      id: this.todos.length,
      title: title,
      completed: false,
    };

    this.todos = [...this.todos, newTodo];
    // this.todos.push(newTodo);
  }

  async updateTodo(id: number): Promise<void> {
    this.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }
      else {
        return todo;
      }
    });
    // this.todos[id].completed = !this.todos[id].completed;
  }

  async deleteTodo(id: number): Promise<void> {
    this.todos = this.todos.filter((val) => val.id !== id);
  }
}
