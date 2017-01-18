import * as React from 'react';
import AddForm from './AddForm';
import TodoList from './TodoList';

export default class App extends React.Component<any, any> {

  static propTypes = {
    todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  }

  constructor(props: any) {
    super(props);
  }

  render() {
    const {todos} = this.props;

    return (<div>
      <AddForm />
      <TodoList todos={todos} />
    </div>);
  }
}
