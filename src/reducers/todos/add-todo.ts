import {ITodoState} from "../../common/models/state/todo-state";
import {Action} from "../../actions/action";

export function addTodo(maxId: number,
                        state: ITodoState,
                        action: Action): ITodoState {
  let newTodo = {
    id: maxId + 1,
    name: action.payload.name,
    checked: false
  };
  
  return {
  data: [...state.data, newTodo]
  };
}
