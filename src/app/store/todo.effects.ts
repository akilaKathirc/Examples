import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../todo.service";
import { AddTodo, AddTodoFailure, AddTodoSuccess, DeleteTodo, DeleteTodoFailure, DeleteTodoSuccess, GetTodo, GetTodoFailure, GetTodoSuccess, TodoActionTypes, UpdateTodo, UpdateTodoFailure, UpdateTodoSuccess } from "./todo.action";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from "rxjs";

@Injectable()

export class TodoEffects {
    constructor(public todoService: TodoService, public actions: Actions) { }

    public getTodos = createEffect(() => {
        return this.actions.pipe(
            ofType<GetTodo>(TodoActionTypes.GET_TODO),
            mergeMap(() => {
                return this.todoService.getTodos().pipe(
                    map((todos) => new GetTodoSuccess({ todos })),
                    catchError(() => of(new GetTodoFailure()))
                )
            })
        );
    });

    public addTodos = createEffect(() => {
        return this.actions.pipe(
            ofType<AddTodo>(TodoActionTypes.ADD_TODO),
            mergeMap(async (action) => {
                return this.todoService
                    .addTodo(action.payload.todotitle)
                    .then(() => new AddTodoSuccess())
                    .catch(() => new AddTodoFailure());
            })
        );
    });


    public updateTodos = createEffect(() => {
        return this.actions.pipe(
            ofType<UpdateTodo>(TodoActionTypes.UPDATE_TODO),
            mergeMap(async (action) => {
                return this.todoService
                    .updateTodo(action.payload.todoId)
                    .then(() => new UpdateTodoSuccess())
                    .catch(() => new UpdateTodoFailure());
            })
        );
    });


    public deleteTodos = createEffect(() => {
        return this.actions.pipe(
            ofType<DeleteTodo>(TodoActionTypes.DELETE_TODO),
            mergeMap(async (action) => {
                return this.todoService
                    .deleteTodo(action.payload.todoId)
                    .then(() => new DeleteTodoSuccess())
                    .catch(() => new DeleteTodoFailure());
            })
        );
    });
}