"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoItem = /** @class */ (function () {
    function TodoItem(id, task, complete) {
        if (complete === void 0) { complete = false; }
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    TodoItem.prototype.printDetails = function () {
        console.log(this.id + "\t" + this.task + " " + (this.complete ? "\t(complte)" : ""));
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
