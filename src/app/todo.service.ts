import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private _todos: Todo[] = [
    {
      id: "123",
      title: "New task 1",
      isCompleted: false
    },
    {
      id: "124",
      title: "New task 2",
      isCompleted: false
    },
    {
      id: "125",
      title: "New task 3",
      isCompleted: false
    },
    {
      id: "126",
      title: "New task 4",
      isCompleted: false
    }
  ];

  constructor() {}

  public set todos(_todos: Todo[]) {
    this._todos = _todos;
  }

  public get todos(): Todo[] {
    return this._todos;
  }

  public get uncompletedTodos(): Todo[] {
    return this.todos.filter(todo => !todo.isCompleted);
  }

  public get completedTodos(): Todo[] {
    return this.todos.filter(todo => todo.isCompleted);
  }

  public addTodo(title: string): void {
    this.todos.push({ id: "1", title, isCompleted: false });
  }

  public removeTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  public setCompleted(id: string): void {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }
      return todo;
    });
  }
}
