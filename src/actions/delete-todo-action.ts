import {IAction, IPayload} from "./index";
import {DELETE_TODO} from "./action-types";

export interface IDeleteTodoPayload extends IPayload {
  id: number
}

export type IDeleteTodoAction = IAction<DELETE_TODO, IDeleteTodoPayload>

export function deleteTodo(id: number): IDeleteTodoAction {
  return {
    type: `DELETE_TODO` as DELETE_TODO,
    payload: { id }
  };
}



