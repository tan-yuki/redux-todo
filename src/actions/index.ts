import {ActionTypes} from "./action-types";
import {Action, ActionCreatorsMapObject, ActionCreator} from "redux";
import {IAddTodoAction, addTodo} from "./add-todo-action";
import {IUpdateTodoAction, updateTodo} from "./update-todo-action";
import {IDeleteTodoAction, deleteTodo} from "./delete-todo-action";
import {IToggleTodoAction, toggleTodo} from "./toggle-todo-action";

export interface IPayload {
}

export interface IAction<A extends ActionTypes, T extends IPayload> extends Action {
  payload: T
  type: A
}

export interface IActionCreators extends ActionCreatorsMapObject {
  addTodo: ActionCreator<IAddTodoAction>
  updateTodo: ActionCreator<IUpdateTodoAction>
  deleteTodo: ActionCreator<IDeleteTodoAction>
  toggleTodo: ActionCreator<IToggleTodoAction>
}

export const actionCreators: IActionCreators = {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
