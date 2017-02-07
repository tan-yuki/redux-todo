import {ITodoState} from "../../common/models/state/todo-state";
import {IUpdateTodoPayload} from "../../actions/update-todo-action";
import {Action} from "../../actions/action";

export function updateTodo(state: ITodoState,
                           action: Action): ITodoState {
  return {
    data: state.data.map((t) => {
      if (t.id === action.payload.id) {
        return Object.assign({}, t, {
          name: action.payload.name
        });
      }

      return t;
    })
  }
}
