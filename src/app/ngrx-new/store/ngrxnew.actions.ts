import { Action } from "@ngrx/store";
import { Todo } from "../ngrx-new.component";

export const ADD_NGRX_NEW = 'ADD_NGRX_NEW';
export const ADD_NGRX_SUCCESS = 'ADD_NGRX_SUCCESS';
export const ADD_NGRX_FAILURE = 'ADD_NGRX_FAILURE';

export const GET_NGRX_NEW = 'GET_NGRX_NEW';
export const GET_NGRX_SUCCESS = 'GET_NGRX_SUCCESS';
export const GET_NGRX_FAILURE = 'GET_NGRX_FAILURE';

export const DELETE_NGRX_NEW = 'DELETE_NGRX_NEW';
export const DELETE_NGRX_SUCCESS = 'DELETE_NGRX_SUCCESS';
export const DELETE_NGRX_FAILURE = 'DELETE_NGRX_FAILURE';


export const UPDATE_NGRX_NEW = 'UPDATE_NGRX_NEW';
export const UPDATE_NGRX_SUCCESS = 'UPDATE_NGRX_SUCCESS';
export const UPDATE_NGRX_FAILURE = 'UPDATE_NGRX_FAILURE';

export class AddNgrx implements Action {
    readonly type: string = ADD_NGRX_NEW;
    constructor(public payload: Todo) { }
}


export class AddNgrxSuccess implements Action {
    readonly type: string = ADD_NGRX_SUCCESS;
}


export class AddNgrxFailure implements Action {
    readonly type: string = ADD_NGRX_FAILURE;
}




export class GetNgrx implements Action {
    readonly type: string = GET_NGRX_NEW;
}


export class GetNgrxSuccess implements Action {
    readonly type: string = GET_NGRX_SUCCESS;
    constructor(public payload: { todos: Todo[] }) { }

}


export class GetNgrxFailure implements Action {
    readonly type: string = GET_NGRX_FAILURE;
}

export type NewActions = AddNgrx | AddNgrxSuccess | AddNgrxFailure | GetNgrx | GetNgrxSuccess | GetNgrxFailure;