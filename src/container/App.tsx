import {connect} from "react-redux";
import * as React from "react";

import {IState} from "../common/models/state/state";
import {AddForm} from "../components/AddForm";
import {TodoList} from "../components/TodoList";

import {actionCreators, Actions} from "../actions/index";
import {bindActionCreators} from "redux";
import {ITodos} from "../common/models/todos";

export interface IAppState {
  todos: ITodos
}

export interface IDispatchProps {
  actions: Actions
}


let mapStateToProps = (state: IState): IAppState => {
  return {
    todos: state.todos.data
  };
};

let mapDispatchToProps = (dispatch): IDispatchProps => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
};

class App extends React.Component<IAppState & IDispatchProps> {
  render() {
    const {todos, actions} = this.props;

    return (<div>
      <AddForm actions={actions} />
      <TodoList todos={todos}
                actions={actions} />
    </div>);
  }
}

export default connect<IAppState, IDispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);
