import * as React from 'react';
import {AddForm} from './AddForm';
import {TodoList} from './TodoList';
import {ITodos} from "../common/models/todos";

interface IAppProps {
  todos: ITodos
}
interface IAppState {
}

export class App extends React.Component<IAppProps, IAppState> {
  
  constructor(props: IAppProps) {
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
