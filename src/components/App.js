import React, {Component, PropTypes} from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';

export default class App extends Component {

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render() {
    const {todos} = this.props;

    return (<div>
      <AddForm />
      <TodoList todos={todos} />
    </div>);
  }
}
