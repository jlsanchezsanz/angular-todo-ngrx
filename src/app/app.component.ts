import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { TodoService } from "./todo.service";
import { TodoState } from "./state/todo.reducer";
import { Observable } from "rxjs";
import { Todo } from "./todo.model";
import { getCompletedTodos, getTodos } from "./state/todo.selectors";
import { getUncompletedTodos } from "./state/todo.selectors";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild("todoInput", { static: false }) todoInput: ElementRef;

  public uncompletedTodos$: Observable<Todo[]>;
  public completedTodos$: Observable<Todo[]>;
  public todos$: Observable<Todo[]>;

  constructor(
    public todoService: TodoService,
    private store$: Store<TodoState>
  ) {}

  public ngOnInit(): void {
    this.todos$ = this.store$.pipe(select(getTodos));
    this.completedTodos$ = this.store$.pipe(select(getCompletedTodos));
    this.uncompletedTodos$ = this.store$.pipe(select(getUncompletedTodos));
  }

  public onAddTodo(title: string): void {
    this.todoService.addTodo(title);
  }

  public onCompleteTodo(id: string): void {
    this.todoService.setCompleted(id);
  }

  public onRemoveTodo(id: string): void {
    this.todoService.removeTodo(id);
  }
}
