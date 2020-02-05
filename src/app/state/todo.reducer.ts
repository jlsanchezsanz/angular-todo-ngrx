import { createReducer, on } from "@ngrx/store";

import { Todo } from "../todo.model";
import { addTodo, completeTodo, removeTodo } from "./todo.actions";

export interface TodoState {
  todos: Todo[];
}

export const initialState = {
  todos: []
};

const _todoReducer = createReducer(
  initialState,
  on(addTodo, (state, action) => {
    const id = state.todos.length
      ? `${parseInt(state.todos[state.todos.length - 1].id, 10) + 1}`
      : "1";
    const { title } = action;
    return {
      todos: [...state.todos, { title, id, isCompleted: false }]
    };
  }),
  on(completeTodo, (state, action) => ({
    todos: state.todos.map(todo => {
      if (todo.id === action.id) {
        todo.isCompleted = true;
      }
      return todo;
    })
  })),
  on(removeTodo, (state, action) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.id)
  }))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
