import {Action} from "redux/index";
import {IState} from "../../common/models/state/state";
import {ITodoState} from "../../common/models/state/todo-state";

export interface IAddTodoAction extends Action {
  name: string
}

export function addTodo(maxId: number,
                        state: ITodoState,
                        action: IAddTodoAction): ITodoState {
  let newTodo = {
    id: maxId + 1,
    name: action.name,
    checked: false
  };
  
  return {
  data: [...state.data, newTodo]
  };
}
