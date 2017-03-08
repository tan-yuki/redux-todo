import {ActionTypes, ADD_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TODO} from "./action-types";
import {Action, ActionCreatorsMapObject, ActionCreator} from "redux";
import {Dispatch} from "redux";
import {IState} from "../common/models/state/state";

interface IPayload {
}

interface IAction<T extends IPayload> extends Action {
  payload: T
  type: ActionTypes
}

export interface IAddTodoPayload extends IPayload {
  text: string
}

export interface IDeleteTodoPayload extends IPayload {
  id: number
}

export interface IToggleTodoPayload extends IPayload {
  id: number
}

export interface IUpdateTodoPayload extends IPayload {
  id: number
  text: string
}

export interface IFetchTodoRequestPayload extends IPayload {
  dispatch: Dispatch<IState>
}

export interface IFetchTodoRequestStartPayload extends IPayload {
}

export type IAddTodoAction    = IAction<IAddTodoPayload>
export type IUpdateTodoAction = IAction<IUpdateTodoPayload>
export type IDeleteTodoAction = IAction<IDeleteTodoPayload>
export type IToggleTodoAction = IAction<IToggleTodoPayload>

function addTodo(text: string): IAddTodoAction {
  return {
    type: `ADD_TODO` as ADD_TODO,
    payload: { text }
  };
}

function updateTodo(id: number, text: string): IUpdateTodoAction {
  return {
    type: `UPDATE_TODO` as UPDATE_TODO,
    payload: { id, text }
  };
}

function deleteTodo(id: number): IDeleteTodoAction {
  return {
    type: `DELETE_TODO` as DELETE_TODO,
    payload: { id }
  };
}

function toggleTodo(id: number): IToggleTodoAction {
  return {
    type: `TOGGLE_TODO` as TOGGLE_TODO,
    payload: { id }
  };
}

export interface IActionCreators extends ActionCreatorsMapObject {
  addTodo: ActionCreator<IAddTodoAction>
  updateTodo: ActionCreator<IUpdateTodoAction>
  deleteTodo: ActionCreator<IDeleteTodoAction>
  toggleTodo: ActionCreator<IToggleTodoAction>
}

export const actionCreators: IActionCreators = {
  addTodo,
  updateTodo,
  deleteTodo,
  toggleTodo,
};
