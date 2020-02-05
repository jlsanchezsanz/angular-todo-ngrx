import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { TodoState } from "./state/todo.reducer";
import { addTodo, completeTodo, removeTodo } from "./state/todo.actions";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private store$: Store<TodoState>) {}

  public addTodo(title: string): void {
    this.store$.dispatch(addTodo({ title }));
  }

  public removeTodo(id: string): void {
    this.store$.dispatch(removeTodo({ id }));
  }

  public setCompleted(id: string): void {
    this.store$.dispatch(completeTodo({ id }));
  }
}
