import {connect} from "react-redux";
import * as React from "react";

import {IState} from "../common/models/state/state";
import {AddForm} from "../components/AddForm";
import {TodoList} from "../components/TodoList";

import {bindActionCreators, Dispatch} from "redux";
import {ITodos} from "../common/models/todos";
import {actionCreators, IActionCreators} from "../actions/index";

export interface IAppState {
  todos: ITodos
}

export interface IDispatchProps {
  actions: IActionCreators
}

let mapStateToProps = (state: IState): IAppState => {
  return {
    todos: state.todos.data
  };
};

let mapDispatchToProps = (dispatch: Dispatch<IState>): IDispatchProps => {
  return {
    actions: bindActionCreators<IActionCreators>(actionCreators, dispatch)
  };
};

class App extends React.Component<IAppState & IDispatchProps, undefined> {
  render() {
    const {todos, actions} = this.props;

    return (<div>
      <AddForm actions={actions} />
      <TodoList todos={todos}
                actions={actions} />
    </div>);
  }
}

export const AppContainer = connect<IAppState, IDispatchProps, any>(mapStateToProps, mapDispatchToProps)(App);
