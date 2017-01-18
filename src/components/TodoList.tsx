import * as React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  static propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
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

