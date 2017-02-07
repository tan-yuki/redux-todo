import {addTodo} from "./add-todo-action";
import {updateTodo} from "./update-todo-action";
import {deleteTodo} from "./delete-todo-action";
import {toggleTodo} from "./toggle-todo-action";

export interface Actions {
  addTodo: Function;
  updateTodo: Function;
  deleteTodo: Function;
  toggleTodo: Function;
}

export const actionCreators = {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo
};

