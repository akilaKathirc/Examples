import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodo, DeleteTodo, GetTodo, UpdateTodo } from './store/todo.action';
import { TodoState } from './store/todo.reducer';
import { getTodos } from './store/todo.selector';
import { TodoService } from './todo.service';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public todoForm: FormGroup;

  public todos: Observable<Todo[]>;

  constructor(
    private formBuilder: FormBuilder,
    // public todoService: TodoService
    public store: Store<TodoState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodo());
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]],
    });

    this.todos = this.store.select(getTodos);
  }

  add() {
    if (this.todoForm.valid) {
      const title: string = this.todoForm.get('title').value as string;
      this.store.dispatch(new AddTodo({ todotitle: title }));
      this.todoForm.reset();
      this.store.dispatch(new GetTodo());
    }
  }

  update(todo: Todo) {
    this.store.dispatch(new UpdateTodo({ todoId: todo.id }));
    this.store.dispatch(new GetTodo());
  }

  delete(todo: Todo) {
    this.store.dispatch(new DeleteTodo({ todoId: todo.id }));
    this.store.dispatch(new GetTodo());
  }
}
