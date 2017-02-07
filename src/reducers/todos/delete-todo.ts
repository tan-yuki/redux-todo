import {ITodoState} from "../../common/models/state/todo-state";
import {IDeleteTodoPayload} from "../../actions/delete-todo-action";
import {Action} from "../../actions/action";

export function deleteTodo(state: ITodoState,
                           action: Action): ITodoState {
  return {
    data: state.data.filter((item) => item.id !== action.payload.id)
  };
}
