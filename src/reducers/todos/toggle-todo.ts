import {ITodoState} from "../../common/models/state/todo-state";
import {IToggleTodoAction} from "../../actions/toggle-todo-action";

export function toggleTodo(state: ITodoState,
                           action: IToggleTodoAction): ITodoState {
  return {
    data: state.data.map((t) => {
      if (t.id === action.payload.id) {
        return Object.assign({}, t, {
          checked: !t.checked
        });
      }
      return t;
    })
  }
}
