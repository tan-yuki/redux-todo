import {Action} from "redux/index";
import * as _ from "lodash";

import {ITodoState, initialTodoState} from "../../common/models/state/todo-state";
import {ITodo} from "../../common/models/todo";
import {IAddTodoAction, addTodo} from "actions/add-todo-action";
import {IDeleteTodoAction, deleteTodo} from "actions/delete-todo-action";
import {IToggleTodoAction, toggleTodo} from "actions/toggle-todo-action";
import {IUpdateTodoAction, updateTodo} from "actions/update-todo-action";

let maxId = initialTodoState.data.length;

/*
 * state:
 * [
 *   {
 *     id: number,
 *     name: string,
 *     checked: boolean
 *    }
 * ]
 */
export default (state: ITodoState = initialTodoState, action: Action) => {
  switch(action.type) {
    case 'TOGGLE_TODO':
      return toggleTodo(state, <IToggleTodoAction>action);
    case 'ADD_TODO':
      let newState = addTodo(maxId, state, <IAddTodoAction>action);
      maxId = _.max(newState.data.map((todo: ITodo) => todo.id));
      return newState;
    case 'UPDATE_TODO':
      return updateTodo(state, <IUpdateTodoAction>action);
    case 'DELETE_TODO':
      return deleteTodo(state, <IDeleteTodoAction>action);
    default:
      return state;
  }
};


