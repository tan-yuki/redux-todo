import {ITodoState} from "../../common/models/state/todo-state";
import {Action, IDeleteTodoPayload} from "../../actions/index";

export function deleteTodo(state: ITodoState,
                           action: Action<IDeleteTodoPayload>): ITodoState {
  return {
    data: state.data.filter((item) => item.id !== action.payload.id)
  };
}
