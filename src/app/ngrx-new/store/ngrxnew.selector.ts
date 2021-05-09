import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState, todoAdapter } from "./ngrxnew.reducers";


const featureSelector = createFeatureSelector<TodoState>('totodooo');

export const getTodos = createSelector(featureSelector, todoAdapter.getSelectors().selectAll);

export const getEntities = createSelector(featureSelector, (state) => {
    return state.entities;
});


export const getLoading = createSelector(featureSelector, (state) => {
    return state.loading;
})


export const getIds = createSelector(featureSelector, (state) => {
    return state.ids;
})


export const getError = createSelector(featureSelector, (state) => {
    return state.error;
})