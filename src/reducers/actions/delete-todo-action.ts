import {Action} from "redux/index";
import {ITodoState} from "../../common/models/state/todo-state";

export interface IDeleteTodoAction extends Action {
    id: number
}

export function deleteTodo(state: ITodoState,
                           action: IDeleteTodoAction): ITodoState {
  return {
    data: state.data.filter((item) => item.id !== action.id)
  };
}
