import { TodoItem } from "../model/todoItem";

export class TodoCollection {
  private nextId: number = 1;
  private itemMap = new Map<number, TodoItem>();

  constructor(public userName: string, public todoItems: TodoItem[] = []) {
    todoItems.forEach((item) => this.itemMap.set(item.id, item));
  }

  addTodo(task: string): number {
    while (this.getTodoById(this.nextId)) {
      this.nextId++;
    }
    //this.todoItems.push(new TodoItem(this.nextId, task));
    this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
    return this.nextId;
  }
  getTodoById(id: number): TodoItem | undefined {
    // let indexItem: number = this.todoItems
    //   .map(function (e) {
    //     return e.id;
    //   })
    //   .indexOf(id);
    // return indexItem != -1 ? this.todoItems[indexItem] : null;
    return this.itemMap.get(id);
  }
  getTodoItems(includeComplete: boolean): TodoItem[] {
    let arrMap: string[] = [...this.itemMap.values()];
    return [...this.itemMap.values()].filter(
      (item) => includeComplete || !item.complete
    );
  }

  markComplete(id: number, complete: boolean) {
    const todoItem = this.getTodoById(id);
    if (todoItem) {
      todoItem.complete = complete;
    }
  }
}
