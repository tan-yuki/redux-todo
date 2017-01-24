import {Action} from "redux/index";
import {ITodoState} from "../../common/models/state/todo-state";

export interface IToggleTodoAction extends Action {
    id: number
}

export function toggleTodo(state: ITodoState,
                           action: IToggleTodoAction): ITodoState {
  return {
    data: state.data.map((t) => {
      if (t.id === action.id) {
        return Object.assign({}, t, {
          checked: !t.checked
        });
      }
      return t;
    })
  }
}
