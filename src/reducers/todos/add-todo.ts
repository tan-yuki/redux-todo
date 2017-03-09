import {ITodoState} from "../../common/models/state/todo-state";
import {IAddTodoAction} from "../../actions/add-todo-action";

export function addTodo(maxId: number,
                        state: ITodoState,
                        action: IAddTodoAction): ITodoState {
  let newTodo = {
    id: maxId + 1,
    name: action.payload.text,
    checked: false
  };
  
  return {
  data: [...state.data, newTodo]
  };
}
