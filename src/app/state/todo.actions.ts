import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo.model";

export const addTodo = createAction("[Todos] Add", props<{ title: string }>());
export const completeTodo = createAction(
  "[Todos] Complete",
  props<{ id: string }>()
);
export const removeTodo = createAction(
  "[Todos] Remove",
  props<{ id: string }>()
);
