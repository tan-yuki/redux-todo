import React, {Component, PropTypes} from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {

  static propTypes = {
    onChangeCheckbox: PropTypes.func.isRequired,
    onDeleteTodoItem: PropTypes.func.isRequired,
    onUpdateTodoItem: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {
      todos,
      onChangeCheckbox,
      onDeleteTodoItem,
      onUpdateTodoItem
    } = this.props;

    return (<ul id="todo-list">
        {todos.map((t) => {
          return <TodoItem
            key={t.id}
            id={t.id}
            name={t.name}
            checked={t.checked}
            onDeleteTodoItem={onDeleteTodoItem}
            onChangeCheckbox={onChangeCheckbox}
            onUpdateTodoItem={onUpdateTodoItem}
          />
        })}
      </ul>);
  }
}

