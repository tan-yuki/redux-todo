import {ITodoState} from "../../common/models/state/todo-state";
import {IUpdateTodoAction} from "../../actions/update-todo-action";

export function updateTodo(state: ITodoState,
                           action: IUpdateTodoAction): ITodoState {
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
