import {Reducer} from "redux/index";
import * as _ from "lodash";

import {ITodoState, initialTodoState} from "../../common/models/state/todo-state";
import {ITodo} from "../../common/models/todo";
import {addTodo} from "./add-todo";
import {deleteTodo} from "./delete-todo";
import {toggleTodo} from "./toggle-todo";
import {updateTodo} from "./update-todo";
import {ActionTypes} from "../../actions/action-types";
import {Action} from "../../actions/action";

let maxId = initialTodoState.data.length;

let reducer: Reducer<ITodoState> = (state: ITodoState = initialTodoState, action: Action): ITodoState => {
  switch(action.type) {
    case ActionTypes.TOGGLE_TODO:
      return toggleTodo(state, action);
    case ActionTypes.ADD_TODO:
      let newState = addTodo(maxId, state, action);
      maxId = _.max(newState.data.map((todo: ITodo) => todo.id));
      return newState;
    case ActionTypes.UPDATE_TODO:
      return updateTodo(state, action);
    case ActionTypes.DELETE_TODO:
      return deleteTodo(state, action);
    default:
      return state;
  }
};

export default reducer;


