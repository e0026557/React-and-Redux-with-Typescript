import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// Used to describe action object
export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        // Tell Typescript that we should get back an array of Todos
        const response = await axios.get<Todo[]>(url);

        // Ensure that action object is correctly specified
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data
        });
    };
};