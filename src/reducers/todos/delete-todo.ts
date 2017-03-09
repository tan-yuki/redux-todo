import {ITodoState} from "../../common/models/state/todo-state";
import {IDeleteTodoAction} from "../../actions/delete-todo-action";

export function deleteTodo(state: ITodoState,
                           action: IDeleteTodoAction): ITodoState {
  return {
    data: state.data.filter((item) => item.id !== action.payload.id)
  };
}
