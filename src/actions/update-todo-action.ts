import {Action} from "./action";
import {ActionTypes} from "./action-types";
import {ActionCreator} from "@types/react-redux";

export interface IUpdateTodoPayload {
  id: number
  name: string
}

export const updateTodo: ActionCreator<Action> = (id: number,
                                                  name: string): Action => {
  return {
    type: ActionTypes.UPDATE_TODO,
    payload: {
      id, name
    }
  }
};
