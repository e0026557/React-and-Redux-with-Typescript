import { Todo, Action, ActionTypes } from "../actions";

export const todosReducer = (state: Todo[] = [], action: Action) => {
  // Implicit type guarding
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => {
        return todo.id !== action.payload
      });
    default:
      return state; // in event that action type is not fetchTodos
  }
};
