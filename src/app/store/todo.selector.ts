import { createSelector, createFeatureSelector } from '@ngrx/store';
import { todoAdapter, TodoState } from './todo.reducer';


const todoFeatureSelector = createFeatureSelector<TodoState>('todos');

export const getTodos = createSelector(todoFeatureSelector, todoAdapter.getSelectors().selectAll);

export const getLoading = createSelector(todoFeatureSelector, (state) => {
    state.loading;
});


export const getEntities = createSelector(todoFeatureSelector, (state) => {
    state.entities;
});


export const getErrors = createSelector(todoFeatureSelector, (state) => {
    state.error;
});


export const getIds = createSelector(todoFeatureSelector, (state) => {
    state.ids;
});