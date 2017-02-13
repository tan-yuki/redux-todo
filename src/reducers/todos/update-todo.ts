import {ITodoState} from "../../common/models/state/todo-state";
import {Action, IUpdateTodoPayload} from "../../actions/index";

export function updateTodo(state: ITodoState,
                           action: Action<IUpdateTodoPayload>): ITodoState {
  return {
    data: state.data.map((t) => {
      if (t.id === action.payload.id) {
        return Object.assign({}, t, {
          name: action.payload.text
        });
      }

      return t;
    })
  }
}
