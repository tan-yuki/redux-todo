import {FETCH_TODO_REQUEST_SUCCESS} from "./action-types";
import {IPayload, IAction} from "./index";
import {Dispatch} from "redux";
import {ITodoState} from "../common/models/state/todo-state";

export interface IFetchTodoRequestSuccessPayload extends IPayload {
  response: any
}

export type IFetchTodoRequestSuccessAction = IAction<FETCH_TODO_REQUEST_SUCCESS, IFetchTodoRequestSuccessPayload>

export function fetchTodoRequestSuccess(response: any): IFetchTodoRequestSuccessAction {
  return {
    type: `FETCH_TODO_REQUEST_SUCCESS` as FETCH_TODO_REQUEST_SUCCESS,
    payload: {
      response
    }
  };
}

export function fetchTodoRequest() {
  return function(dispatch: Dispatch<ITodoState>) {
    return new Promise(() => setTimeout(() => {
      dispatch(fetchTodoRequestSuccess([
        {"id": 1, "name": "apple", "checked": false},
        {"id": 2, "name": "orange", "checked": true},
        {"id": 3, "name": "banana", "checked": false}
      ]));
    }, 500));
  };
}

