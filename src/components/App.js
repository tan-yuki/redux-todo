import React, {Component, PropTypes} from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';

export default class App extends Component {

  static propTypes = {
    onChangeCheckbox: PropTypes.func.isRequired,
    onDeleteTodoItem: PropTypes.func.isRequired,
    onUpdateTodoItem: PropTypes.func.isRequired,
    onClickAddButton: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {
      onChangeCheckbox,
      onDeleteTodoItem,
      onClickAddButton,
      onUpdateTodoItem,
      todos} = this.props;

    return (<div>
      <AddForm onClickAddButton={onClickAddButton} />
      <TodoList
        onChangeCheckbox={onChangeCheckbox}
        onDeleteTodoItem={onDeleteTodoItem}
        onUpdateTodoItem={onUpdateTodoItem}
        todos={todos} />
    </div>);
  }
}
