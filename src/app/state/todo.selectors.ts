import { createSelector } from "@ngrx/store";
import { Todo } from "../todo.model";

export const getTodos = state => state.todos.todos;

export const getCompletedTodos = createSelector(getTodos, (todos: Todo[]) =>
  todos.filter(todo => todo.isCompleted)
);

export const getUncompletedTodos = createSelector(getTodos, (todos: Todo[]) =>
  todos.filter(todo => !todo.isCompleted)
);
