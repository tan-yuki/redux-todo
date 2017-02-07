import {Action} from "./action";
import {ActionTypes} from "./action-types";
import {ActionCreator} from "redux/index";

export interface IDeleteTodoPayload {
  id: number
}

export const deleteTodo: ActionCreator<Action> = (id: number): Action => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: {id}
  };
};
