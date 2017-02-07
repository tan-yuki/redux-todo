import {Action} from "./action";
import {ActionTypes} from "./action-types";
import {ActionCreator} from "@types/react-redux";

export interface IAddTodoPayload {
  name: string;
}

export const addTodo: ActionCreator<Action> = (name: string): Action => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      name
    }
  };
};

