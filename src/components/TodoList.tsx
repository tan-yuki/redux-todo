import * as React from 'react';
import {TodoItem} from './TodoItem';
import {ITodos} from "../common/models/todos";

interface ITodoListProps {
  todos: ITodos
}
interface ITodoListState {}

export class TodoList
  extends React.Component<ITodoListProps, ITodoListState> {
  
  constructor(props: ITodoListProps) {
    super(props);
  }

  render() {
   const {todos} = this.props;

   return (<ul id="todo-list">
     {todos.map((t) => {
       return <TodoItem
         key={t.id}
         id={t.id}
         name={t.name}
         checked={t.checked}
       />
     })}
    </ul>);
  }
}

