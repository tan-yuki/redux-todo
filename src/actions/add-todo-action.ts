import {ADD_TODO} from "./action-types";
import {IPayload, IAction} from "./index";

export interface IAddTodoPayload extends IPayload {
  text: string
}

export type IAddTodoAction = IAction<ADD_TODO, IAddTodoPayload>

export function addTodo(text: string): IAddTodoAction {
  return {
    type: `ADD_TODO` as ADD_TODO,
    payload: { text }
  };
}

