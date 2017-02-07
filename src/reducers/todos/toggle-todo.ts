import {ITodoState} from "../../common/models/state/todo-state";
import {IToggleTodoPayload} from "../../actions/toggle-todo-action";
import {Action} from "../../actions/action";

export function toggleTodo(state: ITodoState,
                           action: Action): ITodoState {
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
