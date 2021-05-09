import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Todo } from "../ngrx-new.component";
import {
    ADD_NGRX_FAILURE,
    GetNgrxSuccess, ADD_NGRX_NEW, ADD_NGRX_SUCCESS, GET_NGRX_FAILURE, GET_NGRX_NEW, GET_NGRX_SUCCESS, NewActions
} from "./ngrxnew.actions";

export interface TodoState extends EntityState<Todo> {
    loading: boolean;
    error: string;

}

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

const initialState: TodoState = {
    loading: false,
    ids: [],
    entities: {},
    error: ''
}

export function ngrxreducer(state: TodoState = initialState, action: NewActions): TodoState {
    switch (action.type) {
        case ADD_NGRX_NEW: {
            return { ...state, loading: true }
        }

        case ADD_NGRX_SUCCESS: {
            return { ...state, loading: false }
        }

        case ADD_NGRX_FAILURE: {
            return { ...state, loading: false, error: 'Something went wrong' }
        }

        case GET_NGRX_NEW: {
            return { ...state, loading: true }
        }

        case GET_NGRX_SUCCESS: {
            const act = action as GetNgrxSuccess;
            return todoAdapter.setAll(act.payload.todos, {
                ...state,
                loading: false,
            });
        }

        case GET_NGRX_FAILURE: {
            return { ...state, loading: true, error: 'Something went wrong' }
        }
    }
}