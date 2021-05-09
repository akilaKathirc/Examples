import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddTodo, GetTodo } from '../store/todo.action';
import { TodoState } from './store/ngrxnew.reducers';
import { getTodos } from './store/ngrxnew.selector';

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-ngrx-new',
  templateUrl: './ngrx-new.component.html',
  styleUrls: ['./ngrx-new.component.scss']
})
export class NgrxNewComponent implements OnInit {
  public todos: Observable<Todo[]>;
  public todoForm = new FormGroup(
    { title: new FormControl('', Validators.required) }
  );

  constructor(public store: Store<TodoState>) { }

  ngOnInit(): void {
    this.store.dispatch(new GetTodo());
    this.todos = this.store.select(getTodos);
  }

  public add() {
    const todoTitle: string = this.todoForm.get('title').value as string;
    this.store.dispatch(new AddTodo({ todotitle: todoTitle }));
    this.store.dispatch(new GetTodo());
    // this.todos = this.store.select(getTodos);


  }
}
