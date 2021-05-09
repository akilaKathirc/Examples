import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Todo } from '../app.component';
import * as FromActions from './todo.action';

export interface TodoState extends EntityState<Todo> {
    loading: boolean;
    error: string;
}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const defaultTodoState: TodoState = {
    loading: false,
    error: '',
    entities: {},
    ids: []
}

export const initialTodoState: TodoState = todoAdapter.getInitialState(defaultTodoState);

export function reducer(state: TodoState = initialTodoState, action: FromActions.TodoActions): TodoState {
    switch (action.type) {
        case FromActions.TodoActionTypes.ADD_TODO:
            {
                return { ...state, loading: true }
            }

        case FromActions.TodoActionTypes.ADD_TODO_SUCCEESS:
            {
                return { ...state, loading: false }
            }

        case FromActions.TodoActionTypes.ADD_TODO_FAILURE:
            {
                return { ...state, loading: false, error: ' something went wrong' };
            }

        case FromActions.TodoActionTypes.UPDATE_TODO:
            {
                return { ...state, loading: true }
            }

        case FromActions.TodoActionTypes.UPDATE_TODO_SUCCEESS:
            {
                return { ...state, loading: false }
            }

        case FromActions.TodoActionTypes.UPDATE_TODO_FAILURE:
            {
                return { ...state, loading: false, error: ' something went wrong' };
            }

        case FromActions.TodoActionTypes.DELETE_TODO:
            {
                return { ...state, loading: true }
            }

        case FromActions.TodoActionTypes.DELETE_TODO_SUCCEESS:
            {
                return { ...state, loading: false }
            }

        case FromActions.TodoActionTypes.DELETE_TODO_FAILURE:
            {
                return { ...state, loading: false, error: ' something went wrong' };
            }

        case FromActions.TodoActionTypes.GET_TODO:
            {
                return { ...state, loading: true }

            }

        case FromActions.TodoActionTypes.GET_TODO_SUCCEESS:
            {
                const act = action as FromActions.GetTodoSuccess;
                return todoAdapter.setAll(act.payload.todos, {
                    ...state,
                    loading: false,
                });
            }

        case FromActions.TodoActionTypes.GET_TODO_FAILURE:
            {
                return { ...state, loading: false, error: ' something went wrong' };
            }
        default:
            return state;

    }

}