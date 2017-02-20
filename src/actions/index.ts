import * as ReduxAction from "redux-actions";
import {createAction, ActionFunctionAny} from "redux-actions";
import {ActionTypes} from "./action-types";
import {ActionCreatorsMapObject} from "redux";

export interface Action<Payload> extends ReduxAction.Action<Payload> {
  
}

export interface Payload {

}

export interface IAddTodoPayload extends Payload {
  text: string
}

export interface IDeleteTodoPayload extends Payload {
  id: number
}

export interface IToggleTodoPayload extends Payload {
  id: number
}

export interface IUpdateTodoPayload extends Payload {
  id: number
  text: string
}

export interface Actions extends ActionCreatorsMapObject {
  addTodo: ActionFunctionAny<Action<IAddTodoPayload>>
  updateTodo: ActionFunctionAny<Action<IUpdateTodoPayload>>
  deleteTodo: ActionFunctionAny<Action<IDeleteTodoPayload>>
  toggleTodo: ActionFunctionAny<Action<IToggleTodoPayload>>
}

export const actionCreators: Actions = {
  addTodo: createAction<IAddTodoPayload>(ActionTypes.ADD_TODO),
  updateTodo: createAction<IUpdateTodoPayload>(ActionTypes.UPDATE_TODO),
  deleteTodo: createAction<IDeleteTodoPayload>(ActionTypes.DELETE_TODO),
  toggleTodo: createAction<IToggleTodoPayload>(ActionTypes.TOGGLE_TODO)
};

