import {ITodos} from "../todos";

export interface ITodoState {
  data: ITodos
}

export const initialTodoState: ITodoState = {
  data: [
    {"id": 1, "name": "apple", "checked": false},
    {"id": 2, "name": "orange", "checked": true},
    {"id": 3, "name": "banana", "checked": false}
  ]
};
