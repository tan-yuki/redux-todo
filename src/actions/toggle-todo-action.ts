import {Action} from "./action";
import {ActionTypes} from "./action-types";
import {ActionCreator} from "@types/react-redux";

export interface IToggleTodoPayload {
  id: number
}

export const toggleTodo: ActionCreator<Action> = (id: number): Action => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: {id}
  };
};
