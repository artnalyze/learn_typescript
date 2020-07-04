"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todoItem_1 = require("../model/todoItem");
var TodoCollection = /** @class */ (function () {
    function TodoCollection(userName, todoItems) {
        if (todoItems === void 0) { todoItems = []; }
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
    }
    TodoCollection.prototype.addTodo = function (task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    };
    TodoCollection.prototype.getTodoById = function (id) {
        var indexITem = this.todoItems
            .map(function (e) {
            return e.id;
        })
            .indexOf(id);
        return this.todoItems[indexITem];
    };
    TodoCollection.prototype.markComplte = function (id, complete) {
        var todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    };
    return TodoCollection;
}());
exports.TodoCollection = TodoCollection;
