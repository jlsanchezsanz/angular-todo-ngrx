import { Component, ViewChild, ElementRef } from "@angular/core";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("todoInput", { static: false }) todoInput: ElementRef;

  constructor(public todoService: TodoService) {}

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
