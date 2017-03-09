import {ITodoState} from "../../common/models/state/todo-state";
import {IFetchTodoRequestSuccessAction} from "../../actions/fetch-todo-action";

export function fetchTodos(_: ITodoState,
                           action: IFetchTodoRequestSuccessAction): ITodoState {
  return {
    data: action.payload.response
  };
}
