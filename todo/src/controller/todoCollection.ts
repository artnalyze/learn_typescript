import { TodoItem } from "../model/todoItem";

export class TodoCollection {
  private nextId: number = 1;

  constructor(public userName: string, public todoItems: TodoItem[] = []) {}

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    this.todoItems.push(new TodoItem(this.nextId, task));
    return this.nextId;
  }
  getTodoById(id: number): TodoItem | null {
    let indexItem: number = this.todoItems
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);
    return indexItem != -1 ? this.todoItems[indexItem] : null;
  }
  markComplte(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}
