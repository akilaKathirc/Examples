import { Action } from '@ngrx/store';
import { Todo } from '../app.component';

export enum TodoActionTypes {
    GET_TODO = 'GET_TODO',
    GET_TODO_SUCCEESS = 'GET_TODO_SUCCEESS',
    GET_TODO_FAILURE = 'GET_TODO_FAILURE',

    ADD_TODO = 'ADD_TODO',
    ADD_TODO_SUCCEESS = 'ADD_TODO_SUCCEESS',
    ADD_TODO_FAILURE = 'ADD_TODO_FAILURE',

    UPDATE_TODO = 'UPDATE_TODO',
    UPDATE_TODO_SUCCEESS = 'UPDATE_TODO_SUCCEESS',
    UPDATE_TODO_FAILURE = 'UPDATE_TODO_FAILURE',

    DELETE_TODO = 'DELETE_TODO',
    DELETE_TODO_SUCCEESS = 'DELETE_TODO_SUCCEESS',
    DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE',
}

export class GetTodo implements Action {
    readonly type: string = TodoActionTypes.GET_TODO;
}

export class GetTodoSuccess implements Action {
    readonly type: string = TodoActionTypes.GET_TODO_SUCCEESS;
    constructor(public payload: { todos: Todo[] }) { }
}

export class GetTodoFailure implements Action {
    readonly type: string = TodoActionTypes.GET_TODO_FAILURE;
}

export class AddTodo implements Action {
    readonly type: string = TodoActionTypes.ADD_TODO;
    constructor(public payload: { todotitle: string }) { }
}

export class AddTodoSuccess implements Action {
    readonly type: string = TodoActionTypes.ADD_TODO_SUCCEESS;
}

export class AddTodoFailure implements Action {
    readonly type: string = TodoActionTypes.ADD_TODO_FAILURE;
}

export class UpdateTodoSuccess implements Action {
    readonly type: string = TodoActionTypes.UPDATE_TODO_SUCCEESS;
}

export class UpdateTodoFailure implements Action {
    readonly type: string = TodoActionTypes.UPDATE_TODO_FAILURE;
}

export class UpdateTodo implements Action {
    readonly type: string = TodoActionTypes.UPDATE_TODO;
    constructor(public payload: { todoId: number }) { }
}

export class DeleteTodoSuccess implements Action {
    readonly type: string = TodoActionTypes.DELETE_TODO_SUCCEESS;
}

export class DeleteTodoFailure implements Action {
    readonly type: string = TodoActionTypes.DELETE_TODO_FAILURE;
}

export class DeleteTodo implements Action {
    readonly type: string = TodoActionTypes.DELETE_TODO;
    constructor(public payload: { todoId: number }) { }
}


export type TodoActions =
    GetTodo |
    GetTodoSuccess |
    GetTodoFailure |

    UpdateTodo |
    UpdateTodoSuccess |
    UpdateTodoFailure |

    DeleteTodo |
    DeleteTodoSuccess |
    DeleteTodoFailure |

    AddTodo |
    AddTodoSuccess |
    AddTodoFailure;
