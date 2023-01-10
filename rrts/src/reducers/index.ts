import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

// Describe the entire state in the redux store
export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducer, // TS is validating that our todosReducer is actually returning an array of todos
});
