import {addTodo} from "../../../src/reducers/todos/add-todo";
import {ITodoState} from "../../../src/common/models/state/todo-state";
import {IAddTodoPayload, actionCreators} from "../../../src/actions/index";
import * as assert from "power-assert";
import * as _ from "lodash";

describe("reducer addTodo", () => {
  it("can add todo", () => {
    let maxId = 999;
    let state = {data: [
      {"id": 1, "name": "apple", "checked": false},
      {"id": 2, "name": "orange", "checked": true},
      {"id": 3, "name": "banana", "checked": false}
    ]} as ITodoState;
    let action = actionCreators.addTodo({text: `this is todo`} as IAddTodoPayload);

    let newState = addTodo(maxId, state, action);

    assert(newState.data.length === 4);
    assert(_.last(newState.data).id === maxId + 1);
    assert(_.last(newState.data).name === `this is todo`);
    assert(!_.last(newState.data).checked);
  });
});


