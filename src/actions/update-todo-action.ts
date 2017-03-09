import {IPayload, IAction} from "./index";
import {UPDATE_TODO} from "./action-types";

export interface IUpdateTodoPayload extends IPayload {
  id: number
  text: string
}

export type IUpdateTodoAction = IAction<UPDATE_TODO, IUpdateTodoPayload>

export function updateTodo(id: number, text: string): IUpdateTodoAction {
  return {
    type: `UPDATE_TODO` as UPDATE_TODO,
    payload: { id, text }
  };
}
