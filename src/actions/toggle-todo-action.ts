import {IPayload, IAction} from "./index";
import {TOGGLE_TODO} from "./action-types";

export interface IToggleTodoPayload extends IPayload {
  id: number
}

export type IToggleTodoAction = IAction<TOGGLE_TODO, IToggleTodoPayload>

export function toggleTodo(id: number): IToggleTodoAction {
  return {
    type: `TOGGLE_TODO` as TOGGLE_TODO,
    payload: { id }
  };
}
