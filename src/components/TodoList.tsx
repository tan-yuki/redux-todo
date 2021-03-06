import * as React from 'react';
import {TodoItem} from './TodoItem';
import {ITodos} from "../common/models/todos";

interface ITodoListProps {
  todos: ITodos,
  actions: any
}
interface ITodoListState {}

export class TodoList
  extends React.Component<ITodoListProps, ITodoListState> {

  render() {
    let props = this.props as ITodoListProps;

    return (<ul id="todo-list">
     {props.todos.map((t) => {
       return <TodoItem
         key={t.id}
         id={t.id}
         name={t.name}
         checked={t.checked}
         actions={props.actions}
       />
     })}
    </ul>);
  }
}
