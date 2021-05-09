import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { mergeMap, map, catchError } from "rxjs/operators";
import { } from "src/app/store/todo.action";
import { TodoService } from "../todo.service";
import {
    AddNgrx, ADD_NGRX_NEW, GET_NGRX_NEW,
    AddNgrxSuccess,
    AddNgrxFailure,
    GetNgrx,
    GetNgrxSuccess,
    GetNgrxFailure
} from "./ngrxnew.actions";


@Injectable()

export class ngrxEffects {
    constructor(public todoService: TodoService, public actions: Actions) { }

    public addTodo = createEffect(() => {
        return this.actions.pipe(
            ofType<AddNgrx>(ADD_NGRX_NEW),
            mergeMap(async (action) => {
                return this.todoService.addTodo(action.payload.name)
                    .then(() => new AddNgrxSuccess())
                    .catch(() => new AddNgrxFailure())
            })
        );
    });


    public getTodos = createEffect(() => {
        return this.actions.pipe(
            ofType<GetNgrx>(GET_NGRX_NEW),
            mergeMap(() => {
                return this.todoService.getTodo().pipe(
                    map((todos) => new GetNgrxSuccess({ todos })),
                    catchError(() => of(new GetNgrxFailure())));
            })
        )
    });
}