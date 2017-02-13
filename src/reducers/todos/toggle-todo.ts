import {ITodoState} from "../../common/models/state/todo-state";
import {Action, IToggleTodoPayload} from "../../actions/index";

export function toggleTodo(state: ITodoState,
                           action: Action<IToggleTodoPayload>): ITodoState {
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
