import {Action} from "redux/index";
import {ITodoState} from "../../common/models/state/todo-state";

export interface IUpdateTodoAction extends Action {
  id: number
  name: string
}

export function updateTodo(state: ITodoState,
                           action: IUpdateTodoAction): ITodoState {
  return {
    data: state.data.map((t) => {
      if (t.id === action.id) {
        return Object.assign({}, t, {
          name: action.name
        });
      }

      return t;
    })
  }
}
