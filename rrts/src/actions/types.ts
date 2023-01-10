// Because we are only interested in having a unique "id" for action types, we can just use the default assignment by typescript without assigning to a string manually
export enum ActionTypes {
    fetchTodos // By default, typescript will assign the first enum to be = 0, 1 and so on
}