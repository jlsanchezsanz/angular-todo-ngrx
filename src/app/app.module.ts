import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppComponent } from "./app.component";
import { TodoService } from "./todo.service";
import { todoReducer } from "./state/todo.reducer";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreDevtoolsModule,
    StoreModule.forRoot({ todos: todoReducer })
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
